import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import configPromise from "@payload-config";
import { getPayload } from "payload";
import { HelpHeader } from "@/components/HelpHeader";
import { UnifiedFooter } from "@/components/UnifiedFooter";
import { ArrowRightIcon } from "@/components/icons";
import RichText from "@/components/RichText";
import {
  BLOG_POSTS,
  getPostBySlug,
  type BlogPost,
} from "@/lib/blog-posts";
import { pageMetadata } from "@/utilities/pageMetadata";
import { JsonLd, articleJsonLd } from "@/components/JsonLd";

/**
 * Blog post detail. Source of truth is the Payload `posts` collection;
 * the in-repo BLOG_POSTS list is kept as a fallback so a transient DB
 * outage doesn't 404 every article.
 */

interface ResolvedPost {
  source: "payload" | "lib";
  slug: string;
  title: string;
  hero: string;
  excerpt: string;
  dateLabel: string;
  category: string;
  author: string;
  // Lexical content for Payload posts; legacy block array for lib posts.
  content:
    | { kind: "lexical"; data: Record<string, unknown> }
    | { kind: "lib"; data: BlogPost["body"] };
}

function dateLabelFromIso(iso: string | null | undefined): string {
  if (!iso) return "";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "";
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function fromLib(post: BlogPost): ResolvedPost {
  return {
    source: "lib",
    slug: post.slug,
    title: post.title,
    hero: post.hero,
    excerpt: post.excerpt,
    dateLabel: post.dateLabel,
    category: post.category,
    author: post.author,
    content: { kind: "lib", data: post.body },
  };
}

async function findInPayload(slug: string): Promise<ResolvedPost | null> {
  try {
    const payload = await getPayload({ config: configPromise });
    const result = await payload.find({
      collection: "posts",
      where: { slug: { equals: slug }, _status: { equals: "published" } },
      limit: 1,
    });

    const doc = result.docs[0];
    if (!doc) return null;

    // The new fields (heroUrl, excerpt, displayCategory, displayAuthor)
    // won't appear in payload-types.ts until generate:types runs against
    // the migrated DB, so we read off a loose record cast.
    const d = doc as unknown as Record<string, unknown>;
    const title = typeof d.title === "string" ? d.title : "";
    const slugVal = typeof d.slug === "string" ? d.slug : slug;

    // Hero priority: uploaded heroImage (Media relationship) → legacy heroUrl.
    let resolvedHero = "";
    const hi = d.heroImage;
    if (hi && typeof hi === "object" && hi !== null) {
      const url = (hi as Record<string, unknown>).url;
      if (typeof url === "string" && url) resolvedHero = url;
    }
    if (!resolvedHero && typeof d.heroUrl === "string") resolvedHero = d.heroUrl;

    const excerpt = typeof d.excerpt === "string" ? d.excerpt : "";
    const displayCategory =
      typeof d.displayCategory === "string" ? d.displayCategory : "";
    const displayAuthor =
      typeof d.displayAuthor === "string" ? d.displayAuthor : "";

    const relatedCategory = Array.isArray(d.categories)
      ? (d.categories as Array<Record<string, unknown>>).find(
          (c) => typeof c === "object" && c !== null && typeof c.title === "string",
        )
      : null;
    const populatedAuthor = Array.isArray(d.populatedAuthors)
      ? (d.populatedAuthors[0] as Record<string, unknown> | undefined)
      : null;

    const lexicalContent =
      d.content && typeof d.content === "object"
        ? (d.content as Record<string, unknown>)
        : { root: { children: [] } };

    return {
      source: "payload",
      slug: slugVal,
      title,
      hero: resolvedHero || "/images/blog/placeholder.jpg",
      excerpt,
      dateLabel: dateLabelFromIso(
        typeof d.publishedAt === "string" ? d.publishedAt : null,
      ),
      category:
        displayCategory ||
        (relatedCategory && typeof relatedCategory.title === "string"
          ? relatedCategory.title
          : ""),
      author:
        displayAuthor ||
        (populatedAuthor && typeof populatedAuthor.name === "string"
          ? populatedAuthor.name
          : ""),
      content: { kind: "lexical", data: lexicalContent },
    };
  } catch (err) {
    console.warn(`[/blog/${slug}] Payload query failed:`, err);
    return null;
  }
}

async function resolvePost(slug: string): Promise<ResolvedPost | null> {
  const fromDb = await findInPayload(slug);
  if (fromDb) return fromDb;
  const legacy = getPostBySlug(slug);
  return legacy ? fromLib(legacy) : null;
}

export async function generateStaticParams() {
  // Union slug list: Payload (if reachable) ∪ BLOG_POSTS (legacy).
  // Wrapped so a Neon outage at build time doesn't fail the entire build.
  let payloadSlugs: string[] = [];
  try {
    const payload = await getPayload({ config: configPromise });
    const result = await payload.find({
      collection: "posts",
      limit: 1000,
      select: { slug: true },
      where: { _status: { equals: "published" } },
    });
    payloadSlugs = result.docs
      .map((d) => (typeof d.slug === "string" ? d.slug : null))
      .filter((s): s is string => Boolean(s));
  } catch (err) {
    console.warn("[/blog/[slug]] generateStaticParams Payload query failed:", err);
  }

  const set = new Set<string>([
    ...payloadSlugs,
    ...BLOG_POSTS.map((p) => p.slug),
  ]);
  return Array.from(set).map((slug) => ({ slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  const post = await resolvePost(slug);
  if (!post) return { title: "Post Not Found", robots: { index: false, follow: false } };
  return pageMetadata({
    title: post.title,
    description: post.excerpt ?? `${post.title} — read the full post on the Bloom blog.`,
    path: `/blog/${slug}`,
    ogTag: "Blog",
  });
}

export default async function BlogPostPage(
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  const post = await resolvePost(slug);
  if (!post) notFound();

  const related = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <JsonLd
        data={articleJsonLd({
          title: post.title,
          description: post.excerpt,
          path: `/blog/${post.slug}`,
          image: post.hero,
          author: post.author,
          section: post.category,
        })}
      />
      <HelpHeader />
      <main id="main-content" className="flex-1 bg-bloom-cream pb-16 pt-24">
        <article className="mx-auto w-full max-w-[1100px] px-4 sm:px-6">
          {/* Hero: image right, headline left */}
          <header className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center lg:gap-16">
            <div className="flex flex-col gap-5">
              {post.category ? (
                <span className="text-[12px] font-bold uppercase tracking-[0.18em] text-bloom-orange">
                  {post.category}
                </span>
              ) : null}
              <h1 className="text-[32px] font-bold leading-[1.15] tracking-tight text-bloom-navy md:text-[44px] md:leading-[1.1]">
                {post.title}
              </h1>
              {post.excerpt ? (
                <p className="text-[16px] leading-[24px] text-bloom-navy md:text-[18px] md:leading-[28px]">
                  {post.excerpt}
                </p>
              ) : null}
              <div className="flex flex-col gap-1 text-[14px] text-bloom-muted">
                {post.dateLabel ? <span>{post.dateLabel}</span> : null}
                {post.author ? <span>By {post.author}</span> : null}
              </div>
            </div>
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-md ring-1 ring-bloom-navy/10">
              <Image
                src={post.hero}
                alt=""
                fill
                sizes="(max-width: 1024px) 100vw, 540px"
                className="object-cover"
                priority
              />
            </div>
          </header>

          {/* Body */}
          {post.content.kind === "lexical" ? (
            <div className="mx-auto mt-16 max-w-[720px]">
              <RichText
                content={post.content.data}
                enableGutter={false}
                enableProse
                className="prose-headings:text-bloom-navy prose-p:text-bloom-navy prose-li:text-bloom-navy prose-strong:text-bloom-navy prose-a:text-bloom-orange prose-a:underline prose-a:underline-offset-2"
              />
            </div>
          ) : (
            <div className="mx-auto mt-16 max-w-[720px]">
              {post.content.data.map((block, i) => {
                if (block.type === "h3") {
                  return (
                    <h3
                      key={i}
                      className="mt-12 mb-4 text-[24px] font-bold leading-[30px] text-bloom-navy"
                    >
                      {block.text}
                    </h3>
                  );
                }
                if (block.type === "p") {
                  return (
                    <p
                      key={i}
                      className="mt-4 text-[16px] leading-[26px] text-bloom-navy md:text-[17px] md:leading-[28px]"
                    >
                      {block.text}
                    </p>
                  );
                }
                if (block.type === "ul") {
                  return (
                    <ul key={i} className="mt-4 space-y-2">
                      {block.items.map((item, j) => (
                        <li
                          key={j}
                          className="relative pl-6 text-[16px] leading-[26px] text-bloom-navy md:text-[17px] md:leading-[28px]"
                        >
                          <span className="absolute left-0 top-[10px] h-1.5 w-1.5 rounded-full bg-bloom-orange" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  );
                }
                if (block.type === "linkButton") {
                  return (
                    <div key={i} className="mt-10 flex justify-center">
                      <Link
                        href={block.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-md bg-bloom-orange px-7 py-3 text-[13px] font-bold uppercase tracking-[0.12em] text-bloom-cream transition-opacity duration-200 hover:opacity-90 focus-visible:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bloom-orange focus-visible:ring-offset-2 focus-visible:ring-offset-bloom-cream"
                      >
                        {block.text}
                        <ArrowRightIcon className="h-4 w-4" />
                      </Link>
                    </div>
                  );
                }
                return null;
              })}
            </div>
          )}

          {/* Related */}
          <section className="mt-24">
            <h5 className="mb-6 text-[14px] font-bold uppercase tracking-[0.18em] text-bloom-orange">
              Also check
            </h5>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/blog/${r.slug}`}
                  className="group flex flex-col overflow-hidden rounded-md border border-bloom-navy/10 bg-white transition-colors duration-200 hover:border-bloom-navy/30"
                >
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-bloom-cream">
                    <Image
                      src={r.hero}
                      alt=""
                      fill
                      sizes="(max-width: 1024px) 100vw, 360px"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-3 p-6">
                    <h4 className="text-[18px] font-bold leading-[24px] text-bloom-navy">
                      {r.title}
                    </h4>
                    <p className="mt-auto text-[14px] text-bloom-muted">
                      {r.dateLabel}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </article>
      </main>
      <UnifiedFooter />
    </>
  );
}

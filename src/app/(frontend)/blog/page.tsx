import Image from "next/image";
import Link from "next/link";
import configPromise from "@payload-config";
import { getPayload } from "payload";
import { HelpHeader } from "@/components/HelpHeader";
import { UnifiedFooter } from "@/components/UnifiedFooter";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { BLOG_POSTS, type BlogPost } from "@/lib/blog-posts";

export const metadata = {
  title: "Blog",
  description:
    "The latest developments at Bloom. From new partnerships to industry insights, this is your go-to source for all things Bloom.",
  alternates: { canonical: "/blog" },
};

interface IndexCard {
  slug: string;
  title: string;
  hero: string;
  dateLabel: string;
}

function indexCardFromBlogPost(post: BlogPost): IndexCard {
  return {
    slug: post.slug,
    title: post.title,
    hero: post.hero,
    dateLabel: post.dateLabel,
  };
}

/**
 * Pick the best hero image source from a Payload Post document.
 * Priority: uploaded Media (heroImage relationship) → legacy URL string.
 */
function resolveHero(d: Record<string, unknown>): string | null {
  const hi = d.heroImage;
  if (hi && typeof hi === "object" && hi !== null) {
    const url = (hi as Record<string, unknown>).url;
    if (typeof url === "string" && url) return url;
  }
  if (typeof d.heroUrl === "string" && d.heroUrl) return d.heroUrl;
  return null;
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

async function loadIndexCards(): Promise<IndexCard[]> {
  // Try Payload first; fall back to the in-repo BLOG_POSTS list if the
  // DB is unreachable so /blog never goes blank.
  try {
    const payload = await getPayload({ config: configPromise });
    const result = await payload.find({
      collection: "posts",
      limit: 100,
      sort: "-publishedAt",
      where: { _status: { equals: "published" } },
    });

    if (result.docs.length === 0) {
      return BLOG_POSTS.map(indexCardFromBlogPost);
    }

    return result.docs
      .map<IndexCard | null>((doc) => {
        // Cast to a loose record because the new fields (heroImage,
        // heroUrl, excerpt, displayCategory, displayAuthor) won't appear
        // in payload-types.ts until `payload generate:types` runs
        // against the migrated DB.
        const d = doc as unknown as Record<string, unknown>;
        const slug = typeof d.slug === "string" ? d.slug : null;
        const title = typeof d.title === "string" ? d.title : null;
        if (!slug || !title) return null;
        return {
          slug,
          title,
          hero: resolveHero(d) ?? "/images/blog/placeholder.jpg",
          dateLabel: dateLabelFromIso(
            typeof d.publishedAt === "string" ? d.publishedAt : null,
          ),
        };
      })
      .filter((card): card is IndexCard => card !== null);
  } catch (err) {
    console.warn("[/blog] Payload query failed, falling back to lib:", err);
    return BLOG_POSTS.map(indexCardFromBlogPost);
  }
}

function PostCard({ post }: { post: IndexCard }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col overflow-hidden rounded-md border border-bloom-navy/10 bg-white transition-colors duration-200 hover:border-bloom-navy/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bloom-orange focus-visible:ring-offset-2 focus-visible:ring-offset-bloom-cream"
    >
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-bloom-cream">
        <Image
          src={post.hero}
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 420px"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <h2 className="text-[20px] font-bold leading-[26px] text-bloom-navy">
          {post.title}
        </h2>
        <p className="mt-auto text-[14px] text-bloom-muted">{post.dateLabel}</p>
      </div>
    </Link>
  );
}

export default async function BlogIndexPage() {
  const cards = await loadIndexCards();

  return (
    <>
      <HelpHeader />
      <main id="main-content" className="flex-1 bg-bloom-cream pb-16 pt-24">
        <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6">
          <RevealOnScroll
            as="section"
            className="mx-auto mb-16 max-w-3xl text-center"
          >
            <h1 className="text-[40px] font-bold leading-[1.05] tracking-tight text-bloom-navy md:text-[56px] md:leading-[60px]">
              Blog
            </h1>
            <p className="mt-6 text-[18px] leading-[26px] text-bloom-navy">
              The latest developments at Bloom. From new partnerships to
              industry insights, this is your go-to source for all things
              Bloom.
            </p>
          </RevealOnScroll>

          <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cards.map((post) => (
              <RevealOnScroll key={post.slug}>
                <PostCard post={post} />
              </RevealOnScroll>
            ))}
          </section>
        </div>
      </main>
      <UnifiedFooter />
    </>
  );
}

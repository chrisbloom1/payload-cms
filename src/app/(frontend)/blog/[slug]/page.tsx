import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FloatingNav } from "@/components/FloatingNav";
import { UnifiedFooter } from "@/components/UnifiedFooter";
import { ArrowRightIcon } from "@/components/icons";
import { BLOG_POSTS, getPostBySlug } from "@/lib/blog-posts";

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post Not Found - Bloom" };
  return {
    title: `${post.title} - Bloom`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage(
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <FloatingNav />
      <main className="flex-1 bg-bloom-cream pb-24 pt-32">
        <article className="mx-auto w-full max-w-[1100px] px-4 sm:px-6">
          {/* Hero: image right, headline left */}
          <header className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center lg:gap-16">
            <div className="flex flex-col gap-5">
              <span className="text-[12px] font-bold uppercase tracking-[0.18em] text-bloom-orange">
                {post.category}
              </span>
              <h1 className="text-[32px] font-bold leading-[1.15] tracking-tight text-bloom-navy md:text-[44px] md:leading-[1.1]">
                {post.title}
              </h1>
              <p className="text-[16px] leading-[24px] text-bloom-navy md:text-[18px] md:leading-[28px]">
                {post.excerpt}
              </p>
              <div className="flex flex-col gap-1 text-[14px] text-bloom-muted">
                <span>{post.dateLabel}</span>
                <span>By {post.author}</span>
              </div>
            </div>
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl shadow-bloom-card ring-1 ring-bloom-navy/10">
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
          <div className="mx-auto mt-16 max-w-[720px]">
            {post.body.map((block, i) => {
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
                      className="inline-flex items-center gap-2 rounded-full bg-bloom-orange px-7 py-3 text-[13px] font-bold uppercase tracking-[0.12em] text-bloom-cream transition-transform duration-200 hover:scale-[1.02] focus-visible:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bloom-orange focus-visible:ring-offset-2 focus-visible:ring-offset-bloom-cream"
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
                  className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-bloom-card transition-transform duration-300 hover:-translate-y-1"
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

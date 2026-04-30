import Image from "next/image";
import Link from "next/link";
import { FloatingNav } from "@/components/FloatingNav";
import { UnifiedFooter } from "@/components/UnifiedFooter";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { BLOG_POSTS, type BlogPost } from "@/lib/blog-posts";

export const metadata = {
  title: "News - Bloom",
  description:
    "The latest developments at Bloom. From new partnerships to industry insights, this is your go-to source for all things Bloom.",
};

function PostCard({ post }: { post: BlogPost }) {
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
        <h4 className="text-[20px] font-bold leading-[26px] text-bloom-navy">
          {post.title}
        </h4>
        <p className="mt-auto text-[14px] text-bloom-muted">{post.dateLabel}</p>
      </div>
    </Link>
  );
}

export default function BlogIndexPage() {
  return (
    <>
      <FloatingNav />
      <main className="flex-1 bg-bloom-cream pb-16 pt-24">
        <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6">
          <RevealOnScroll
            as="section"
            className="mx-auto mb-16 max-w-3xl text-center"
          >
            <h1 className="text-[40px] font-bold leading-[1.05] tracking-tight text-bloom-navy md:text-[56px] md:leading-[60px]">
              News
            </h1>
            <p className="mt-6 text-[18px] leading-[26px] text-bloom-navy">
              The latest developments at Bloom. From new partnerships to
              industry insights, this is your go-to source for all things
              Bloom.
            </p>
          </RevealOnScroll>

          <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {BLOG_POSTS.map((post) => (
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

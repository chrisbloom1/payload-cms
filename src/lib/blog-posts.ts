export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "linkButton"; text: string; href: string };

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  dateLabel: string;
  category: string;
  author: string;
  hero: string;
  body: BlogBlock[];
}

export const BLOG_POSTS: readonly BlogPost[] = []


export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

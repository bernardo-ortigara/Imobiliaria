import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MorePosts } from "@/components/pages/blog/more-posts";
import { PostArticle } from "@/components/pages/blog/post-article";
import { PostHero } from "@/components/pages/blog/post-hero";
import { getPostBody } from "@/lib/content/post";
import { getPost, posts } from "@/lib/data/posts";

type Props = { params: Promise<{ slug: string }> };

// All slugs are known (generateStaticParams), so blocking on params is fine; this
// clears the partial-prefetching "URL data outside of Suspense" insight.
export const instant = false;

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return { title: `${post.title} | Luxterra`, description: getPostBody(slug)?.lead };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  const body = getPostBody(slug);
  if (!post || !body) notFound();

  return (
    <main>
      <PostHero post={post} />
      <PostArticle body={body} />
      <MorePosts currentSlug={slug} />
    </main>
  );
}

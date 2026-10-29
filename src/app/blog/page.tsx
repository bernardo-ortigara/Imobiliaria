import type { Metadata } from "next";
import { PostCard } from "@/components/cards";
import { AnimatedLabel, Rise } from "@/components/pages/blog/motion";
import { GridLines } from "@/components/ui";
import { blogPage } from "@/lib/content/blog";
import { posts } from "@/lib/data/posts";

export const metadata: Metadata = {
  title: "Blog | Luxterra",
  description: blogPage.text,
};

export default function BlogPage() {
  return (
    <main className="relative bg-white px-wrap">
      <GridLines />
      <div className="relative flex flex-col items-center gap-[110px] pb-[160px] pt-20">
        <div className="flex w-full flex-col items-center gap-4 overflow-clip pt-[120px]">
          <div className="flex w-full flex-col items-center gap-2">
            <AnimatedLabel>{blogPage.label}</AnimatedLabel>
            <Rise delay={0.3} y={150} scale={0.9} className="w-[560px] max-w-full">
              <h1 className="t-58 text-center text-ink">{blogPage.title}</h1>
            </Rise>
          </div>
          <Rise delay={0.5} y={120} scale={0.8} className="w-[450px] max-w-full">
            <p className="t-19 text-center text-black/70">{blogPage.text}</p>
          </Rise>
        </div>
        <div className="grid w-full grid-cols-1 gap-x-7 gap-y-[60px] md:grid-cols-3">
          {posts.map((post) => (
            <Rise key={post.slug} delay={0.8} y={120} scale={0.8}>
              <PostCard post={post} />
            </Rise>
          ))}
        </div>
      </div>
    </main>
  );
}

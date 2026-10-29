import { PostCard } from "@/components/cards";
import { Reveal } from "@/components/motion";
import { GridLines, SectionLabel } from "@/components/ui";
import { blog } from "@/lib/content";
import { posts } from "@/lib/data/posts";

export function Blog() {
  return (
    <section className="relative bg-white px-wrap">
      <GridLines left="bg-line-soft" right="bg-line" />
      <div className="relative flex flex-col items-center gap-[70px] pb-[130px] pt-[110px]">
        <div className="flex w-full flex-col items-center gap-4">
          <div className="flex w-full flex-col items-center gap-3">
            <Reveal className="w-full" delay={0.2}>
              <SectionLabel>{blog.label}</SectionLabel>
            </Reveal>
            <Reveal>
              <h2 className="t-58 text-center text-ink">{blog.title}</h2>
            </Reveal>
          </div>
          <Reveal>
            <p className="t-18 max-w-[400px] text-center text-black/70">{blog.text}</p>
          </Reveal>
        </div>
        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-3">
          {posts.slice(0, 3).map((post) => (
            <Reveal key={post.slug}>
              <PostCard post={post} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

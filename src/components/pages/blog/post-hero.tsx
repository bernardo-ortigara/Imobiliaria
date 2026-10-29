import { HeroCover, Rise } from "@/components/pages/blog/motion";
import { GridLines } from "@/components/ui";
import type { Post } from "@/lib/data/posts";

/** Dark cover hero; it is sticky so the white article scrolls over it. */
export function PostHero({ post }: { post: Post }) {
  return (
    <section className="sticky top-0 z-[1] flex min-h-[95svh] items-end justify-center overflow-hidden bg-ink px-10 pb-[60px] pt-[500px]">
      <GridLines left="bg-white/10" right="bg-white/10" />
      <HeroCover src={post.image} />
      <div className="relative z-[1] flex w-full flex-col gap-6 lg:flex-row lg:items-start lg:gap-0">
        <Rise delay={0.3} y={150} scale={0.9} className="flex flex-[1_0_0px] flex-col gap-[2px]">
          <p className="t-19 text-white">{post.tag}</p>
          <p className="t-19 text-white">{post.date}</p>
        </Rise>
        <Rise delay={0.4} y={150} scale={0.9} className="flex-[2.5_0_0px]">
          <h1 className="t-58 max-w-[95%] text-white">{post.title}</h1>
        </Rise>
      </div>
    </section>
  );
}

import { PostCard } from "@/components/cards";
import { AnimatedLabel } from "@/components/pages/blog/motion";
import { morePosts } from "@/lib/content/blog";
import { posts } from "@/lib/data/posts";

/** "More posts": the first 3 posts of the list, excluding the current one (same rule as the original). */
export function MorePosts({ currentSlug }: { currentSlug: string }) {
  const related = posts.filter((p) => p.slug !== currentSlug).slice(0, 3);
  return (
    <section className="relative z-[2] overflow-hidden bg-white px-10 pb-[130px]">
      <div className="flex flex-col items-center gap-[70px] pt-[90px]">
        <div className="flex w-full flex-col items-center gap-2">
          <AnimatedLabel>{morePosts.label}</AnimatedLabel>
          <h2 className="t-58 w-[800px] max-w-full text-center text-ink">{morePosts.title}</h2>
        </div>
        <div className="grid w-full grid-cols-1 gap-x-9 gap-y-[50px] md:grid-cols-3">
          {related.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}

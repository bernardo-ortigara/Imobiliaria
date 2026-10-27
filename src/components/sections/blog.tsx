import Image from "next/image";
import { Reveal } from "@/components/motion";
import { GridLines, SectionLabel } from "@/components/ui";
import { blog } from "@/lib/content";

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
          {blog.posts.map((post) => (
            <Reveal key={post.title}>
              <a href="#" className="group/post flex flex-col gap-5">
                <div className="relative aspect-[436/363] overflow-hidden rounded-[2px]">
                  <Image
                    src={post.image}
                    alt=""
                    fill
                    sizes="(min-width: 768px) 436px, 100vw"
                    className="zoom-img object-cover object-right group-hover/post:scale-[1.05]"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-[10px]">
                    <span className="t-15 rounded-[1px] bg-mist px-3 py-[7px] text-ink">{post.tag}</span>
                    <span className="size-[5px] rounded-full bg-purple" />
                    <span className="t-15 text-black/70">{post.date}</span>
                  </div>
                  <h3 className="t-26 text-ink">{post.title}</h3>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

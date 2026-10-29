import Image from "next/image";
import { SpringUp } from "@/components/pages/blog/motion";
import { RichText } from "@/components/pages/blog/rich-text";
import type { PostBody } from "@/lib/content/post";

const leadStyle = { fontVariationSettings: '"opsz" 14, "wght" 420' };

export function PostArticle({ body }: { body: PostBody }) {
  return (
    <section className="relative z-[2] flex flex-col items-center bg-white px-10 pt-[120px]">
      <SpringUp className="w-full max-w-[740px] pb-20">
        <article className="flex flex-col gap-[60px]">
          <div className="flex flex-col gap-10">
            <p className="text-[28px] leading-[34.16px] tracking-[-1.12px] text-ink" style={leadStyle}>
              {body.lead}
            </p>
            <p className="t-19 text-black/62">{body.intro}</p>
          </div>
          <div className="relative aspect-[740/438] w-full overflow-hidden rounded-[6px]">
            <Image src={body.image} alt="" fill sizes="(min-width: 820px) 740px, 100vw" className="object-cover" />
          </div>
          <RichText blocks={body.blocks} />
        </article>
      </SpringUp>
    </section>
  );
}

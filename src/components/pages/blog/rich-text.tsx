import { Fragment, type CSSProperties } from "react";
import type { PostBlock } from "@/lib/content/post";

// Typography measured on the original post "Content" rich text (desktop).
const h2Style: CSSProperties = { fontVariationSettings: '"opsz" 14, "wght" 425' };
const h4Style: CSSProperties = {
  fontVariationSettings: '"opsz" 14, "wght" 470',
  fontFeatureSettings: '"blwf", "cv03", "cv04", "cv09", "cv11"',
};

// Each block's top margin is its own "paragraph spacing" (none on the first block).
const spacing: Record<PostBlock["type"], string> = {
  h2: "mt-10",
  h3: "mt-6",
  h4: "mt-10",
  p: "mt-5",
  ul: "mt-5",
  ol: "mt-5",
};

const body = "t-19 text-black/62";

function Lines({ text }: { text: string }) {
  const parts = text.split("\n");
  return parts.map((part, i) => (
    <Fragment key={i}>
      {part}
      {i < parts.length - 1 && <br />}
    </Fragment>
  ));
}

export function RichText({ blocks }: { blocks: PostBlock[] }) {
  return (
    <div className="flex w-full flex-col">
      {blocks.map((block, i) => {
        const mt = i > 0 ? spacing[block.type] : "";
        switch (block.type) {
          case "h2":
            return (
              <h2 key={i} className={`${mt} text-[34px] leading-[35.7px] tracking-[-2.176px] text-ink`} style={h2Style}>
                {block.text}
              </h2>
            );
          case "h3":
            return (
              <h3 key={i} className={`${mt} t-26 text-ink`}>
                {block.text}
              </h3>
            );
          case "h4":
            return (
              <h4 key={i} className={`${mt} text-[22px] leading-[30.8px] tracking-[-0.88px] text-ink`} style={h4Style}>
                {block.text}
              </h4>
            );
          case "p":
            return (
              <p key={i} className={`${mt} ${body}`}>
                <Lines text={block.text} />
              </p>
            );
          case "ul":
          case "ol": {
            const List = block.type;
            return (
              <List key={i} className={mt}>
                {block.items.map((item, j) => (
                  <li key={j} className={`relative pl-[2ch] ${body}`}>
                    <span aria-hidden className="absolute left-0 tabular-nums">
                      {block.type === "ol" ? `${j + 1}.` : "•"}
                    </span>
                    <p>{item}</p>
                  </li>
                ))}
              </List>
            );
          }
        }
      })}
    </div>
  );
}

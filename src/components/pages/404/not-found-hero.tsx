import { ArrowButton, GridLines } from "@/components/ui";
import { notFoundPage } from "@/lib/content/404";
import { routes } from "@/lib/routes";

/** Static on the original: no appear/scroll animations, only the button hover. */
export function NotFoundHero() {
  const t = notFoundPage;
  return (
    <section className="relative flex flex-col items-center justify-center gap-20 overflow-hidden bg-white px-10 pb-[280px] pt-[300px]">
      <GridLines />
      <div className="relative flex w-full flex-col items-center gap-[50px] text-center">
        <h1 className="t-82 text-ink">
          {t.title}
        </h1>
        <div className="flex flex-col items-center gap-[14px]">
          <p className="t-34 text-ink">{t.subtitle}</p>
          <p className="t-19 text-black/70">{t.text}</p>
        </div>
      </div>
      <div className="relative">
        <ArrowButton href={routes.home} tone="primary">
          {t.cta}
        </ArrowButton>
      </div>
    </section>
  );
}

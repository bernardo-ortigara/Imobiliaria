import type { Metadata } from "next";
import { NotFoundHero } from "@/components/pages/404/not-found-hero";
import { notFoundPage } from "@/lib/content/404";

export const metadata: Metadata = {
  title: notFoundPage.metaTitle,
};

export default function NotFound() {
  return (
    <main>
      <NotFoundHero />
    </main>
  );
}

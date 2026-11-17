import type { Metadata } from "next";
import { ListingsPage } from "@/components/pages/imoveis/listings-page";
import { Cta } from "@/components/sections/cta";
import { metadata as imoveisMetadata } from "@/lib/content/imoveis";
import { routes } from "@/lib/routes";
import { openGraphBase } from "@/lib/site";

export const metadata: Metadata = {
  ...imoveisMetadata,
  alternates: { canonical: routes.listings },
  openGraph: { ...openGraphBase, url: routes.listings },
};

export default function ImoveisPage() {
  return (
    <main>
      <ListingsPage />
      <Cta />
    </main>
  );
}

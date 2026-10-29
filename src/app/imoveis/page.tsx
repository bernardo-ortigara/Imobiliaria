import type { Metadata } from "next";
import { ListingsPage } from "@/components/pages/imoveis/listings-page";
import { Cta } from "@/components/sections/cta";
import { metadata as imoveisMetadata } from "@/lib/content/imoveis";

export const metadata: Metadata = imoveisMetadata;

export default function ImoveisPage() {
  return (
    <main>
      <ListingsPage />
      <Cta />
    </main>
  );
}

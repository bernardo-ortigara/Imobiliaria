import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Footer } from "@/components/sections/footer";
import { Header } from "@/components/sections/header";
import { SmoothScroll } from "@/components/smooth-scroll";
import { contact, indexable, openGraphBase, siteDescription, siteName, siteUrl, slogan } from "@/lib/site";
import "lenis/dist/lenis.css";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  axes: ["opsz"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: `${siteName} | ${slogan}`, template: `%s | ${siteName}` },
  description: siteDescription,
  applicationName: siteName,
  alternates: { canonical: "/" },
  openGraph: { ...openGraphBase, url: "/" },
  twitter: { card: "summary_large_image" },
  robots: indexable
    ? { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } }
    : { index: false, follow: false },
  formatDetection: { telephone: false, email: false, address: false },
  ...(process.env.GOOGLE_SITE_VERIFICATION && {
    verification: { google: process.env.GOOGLE_SITE_VERIFICATION },
  }),
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  "@id": `${siteUrl}/#organization`,
  name: siteName,
  slogan,
  description: siteDescription,
  url: siteUrl,
  logo: `${siteUrl}/apple-icon.png`,
  image: `${siteUrl}/opengraph-image.jpg`,
  telephone: "+55 54 99692-1770",
  email: contact.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: contact.street,
    addressLocality: contact.city,
    addressRegion: contact.region,
    addressCountry: contact.country,
  },
  areaServed: { "@type": "City", name: contact.city },
  founder: { "@type": "Person", name: "Horácio Santini" },
  sameAs: [contact.instagram],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${inter.variable} antialiased`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
        <SmoothScroll>
          <Header />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}

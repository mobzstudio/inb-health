import type { Metadata } from "next";
import { Hero } from "@/components/club/Hero";
import { Thesis } from "@/components/club/Thesis";
import { Cycles } from "@/components/club/Cycles";
import { Journey } from "@/components/club/Journey";
import { Faq } from "@/components/club/Faq";
import { Cta } from "@/components/club/Cta";
import { jsonLd, seo } from "@/content/club";

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
};

export default function ClubPage() {
  return (
    <main>
      <Hero />
      <Thesis />
      <Cycles />
      <Journey />
      <Faq />
      <Cta />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
    </main>
  );
}

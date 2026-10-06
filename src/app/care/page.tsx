import type { Metadata } from "next";
import { Hero } from "@/components/care/Hero";
import { Thesis } from "@/components/care/Thesis";
import { Fronts } from "@/components/care/Fronts";
import { Journey } from "@/components/care/Journey";
import { Manager } from "@/components/care/Manager";
import { Roles } from "@/components/care/Roles";
import { Faq } from "@/components/care/Faq";
import { Cta } from "@/components/care/Cta";
import { jsonLd, seo } from "@/content/care";

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
};

export default function CarePage() {
  return (
    <main>
      <Hero />
      <Thesis />
      <Fronts />
      <Journey />
      <Manager />
      <Roles />
      <Faq />
      <Cta />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
    </main>
  );
}

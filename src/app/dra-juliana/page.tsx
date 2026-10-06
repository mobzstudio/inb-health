import type { Metadata } from "next";
import { Hero } from "@/components/dra-juliana/Hero";
import { Principles } from "@/components/dra-juliana/Principles";
import { Quote } from "@/components/dra-juliana/Quote";
import { Markers } from "@/components/dra-juliana/Markers";
import { Letter } from "@/components/dra-juliana/Letter";
import { Credentials } from "@/components/dra-juliana/Credentials";
import { Press } from "@/components/dra-juliana/Press";
import { Cta } from "@/components/dra-juliana/Cta";

export const metadata: Metadata = {
  title: "Dra. Juliana Cardoso Nogueira — INB Health",
  description:
    "Fundadora e diretora médica do INB Health. A medicina que ela precisou — agora ao seu alcance.",
};

export default function DraJulianaPage() {
  return (
    <main>
      <Hero />
      <Principles />
      <Quote />
      <Markers />
      <Letter />
      <Credentials />
      <Press />
      <Cta />
    </main>
  );
}

import { Hero } from "@/components/home/Hero";
import { HealthData } from "@/components/home/HealthData";
import { Commitment } from "@/components/home/Commitment";
import { Founder } from "@/components/home/Founder";
import { Method } from "@/components/home/Method";
import { Biomarkers } from "@/components/home/Biomarkers";
import { Pillars } from "@/components/home/Pillars";
import { Services } from "@/components/home/Services";
import { Medicine } from "@/components/home/Medicine";
import { Trajectories } from "@/components/home/Trajectories";
import { Indicators } from "@/components/home/Indicators";
import { Voices } from "@/components/home/Voices";
import { FounderQuote } from "@/components/home/FounderQuote";
import { Faq } from "@/components/home/Faq";
import { FinalCta } from "@/components/home/FinalCta";

export default function Home() {
  return (
    <main>
      <Hero />
      <HealthData />
      <Commitment />
      <Founder />
      <Method />
      <Biomarkers />
      <div id="maia">
        <Pillars />
      </div>
      <div id="suplementos">
        <Services />
      </div>
      <div id="ciencia">
        <Medicine />
      </div>
      <Trajectories />
      <Indicators />
      <Voices />
      <FounderQuote />
      <Faq />
      <div id="planos">
        <FinalCta />
      </div>
    </main>
  );
}

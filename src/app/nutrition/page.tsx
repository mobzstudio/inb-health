import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/layout/PlaceholderPage";

export const metadata: Metadata = {
  title: "INB Nutrition — INB Health",
  description: "Nutrição clínica integrada ao método INB Health. Em breve.",
};

export default function NutritionPage() {
  return (
    <PlaceholderPage
      eyebrow="Em breve · Lançamento"
      title="INB"
      accent="Nutrition"
      copy="Nutrição clínica alinhada ao painel ampliado, ao reteste e ao plano individualizado. Esta página entra na próxima onda do lançamento institucional."
    />
  );
}

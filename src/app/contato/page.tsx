import type { Metadata } from "next";
import { Contact } from "@/components/contato/Contact";

export const metadata: Metadata = {
  title: "Contato — INB Health",
  description: "Fale com o INB Health para associação, imprensa ou dúvidas sobre o método da Dra. Juliana.",
};

export default function ContatoPage() {
  return <Contact />;
}

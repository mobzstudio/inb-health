import type { Metadata } from "next";
import { Roboto_Serif } from "next/font/google";
import { MotionProvider } from "@/components/motion/motion-provider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const robotoSerif = Roboto_Serif({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  style: ["normal", "italic"],
  variable: "--font-roboto-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "INB Health — Inteligência médica para gestão da saúde ao longo da vida",
  description:
    "O INB Health acompanha biomarcadores, consulta clínica e plano individualizado — antes que o sintoma chegue.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={robotoSerif.variable}>
      <body>
        <noscript>
          <style>{`[data-reveal]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <MotionProvider>
          <Header />
          {children}
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}

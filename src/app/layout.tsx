import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Kayiratech — Architecture IT & Transformation Digitale",
  description:
    "Experts en architecture IT et transformation digitale. Développement logiciel, consulting IT, coaching agile et intelligence artificielle.",
  keywords: ["architecture IT", "transformation digitale", "développement logiciel", "consulting IT", "IA", "Kayiratech"],
  openGraph: {
    title: "Kayiratech — Architecture IT & Transformation Digitale",
    description: "Experts en architecture IT et transformation digitale de haute précision.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${manrope.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

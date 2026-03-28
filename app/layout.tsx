import type { Metadata } from "next";
import { Marcellus, Jost } from "next/font/google";
import "./globals.css";

const marcellus = Marcellus({
  weight: "400",
  variable: "--font-marcellus",
  subsets: ["latin"],
  display: "swap",
});

const jost = Jost({
  weight: ["300", "400", "500", "600"],
  variable: "--font-jost",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Groeipracht — Natuurcoaching regio Kempen",
  description:
    "Hannah Janssens — Groeicoach in Poederlee, Kempen. Individuele coaching, groepssessies en teambegeleidingen in de natuur. Groei met zachte kracht.",
  keywords: [
    "groeicoach",
    "natuurcoaching",
    "Kempen",
    "Poederlee",
    "Hannah Janssens",
    "coaching",
    "burnout",
    "wandelcoaching",
    "bostherapie",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={`${marcellus.variable} ${jost.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}

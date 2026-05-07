import type { Metadata } from "next";
import { Big_Shoulders_Stencil, Caveat, DM_Sans, Special_Elite, Stardos_Stencil } from "next/font/google";
import "./globals.css";

const display = Big_Shoulders_Stencil({
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  variable: "--font-mr-display",
});
const stencil = Stardos_Stencil({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mr-stencil",
});
const elite = Special_Elite({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-mr-elite",
});
const body = DM_Sans({
  subsets: ["latin"],
  variable: "--font-mr-body",
});
const script = Caveat({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-mr-script",
});

export const metadata: Metadata = {
  title: "II Desafío Medina Roja BTT · Almedina · 4 julio 2026",
  description:
    "II edición del Desafío Medina Roja BTT en Almedina (Ciudad Real). Dos modalidades, 30 km y 50 km, por los cerros del Campo de Montiel. 4 de julio de 2026. Vuelve el desafío.",
  openGraph: {
    title: "II Desafío Medina Roja BTT",
    description:
      "Almedina · 4 julio 2026. CORTA 30 km · LARGA 50 km. Vuelve el desafío.",
    type: "website",
    locale: "es_ES",
    images: [{ url: "/cartel.png", width: 1080, height: 1350, alt: "Cartel II Desafío Medina Roja BTT" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "II Desafío Medina Roja BTT",
    description: "Almedina · 4 julio 2026 · BTT",
    images: ["/cartel.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${display.variable} ${stencil.variable} ${elite.variable} ${body.variable} ${script.variable}`}>
      <body>{children}</body>
    </html>
  );
}

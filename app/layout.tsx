import type { Metadata } from "next";
import "./globals.css";

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
    images: [{ url: "/cartel.jpeg", width: 1080, height: 1350, alt: "Cartel II Desafío Medina Roja BTT" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "II Desafío Medina Roja BTT",
    description: "Almedina · 4 julio 2026 · BTT",
    images: ["/cartel.jpeg"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}

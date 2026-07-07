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

const BASE_URL = "https://medina-roja-btt.vercel.app";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SportsEvent",
  name: "II Desafío Medina Roja BTT",
  description: "II edición del Desafío Medina Roja BTT en Almedina (Ciudad Real). Dos modalidades, 30 km y 50 km, por los cerros del Campo de Montiel. 4 de julio de 2026. Vuelve el desafío.",
  startDate: "2026-07-04T08:30:00+02:00",
  endDate: "2026-07-04T14:00:00+02:00",
  location: {
    "@type": "Place",
    name: "Parque Miguel Hernández, Almedina",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Almedina",
      addressRegion: "Ciudad Real",
      addressCountry: "ES",
    },
  },
  organizer: {
    "@type": "Organization",
    name: "Medina Roja Bike Team",
    url: "https://www.instagram.com/desafiomedinarojabtt/",
  },
  performer: {
    "@type": "Organization",
    name: "Medina Roja Bike Team",
    url: "https://www.instagram.com/desafiomedinarojabtt/",
  },
  url: BASE_URL,
  eventStatus: "https://schema.org/EventCompleted",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  image: `${BASE_URL}/cartel.png`,
  offers: {
    "@type": "Offer",
    price: "25",
    priceCurrency: "EUR",
    availability: "https://schema.org/SoldOut",
    validFrom: "2026-05-07",
    url: "https://deporchip.com/inscripciones/ii-desafio-medina-roja-mtb-almedina/",
    validThrough: "2026-07-01",
  },
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: "/" },
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

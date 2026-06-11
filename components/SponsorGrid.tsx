"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { race } from "@/lib/race";

type Sponsor = (typeof race.sponsors)[number];

export default function SponsorGrid() {
  const [zoomed, setZoomed] = useState<Sponsor | null>(null);

  useEffect(() => {
    if (!zoomed) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setZoomed(null);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [zoomed]);

  return (
    <>
      <ul className="sponsor-grid">
        {race.sponsors.map((sponsor) => {
          const logoOnly = Boolean(sponsor.logo && sponsor.hideName);
          const inner = (
            <>
              {sponsor.logo && (
                <Image src={sponsor.logo} alt={sponsor.name} width={240} height={120} className="sponsor-logo" />
              )}
              {!logoOnly && <span className="sponsor-name">{sponsor.name}</span>}
            </>
          );
          const className = `sponsor-tile${logoOnly ? " sponsor-tile--logo-only" : ""}`;

          if (sponsor.url) {
            return (
              <li key={sponsor.name}>
                <a href={sponsor.url} target="_blank" rel="noreferrer" className={`${className} sponsor-tile-link`}>
                  {inner}
                </a>
              </li>
            );
          }

          if (sponsor.logo) {
            return (
              <li key={sponsor.name}>
                <button
                  type="button"
                  className={`${className} sponsor-tile-zoom`}
                  onClick={() => setZoomed(sponsor)}
                  aria-label={`Ampliar logo de ${sponsor.name}`}
                >
                  {inner}
                </button>
              </li>
            );
          }

          return (
            <li key={sponsor.name} className={className}>
              {inner}
            </li>
          );
        })}
      </ul>

      {zoomed?.logo && (
        <div className="sponsor-lightbox" role="dialog" aria-modal="true" aria-label={zoomed.name} onClick={() => setZoomed(null)}>
          <button type="button" className="sponsor-lightbox-close" aria-label="Cerrar" onClick={() => setZoomed(null)}>
            <X size={22} strokeWidth={2.2} aria-hidden="true" />
          </button>
          <figure className="sponsor-lightbox-figure" onClick={(e) => e.stopPropagation()}>
            <Image src={zoomed.logo} alt={zoomed.name} width={720} height={540} className="sponsor-lightbox-img" />
            <figcaption className="sponsor-lightbox-caption">{zoomed.name}</figcaption>
          </figure>
        </div>
      )}
    </>
  );
}

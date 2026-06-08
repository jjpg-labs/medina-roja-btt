import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { race } from "@/lib/race";

export default function Patrocinadores() {
  return (
    <section id="patrocinadores" className="patrocinadores">
      <div className="wrap">
        <p className="eyebrow">Apoyan la prueba</p>
        <h2 className="section-title">Patrocinadores y colaboradores.</h2>

        <ul className="sponsor-grid">
          {race.sponsors.map((sponsor) => {
            const tile = (
              <>
                {sponsor.logo && (
                  <Image src={sponsor.logo} alt={sponsor.name} width={160} height={44} className="sponsor-logo" />
                )}
                <span className="sponsor-name">{sponsor.name}</span>
              </>
            );
            return (
              <li key={sponsor.name} className="sponsor-tile">
                {sponsor.url ? (
                  <a href={sponsor.url} target="_blank" rel="noreferrer" className="sponsor-tile-link">
                    {tile}
                  </a>
                ) : tile}
              </li>
            );
          })}
        </ul>

        <p className="sponsor-join">
          ¿Quieres unirte a la lista? Escríbenos por{" "}
          <a href={race.contact.instagram} target="_blank" rel="noreferrer">
            Instagram <ArrowRight size={14} strokeWidth={2} aria-hidden="true" />
          </a>
        </p>
      </div>
    </section>
  );
}

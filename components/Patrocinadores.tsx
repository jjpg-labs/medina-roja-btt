import { ArrowRight } from "lucide-react";
import { race } from "@/lib/race";
import SponsorGrid from "./SponsorGrid";

export default function Patrocinadores() {
  return (
    <section id="patrocinadores" className="patrocinadores">
      <div className="wrap">
        <p className="eyebrow">Apoyan la prueba</p>
        <h2 className="section-title">Patrocinadores y colaboradores.</h2>

        <SponsorGrid />

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

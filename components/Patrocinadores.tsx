import { ArrowRight, Handshake } from "lucide-react";
import { race } from "@/lib/race";

export default function Patrocinadores() {
  return (
    <section id="patrocinadores" className="patrocinadores">
      <div className="wrap">
        <p className="eyebrow">Apoyan la prueba</p>
        <h2 className="section-title">Patrocinadores y colaboradores.</h2>

        <div className="sponsor-cta">
          <span className="sponsor-cta-ico" aria-hidden="true">
            <Handshake size={32} strokeWidth={1.75} />
          </span>
          <div className="sponsor-cta-body">
            <h3 className="sponsor-cta-title">Buscando aliados para la II edición.</h3>
            <p className="sponsor-cta-lead">
              Estamos cerrando la lista de patrocinadores y colaboradores. Si
              quieres apoyar la prueba o aportar producto, escríbenos por
              Instagram — anunciaremos a todos en las próximas semanas.
            </p>
            <a className="btn btn-primary" href={race.contact.instagram} target="_blank" rel="noreferrer">
              Patrocinar la prueba <ArrowRight size={18} strokeWidth={1.75} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

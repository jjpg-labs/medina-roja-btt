import { Mail } from "lucide-react";
import { race } from "@/lib/race";

function InstagramGlyph({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r=".8" fill="currentColor" />
    </svg>
  );
}

export default function Contacto() {
  return (
    <section id="contacto" className="contacto">
      <div className="wrap contacto-grid">
        <div>
          <p className="eyebrow">Contacto</p>
          <h2 className="section-title">Habla con el club.</h2>
          <p className="section-lead">
            Estamos en Almedina. Para dudas de la prueba, mejor por Instagram —
            respondemos rápido.
          </p>
        </div>
        <div className="contact-list">
          <a className="contact-item" href={race.contact.instagram} target="_blank" rel="noreferrer">
            <span className="ci-ico ci-ig"><InstagramGlyph /></span>
            <div>
              <div className="ci-lbl">Instagram</div>
              <div className="ci-val">{race.contact.instagramHandle}</div>
            </div>
          </a>
          <div className="contact-item" aria-disabled="true">
            <span className="ci-ico"><Mail size={22} strokeWidth={1.75} /></span>
            <div>
              <div className="ci-lbl">Email</div>
              <div className="ci-val">Próximamente</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

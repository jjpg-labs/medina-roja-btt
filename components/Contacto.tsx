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

function FacebookGlyph({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.5-3.89 3.78-3.89 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.45 2.89h-2.33v6.99A10 10 0 0 0 22 12Z" />
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
          <a className="contact-item" href={race.contact.facebook} target="_blank" rel="noreferrer">
            <span className="ci-ico ci-fb"><FacebookGlyph /></span>
            <div>
              <div className="ci-lbl">Facebook</div>
              <div className="ci-val">{race.contact.facebookHandle}</div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

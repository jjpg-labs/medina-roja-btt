import { ArrowRight, Clock, Euro, MapPin, Mountain } from "lucide-react";
import { race } from "@/lib/race";

export default function Modalidades() {
  const { corta, larga } = race.modalities;
  return (
    <section id="info" className="info-clave">
      <div className="wrap">
        <p className="eyebrow">Modalidades</p>
        <h2 className="section-title">Dos recorridos, una misma tierra.</h2>
        <div className="distance-grid">
          <article className="dcard">
            <div className="dcard-tag">CORTA</div>
            <Mountain size={36} strokeWidth={1.75} />
            <div className="dcard-num">{corta.km} <span>km</span></div>
            <div className="dcard-desn">{corta.ascent} m+ de desnivel</div>
            <p className="dcard-desc">{corta.desc}</p>
          </article>
          <article className="dcard dcard-larga">
            <div className="dcard-tag dcard-tag-larga">LARGA</div>
            <Mountain size={36} strokeWidth={1.75} />
            <div className="dcard-num">{larga.km} <span>km</span></div>
            <div className="dcard-desn">{larga.ascent} m+ de desnivel</div>
            <p className="dcard-desc">{larga.desc}</p>
          </article>
        </div>

        <div className="quickrow">
          <div className="qitem">
            <Clock strokeWidth={1.75} />
            <div>
              <div className="qlbl">Salida</div>
              <div className="qval">{race.startTime}</div>
            </div>
          </div>
          <div className="qitem qitem-price">
            <Euro strokeWidth={1.75} />
            <div>
              <div className="qlbl">Inscripción — {race.price}</div>
              {race.priceTiers.map((tier) => (
                <div key={tier.label} className="qval">
                  <strong>{tier.label}</strong> · {tier.deadline}
                </div>
              ))}
            </div>
          </div>
          <div className="qitem">
            <MapPin strokeWidth={1.75} />
            <div>
              <div className="qlbl">Punto de salida</div>
              <div className="qval">{race.startPoint}</div>
            </div>
          </div>
          {race.registrationOpen ? (
            <a className="btn btn-outline qitem-btn" href={race.registrationUrl} target="_blank" rel="noreferrer">
              <ArrowRight size={18} strokeWidth={1.75} /> Inscribirme
            </a>
          ) : (
            <button className="btn btn-outline qitem-btn" type="button" aria-disabled="true" disabled>
              Inscripciones próximamente
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

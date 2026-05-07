import { race } from "@/lib/race";

export default function Cronograma() {
  return (
    <section id="cronograma" className="cronograma topo-bg">
      <div className="wrap">
        <p className="eyebrow">El día</p>
        <h2 className="section-title">Cronograma del 4 de julio.</h2>
        <p className="section-lead">Horarios provisionales — pueden ajustarse en función del calor.</p>

        <div className="cronograma-callout">
          <strong>Recogida anticipada de dorsales</strong> — viernes 3 de julio, de
          19:30 a 21:00 en el Parque Miguel Hernández. Si no puedes el viernes, el
          sábado abrimos a las 7:00.
        </div>

        <ol className="timeline">
          {race.schedule.map((it, i) => (
            <li key={i} className="tl-item">
              <div className="tl-time">{it.time}</div>
              <div className={"tl-body tl-" + it.color}>
                <h3 className="tl-title">{it.title}</h3>
                <p className="tl-desc">{it.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

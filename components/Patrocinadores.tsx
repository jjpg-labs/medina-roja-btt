import { race } from "@/lib/race";

export default function Patrocinadores() {
  return (
    <section id="patrocinadores" className="patrocinadores">
      <div className="wrap">
        <p className="eyebrow">Apoyan la prueba</p>
        <h2 className="section-title">Patrocinadores y colaboradores.</h2>
        <p className="section-lead">
          Anunciados próximamente — esta es la lista provisional. La definitiva
          se publicará en las próximas semanas.
        </p>
        <div className="sponsor-grid">
          {race.sponsors.map((s, i) => (
            <div key={i} className="sponsor">
              <div className="sponsor-name">{s.name}</div>
              <div className="sponsor-kind">{s.kind}</div>
            </div>
          ))}
        </div>
        <p className="sponsor-note">
          ¿Quieres patrocinar la II Edición? Escríbenos a{" "}
          <a href={`mailto:${race.contact.email}`}>{race.contact.email}</a>.
        </p>
      </div>
    </section>
  );
}

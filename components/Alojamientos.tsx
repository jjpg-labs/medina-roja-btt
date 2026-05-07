import { ExternalLink, Phone } from "lucide-react";

const PHONE_DISPLAY = "636 33 65 64";
const PHONE_TEL = "+34636336564";

const alojamientos = [
  {
    name: "Hostal La Taifa de Almedina",
    address: "C. Mayor, 4 · 13328 Almedina",
    maps: "https://www.google.com/maps/search/?api=1&query=Hostal+La+Taifa+de+Almedina+13328+Ciudad+Real",
  },
  {
    name: "Casa Rural El Reino de Almedina",
    address: "Grupo Escolar, 1D · 13328 Almedina",
    maps: "https://www.google.com/maps/search/?api=1&query=Casa+Rural+El+Reino+de+Almedina+13328+Ciudad+Real",
  },
];

export default function Alojamientos() {
  return (
    <section id="alojamientos" className="alojamientos">
      <div className="wrap">
        <p className="eyebrow">Llegas desde fuera</p>
        <h2 className="section-title">Dormir en Almedina.</h2>
        <p className="section-lead">
          Dos alojamientos en el pueblo con <strong>descuento para corredores
          y acompañantes</strong>. Reservas al teléfono indicado.
        </p>

        <div className="alojamiento-grid">
          {alojamientos.map((a) => (
            <article key={a.name} className="alojamiento-card">
              <h3 className="alojamiento-name">{a.name}</h3>
              <p className="alojamiento-address">{a.address}</p>
              <div className="alojamiento-actions">
                <a className="btn btn-outline btn-sm" href={a.maps} target="_blank" rel="noreferrer">
                  <ExternalLink size={16} strokeWidth={1.75} /> Ver en Google Maps
                </a>
                <a className="btn btn-primary btn-sm" href={`tel:${PHONE_TEL}`}>
                  <Phone size={16} strokeWidth={1.75} /> {PHONE_DISPLAY}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

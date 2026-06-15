import { ChevronDown } from "lucide-react";
import { race } from "@/lib/race";

const MAPS_URL = "https://maps.app.goo.gl/ktsYY93rAcopFQ5v8";

const faqs = [
  {
    q: "¿Cuándo y dónde recojo el dorsal?",
    a: (
      <>
        <p>Hay dos ventanas en el Parque Miguel Hernández de Almedina:</p>
        <ul>
          <li><strong>Viernes 3 de julio</strong> — de 19:30 a 21:00.</li>
          <li><strong>Sábado 4 de julio</strong> — de 7:00 a 8:15.</li>
        </ul>
        <p>Trae el DNI en vigor.</p>
      </>
    ),
  },
  {
    q: "¿Qué incluye la inscripción?",
    a: (
      <ul>
        <li>Dorsal y participación en la prueba.</li>
        <li>Bolsa del corredor y maillot oficial (Tramo 1).</li>
        <li>Avituallamiento líquido y sólido en ruta (≈ km 25).</li>
        <li>Comida y bebida al cruzar la meta.</li>
        <li>Entrada a la piscina pública.</li>
        <li>Seguro de accidentes y responsabilidad civil.</li>
        <li>Servicio de fotografía y grabación con dron.</li>
        <li>Asistencia durante la prueba ante accidente o avería.</li>
      </ul>
    ),
  },
  {
    q: "¿Qué material es obligatorio?",
    a: (
      <ul>
        <li>Casco durante toda la prueba.</li>
        <li>Sistema de hidratación de mínimo 1 L.</li>
        <li>Comida, geles o barritas para 3 h de autosuficiencia.</li>
        <li>Teléfono móvil con el número facilitado a la organización.</li>
        <li>Dispositivo GPS con el track cargado y batería suficiente.</li>
      </ul>
    ),
  },
  {
    q: "¿Cuánto cuesta y hasta cuándo puedo inscribirme?",
    a: (
      <>
        <p>Las inscripciones se gestionan en{" "}
          <a href={race.registrationUrl} target="_blank" rel="noreferrer">Deporchip</a>
          {" "}en dos tramos:
        </p>
        <ul>
          {race.priceTiers.map((tier) => (
            <li key={tier.label}>
              <strong>{tier.label}</strong> ({tier.deadline}) — {tier.price}. {tier.note}.
            </li>
          ))}
        </ul>
        <p>A partir del <strong>25 de junio</strong> la participación queda sujeta a disponibilidad de dorsales.</p>
      </>
    ),
  },
  {
    q: "¿Pueden participar menores de edad?",
    a: (
      <>
        <p>
          Sí, los menores pueden participar siempre que su padre, madre o tutor
          legal firme y entregue la autorización junto con el DNI del menor en la
          recogida de dorsales.
        </p>
        <p>
          <a href={race.autorizacionMenoresUrl} target="_blank" rel="noreferrer">
            Descargar autorización para menores (PDF) →
          </a>
        </p>
      </>
    ),
  },
  {
    q: "¿Cómo llego al Parque Miguel Hernández?",
    a: (
      <>
        <p>Carretera de Santa Cruz de los Cáñamos, 2J — 13328 Almedina (Ciudad Real).</p>
        <p>
          <a href={MAPS_URL} target="_blank" rel="noreferrer">Abrir en Google Maps →</a>
        </p>
      </>
    ),
  },
  {
    q: "¿Cómo os puedo seguir?",
    a: (
      <ul>
        <li>
          Instagram —{" "}
          <a href={race.contact.instagram} target="_blank" rel="noreferrer">
            {race.contact.instagramHandle}
          </a>.
        </li>
        <li>
          Facebook —{" "}
          <a href={race.contact.facebook} target="_blank" rel="noreferrer">
            {race.contact.facebookHandle}
          </a>.
        </li>
      </ul>
    ),
  },
];

export default function Faqs() {
  return (
    <section id="faqs" className="faqs">
      <div className="wrap">
        <p className="eyebrow">Información práctica</p>
        <h2 className="section-title">Preguntas frecuentes.</h2>
        <p className="section-lead">
          Lo que más nos preguntan los inscritos. Si te queda alguna duda, mejor
          por Instagram — respondemos rápido.
        </p>
        <ul className="faq-list">
          {faqs.map((f, i) => (
            <li key={i} className="faq-item">
              <details>
                <summary>
                  <span>{f.q}</span>
                  <ChevronDown className="faq-chev" size={20} strokeWidth={1.75} />
                </summary>
                <div className="faq-answer">{f.a}</div>
              </details>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

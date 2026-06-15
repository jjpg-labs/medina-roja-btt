import Image from "next/image";
import { Download, FileText } from "lucide-react";
import { race } from "@/lib/race";

export default function Cartel() {
  return (
    <section id="cartel" className="cartel-section">
      <div className="wrap cartel-grid">
        <div className="cartel-copy">
          <p className="eyebrow">El cartel oficial</p>
          <h2 className="section-title">II Desafío Medina Roja BTT</h2>
          <p className="section-lead">
            Cartel oficial de la edición 2026. Compártelo en redes, imprímelo o
            pásalo por WhatsApp — la tirada física estará en bares y tiendas
            del pueblo unas semanas antes.
          </p>
          <div className="cartel-meta">
            <div><span className="qlbl">Fecha</span><span className="qval">4 julio 2026</span></div>
            <div><span className="qlbl">Modalidades</span><span className="qval">30 km · 50 km</span></div>
            <div><span className="qlbl">Salida</span><span className="qval">Parque M. Hernández</span></div>
          </div>
          <div className="cartel-cta">
            <a className="btn btn-primary" href="/cartel.png" download>
              <Download size={18} strokeWidth={1.75} /> Descargar cartel
            </a>
            <a className="btn btn-outline" href={race.reglamentoUrl} target="_blank" rel="noreferrer">
              <FileText size={18} strokeWidth={1.75} /> Reglamento
            </a>
            <a className="btn btn-outline" href={race.autorizacionMenoresUrl} target="_blank" rel="noreferrer">
              <FileText size={18} strokeWidth={1.75} /> Autorización menores
            </a>
          </div>
        </div>
        <div className="cartel-frame">
          <div className="cartel-frame-inner">
            <Image
              src="/cartel.png"
              alt="Cartel oficial II Desafío Medina Roja BTT"
              width={1080}
              height={1350}
              sizes="(max-width: 900px) 90vw, 460px"
            />
          </div>
          <div className="cartel-tape cartel-tape-tl" />
          <div className="cartel-tape cartel-tape-br" />
        </div>
      </div>
    </section>
  );
}

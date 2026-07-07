import Image from "next/image";
import { ArrowRight, Camera, ChevronDown, Clock, MapPin } from "lucide-react";
import { race } from "@/lib/race";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-photo">
        <Image
          src={race.heroImage}
          alt=""
          fill
          priority
          sizes="100vw"
        />
      </div>
      <div className="hero-overlay" />
      <div className="hero-topo" />
      <div className="hero-content">
        <div className="hero-eyebrow">{race.edition}</div>
        <h1 className="hero-title">
          <span>Desafío</span>
          <span className="hero-title-2">Medina Roja</span>
          <span className="hero-title-3">BTT</span>
        </h1>
        <div className="hero-script">{race.tagline}</div>
        <div className="hero-meta">
          <div className="hero-meta-item">
            <MapPin size={18} strokeWidth={1.75} />
            <span>{race.location}</span>
          </div>
          <div className="hero-sep">·</div>
          <div className="hero-meta-item">
            <Clock size={18} strokeWidth={1.75} />
            <span>{race.date}</span>
          </div>
        </div>
        <div className="hero-cta">
          <a className="btn btn-accent" href="#galeria">
            Ver fotos <Camera size={18} strokeWidth={1.75} />
          </a>
          <a className="btn btn-ghost" href="#mapa">
            Ver recorrido <ArrowRight size={18} strokeWidth={1.75} />
          </a>
          <a
            className="btn btn-ghost"
            href={race.resultsUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Ver la clasificación de la prueba"
          >
            Clasificación
          </a>
        </div>
      </div>
      <a href="#info" className="hero-scroll" aria-label="Scroll">
        <ChevronDown size={22} strokeWidth={1.75} />
      </a>
    </section>
  );
}

"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { race } from "@/lib/race";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={"site-header" + (scrolled ? " is-scrolled" : "")}>
      <a href="#top" className="brand">
        <Image src="/logo.jpeg" alt="Medina Roja Bike Team" width={42} height={42} />
        <span className="brand-text">
          <span className="brand-1">Medina Roja</span>
          <span className="brand-2">Bike Team · Almedina</span>
        </span>
      </a>
      <nav className="nav">
        <a href="#info">Modalidades</a>
        <a href="#mapa">Recorrido</a>
        <a href="#cronograma">Cronograma</a>
        <a href="#faqs">FAQs</a>
        <a href="#contacto">Contacto</a>
      </nav>
      {race.registrationOpen ? (
        <a href={race.registrationUrl} target="_blank" rel="noreferrer" className="btn btn-primary btn-sm header-cta">
          Inscribirme
        </a>
      ) : (
        <button type="button" aria-disabled="true" disabled className="btn btn-primary btn-sm header-cta">
          Próximamente
        </button>
      )}
    </header>
  );
}

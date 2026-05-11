"use client";

import dynamic from "next/dynamic";
import { Download } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { race } from "@/lib/race";

const RouteMap = dynamic(() => import("./RouteMap"), {
  ssr: false,
  loading: () => <div className="map-canvas" aria-busy="true" />,
});

const ROUTES = {
  corta: { gpx: race.gpx.corta, color: "#D9A441", km: 30 },
  larga: { gpx: race.gpx.larga, color: "#E07B2C", km: 50 },
} as const;

type RouteKey = keyof typeof ROUTES;

export default function Mapa() {
  const [route, setRoute] = useState<RouteKey>("larga");
  const [mountMap, setMountMap] = useState(false);
  const frameRef = useRef<HTMLDivElement>(null);
  const current = ROUTES[route];

  useEffect(() => {
    if (mountMap || !frameRef.current) return;
    const node = frameRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setMountMap(true);
          observer.disconnect();
        }
      },
      { rootMargin: "300px 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [mountMap]);

  return (
    <section id="mapa" className="mapa">
      <div className="wrap">
        <p className="eyebrow">Recorrido</p>
        <h2 className="section-title">El trazado por Almedina.</h2>
        <p className="section-lead">
          Toggle entre las dos rutas. El trazado es orientativo —basado en la edición anterior— y puede variar.
          Los GPX definitivos estarán disponibles unos días antes de la prueba.
        </p>

        <div className="map-toggle" role="tablist">
          <button
            role="tab"
            aria-selected={route === "corta"}
            className={"mt-btn" + (route === "corta" ? " is-active corta" : "")}
            onClick={() => setRoute("corta")}
          >
            <span className="mt-dot mt-dot-corta" /> Corta · 30 km
          </button>
          <button
            role="tab"
            aria-selected={route === "larga"}
            className={"mt-btn" + (route === "larga" ? " is-active larga" : "")}
            onClick={() => setRoute("larga")}
          >
            <span className="mt-dot mt-dot-larga" /> Larga · 50 km
          </button>
        </div>
      </div>

      <div className="map-frame" ref={frameRef}>
        <div className="map-canvas">
          {mountMap ? (
            <RouteMap
              key={route}
              gpxUrl={current.gpx}
              routeColor={current.color}
            />
          ) : (
            <div className="map-canvas" aria-busy="true" />
          )}
        </div>

        <div className="map-legend wrap">
          <div className="ml-item"><span className="ml-pin ml-start" /> Salida</div>
          <div className="ml-item"><span className="ml-pin ml-finish" /> Meta</div>
          <div className="ml-item">
            <span className="ml-line" style={{ background: current.color }} />
            Recorrido {route === "corta" ? "30 km" : "50 km"}
          </div>
          <div className="ml-spacer" />
          <a className="btn btn-outline btn-sm" href={current.gpx} download>
            <Download size={16} strokeWidth={1.75} /> GPX {current.km} km
          </a>
        </div>
      </div>
    </section>
  );
}

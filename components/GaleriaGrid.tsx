"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { race } from "@/lib/race";

const photos = race.gallery;

export default function GaleriaGrid() {
  const [index, setIndex] = useState<number | null>(null);

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIndex(null);
      else if (e.key === "ArrowRight") setIndex((i) => (i === null ? i : (i + 1) % photos.length));
      else if (e.key === "ArrowLeft") setIndex((i) => (i === null ? i : (i - 1 + photos.length) % photos.length));
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index]);

  if (photos.length === 0) return null;

  const active = index === null ? null : photos[index];

  return (
    <>
      <ul className="gallery-grid">
        {photos.map((photo, i) => (
          <li key={photo.src}>
            <button
              type="button"
              className="gallery-tile"
              onClick={() => setIndex(i)}
              aria-label={`Ampliar foto: ${photo.alt}`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 600px) 50vw, (max-width: 980px) 33vw, 260px"
                className="gallery-img"
              />
            </button>
          </li>
        ))}
      </ul>

      {active && (
        <div
          className="gallery-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={active.alt}
          onClick={() => setIndex(null)}
        >
          <button
            type="button"
            className="gallery-lightbox-close"
            aria-label="Cerrar"
            onClick={() => setIndex(null)}
          >
            <X size={24} strokeWidth={2.2} aria-hidden="true" />
          </button>

          {photos.length > 1 && (
            <button
              type="button"
              className="gallery-lightbox-nav gallery-lightbox-prev"
              aria-label="Foto anterior"
              onClick={(e) => {
                e.stopPropagation();
                setIndex((i) => (i === null ? i : (i - 1 + photos.length) % photos.length));
              }}
            >
              <ChevronLeft size={30} strokeWidth={2} aria-hidden="true" />
            </button>
          )}

          <figure className="gallery-lightbox-figure" onClick={(e) => e.stopPropagation()}>
            <Image
              src={active.src}
              alt={active.alt}
              width={active.w}
              height={active.h}
              className="gallery-lightbox-img"
              sizes="92vw"
            />
            <figcaption className="gallery-lightbox-caption">
              {active.alt} · {index! + 1}/{photos.length}
            </figcaption>
          </figure>

          {photos.length > 1 && (
            <button
              type="button"
              className="gallery-lightbox-nav gallery-lightbox-next"
              aria-label="Foto siguiente"
              onClick={(e) => {
                e.stopPropagation();
                setIndex((i) => (i === null ? i : (i + 1) % photos.length));
              }}
            >
              <ChevronRight size={30} strokeWidth={2} aria-hidden="true" />
            </button>
          )}
        </div>
      )}
    </>
  );
}

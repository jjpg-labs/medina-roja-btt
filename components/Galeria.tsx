import { ArrowUpRight } from "lucide-react";
import { race } from "@/lib/race";
import GaleriaGrid from "./GaleriaGrid";

export default function Galeria() {
  const hasPhotos = race.gallery.length > 0;
  const hasAlbum = Boolean(race.driveAlbumUrl);

  // Sin fotos ni álbum no hay nada que mostrar: no renderizamos la sección.
  if (!hasPhotos && !hasAlbum) return null;

  return (
    <section id="galeria" className="galeria">
      <div className="wrap">
        <p className="eyebrow">Galería</p>
        <h2 className="section-title">La carrera, en fotos.</h2>
        <p className="section-lead">
          Los mejores momentos de la II edición por los cerros de Almedina.
          {hasAlbum && hasPhotos ? " El álbum completo está en Google Drive." : ""}
        </p>

        <GaleriaGrid />

        {hasAlbum && (
          <div className="gallery-cta">
            <a className="btn btn-primary" href={race.driveAlbumUrl} target="_blank" rel="noreferrer">
              Ver todas las fotos <ArrowUpRight size={18} strokeWidth={1.75} />
            </a>
          </div>
        )}
      </div>
    </section>
  );
}

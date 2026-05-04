import Image from "next/image";
import { race } from "@/lib/race";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div className="footer-brand">
          <Image src="/logo.jpeg" alt="" width={54} height={54} />
          <div>
            <div className="footer-title">{race.name}</div>
            <div className="footer-sub">Almedina · Castilla-La Mancha · 2026</div>
          </div>
        </div>
        <div className="footer-meta">
          <a href="#">Aviso legal</a>
          <a href="#">Política de privacidad</a>
          <a href={race.contact.instagram}>Instagram</a>
        </div>
      </div>
      <div className="footer-line">© Medina Roja Bike Team · Vuelve el desafío.</div>
    </footer>
  );
}

import Alojamientos from "@/components/Alojamientos";
import Cartel from "@/components/Cartel";
import Contacto from "@/components/Contacto";
import Cronograma from "@/components/Cronograma";
import Faqs from "@/components/Faqs";
import Footer from "@/components/Footer";
import Galeria from "@/components/Galeria";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Mapa from "@/components/Mapa";
import Modalidades from "@/components/Modalidades";
import Patrocinadores from "@/components/Patrocinadores";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Galeria />
        <Modalidades />
        <Mapa />
        <Patrocinadores />
        <Cartel />
        <Cronograma />
        <Alojamientos />
        <Faqs />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}

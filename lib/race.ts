export const race = {
  name: "II Desafío Medina Roja BTT",
  edition: "II Edición · 2026",
  date: "4 Julio 2026 · sábado",
  location: "Almedina · Ciudad Real",
  startPoint: "Parque Miguel Hernández",
  tagline: "Vuelve el desafío",
  // Foto del hero. Las opciones disponibles (recortes 16:9 con el skyline
  // de Almedina centrado) son /portada1-hero.jpg, /portada2-hero.jpg,
  // /portada3-hero.jpg y /portada4-hero.jpg.
  heroImage: "/portada3-hero.jpg",
  modalities: {
    corta: { km: 30, ascent: 350, desc: "Vuelta amable por los cerros y caminos del pueblo. Apta para iniciados con buena base." },
    larga: { km: 50, ascent: 1000, desc: "El desafío de verdad. Sierra, llanura manchega y atardecer en la meta." },
  },
  startTime: "8:30 (8:00 si calor extremo)",
  price: "25 €",
  priceTiers: [
    { label: "Tramo 1", deadline: "hasta 29 mayo",     price: "25 €", note: "Maillot el día de la prueba" },
    { label: "Tramo 2", deadline: "30 mayo – 1 julio", price: "25 €", note: "Maillot después de la prueba" },
  ],
  registrationUrl: "https://deporchip.com/inscripciones/ii-desafio-medina-roja-mtb-almedina/",
  registrationOpen: true,
  reglamentoUrl: "/reglamento.pdf",
  schedule: [
    { time: "7:00",  title: "Recogida de dorsales", desc: "Parque Miguel Hernández, hasta las 8:15.", color: "oliva" },
    { time: "8:15",  title: "Briefing técnico",     desc: "Recorrido, avituallamiento, seguridad y material obligatorio.", color: "almagra" },
    { time: "8:30",  title: "Salida",               desc: "CORTA y LARGA juntas (8:00 si las condiciones meteo lo exigen).", color: "naranja" },
    { time: "13:00", title: "Cierre de meta",       desc: "Tiempo máximo 4:30 h. Comida y bebida al cruzar la línea.", color: "almagra" },
    { time: "13:30", title: "Entrega de trofeos",   desc: "3 primeros general, 1º local, 1ª femenina, 1º sub18 (máster por confirmar).", color: "mostaza" },
    { time: "14:00", title: "Comida popular",       desc: "Incluida en la inscripción. Plato manchego para inscritos y acompañantes.", color: "naranja" },
  ] as const,
  contact: {
    instagram: "https://www.instagram.com/desafiomedinarojabtt/",
    instagramHandle: "@desafiomedinarojabtt",
    facebook: "https://www.facebook.com/people/Desaf%C3%ADo-Medina-Roja/61577237314001/",
    facebookHandle: "Desafío Medina Roja",
    email: "medinarojabiketeam@gmail.com",
    phone: "por confirmar",
  },
  gpx: {
    corta: "/corta-30km.gpx",
    larga: "/larga-50km.gpx",
  },
};

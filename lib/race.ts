export const race = {
  name: "II Desafío Medina Roja BTT",
  edition: "II Edición · 2026",
  date: "4 Julio 2026 · sábado",
  location: "Almedina · Ciudad Real",
  startPoint: "Parque municipal",
  tagline: "Vuelve el desafío",
  // Foto del hero. Las opciones disponibles en /public/ son
  // /portada1.jpeg, /portada2.jpeg, /portada3.jpeg, /portada4.jpeg
  // (también /cartel.jpeg, pero el cartel tiene su propia sección).
  heroImage: "/portada3.jpeg",
  modalities: {
    corta: { km: 30, ascent: 350, desc: "Vuelta amable por los cerros y caminos del pueblo. Apta para iniciados con buena base." },
    larga: { km: 50, ascent: 850, desc: "El desafío de verdad. Sierra, llanura manchega y atardecer en la meta." },
  },
  startTime: "por confirmar",
  price: "por confirmar",
  registrationUrl: "#inscripcion",
  schedule: [
    { time: "8:00",  title: "Recogida de dorsales", desc: "Parque municipal, junto a la salida.", color: "oliva" },
    { time: "8:45",  title: "Briefing técnico",     desc: "Recorrido, avituallamientos, seguridad.", color: "almagra" },
    { time: "9:00",  title: "Salida CORTA · 30 km", desc: "Salida neutralizada los primeros 500 m.", color: "naranja" },
    { time: "9:15",  title: "Salida LARGA · 50 km", desc: "Tras la corta. 850 m+ de desnivel.",     color: "mostaza" },
    { time: "11:30", title: "Llegadas",             desc: "Meta en el parque. Avituallamiento líquido y sólido.", color: "almagra" },
    { time: "13:30", title: "Entrega de trofeos",   desc: "Categorías por modalidad y tramo de edad.", color: "oliva" },
    { time: "14:00", title: "Comida popular",       desc: "Para inscritos y acompañantes. Plato manchego.", color: "naranja" },
  ] as const,
  sponsors: [
    { name: "Ayto. Almedina", kind: "AYUNTAMIENTO" },
    { name: "Diputación CR",  kind: "INSTITUCIÓN" },
    { name: "Patrocinador",   kind: "PATROCINADOR" },
    { name: "Patrocinador",   kind: "PATROCINADOR" },
    { name: "Bar La Plaza",   kind: "COLABORADOR" },
    { name: "Tienda BTT",     kind: "COLABORADOR" },
  ],
  contact: {
    instagram: "https://www.instagram.com/desafiomedinarojabtt/",
    instagramHandle: "@desafiomedinarojabtt",
    email: "medinarojabiketeam@gmail.com",
    phone: "por confirmar",
  },
  gpx: {
    corta: "/corta-30km.gpx",
    larga: "/larga-50km.gpx",
  },
};

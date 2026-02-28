import { BookOpen, Book, ArrowLeft, MessageCircle, Download, ExternalLink, Headphones } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

// Datos actualizados con preguntas prácticas
const guiasData: Record<string, {
  id: string; semana_numero: number; titulo: string; capitulos: string;
  descripcion: string; libro_referencia: string; paginas_referencia: string;
  temas_clave: string[]; preguntas_destacadas: string[];
  versiculos_clave: string[]; pdf_url: string; biblia_url: string;
  audio_videos: { label: string; url: string }[];
}> = {
  "lucas-1": {
    id: "lucas-1", semana_numero: 1, titulo: "Nada es imposible para Dios",
    capitulos: "Lucas 1",
    descripcion: "En este primer estudio nos sumergimos en Lucas 1, donde descubrimos el anuncio del nacimiento de Juan el Bautista y de Jesús.",
    libro_referencia: "El Llamado a Seguir a Jesús, Kay Arthur",
    paginas_referencia: "pp. 17–21",
    temas_clave: ["El propósito del Evangelio de Lucas", "Zacarías, Elisabet y María — ejemplos de fe", "El Espíritu Santo en Lucas 1", "El nacimiento virginal y su importancia", "Dios cumple Sus promesas"],
    preguntas_destacadas: [
      "¿Hay alguna promesa de Dios o situación en tu vida hoy que te parezca 'imposible'? ¿Cómo puedes aplicar la verdad de que 'nada es imposible para Dios' esta semana?",
      "Al igual que María respondió con obediencia radical, ¿en qué área específica de tu vida diaria necesitas rendirte a la voluntad de Dios hoy?",
      "¿De qué manera puedes cultivar una actitud de adoración y gratitud en medio de una espera difícil, tal como lo hicieron Zacarías y Elisabet?",
    ],
    versiculos_clave: ["Lucas 1:37", "Lucas 1:67-79", "Isaías 7:14", "Isaías 9:6", "Romanos 5:12-15", "1 Pedro 1:18-19"],
    pdf_url: "/guias/lucas-semana-1.pdf",
    biblia_url: "https://www.biblegateway.com/passage/?search=Lucas+1&version=RVR1960",
    audio_videos: [{ label: "Lucas 1", url: "https://www.youtube.com/watch?v=BjGyN54mSr0" }],
  },
  "lucas-2": {
    id: "lucas-2", semana_numero: 2, titulo: "¿Dónde está el fruto del arrepentimiento?",
    capitulos: "Lucas 2–3",
    descripcion: "El nacimiento de Jesús, Su presentación en el templo, y el ministerio de Juan el Bautista. El verdadero arrepentimiento y sus frutos.",
    libro_referencia: "El Llamado a Seguir a Jesús, Kay Arthur",
    paginas_referencia: "pp. 23–27",
    temas_clave: ["El nacimiento y la niñez de Jesús", "Simeón y Ana — esperando al Mesías", "El ministerio de Juan el Bautista", "El fruto del arrepentimiento", "El bautismo de Jesús"],
    preguntas_destacadas: [
      "Juan el Bautista llamó a dar 'frutos dignos de arrepentimiento'. ¿Qué acción o cambio práctico necesitas hacer esta semana para reflejar un arrepentimiento genuino en tu trabajo o familia?",
      "Simeón y Ana esperaron fielmente al Señor por años. ¿Cómo puedes mantenerte enfocado y fiel a Dios en medio de las rutinas diarias?",
      "Al pensar en el nacimiento humilde de Jesús, ¿de qué forma puedes mostrar humildad y servicio a alguien de tu comunidad esta misma semana?",
    ],
    versiculos_clave: ["Lucas 2:1-20", "Lucas 2:21-40", "Lucas 2:41-52", "Lucas 3:3-18", "Mateo 2:1-23", "Malaquías 4:6", "Lucas 1:15-17"],
    pdf_url: "/guias/lucas-semana-2.pdf",
    biblia_url: "https://www.biblegateway.com/passage/?search=Lucas+2-3&version=RVR1960",
    audio_videos: [{ label: "Lucas 2", url: "https://www.youtube.com/watch?v=8jf9lqW1KRE" }, { label: "Lucas 3", url: "https://www.youtube.com/watch?v=WFOt0tg5JRE" }],
  },
  "lucas-3": {
    id: "lucas-3", semana_numero: 3, titulo: "Seguir a Cristo — un asunto de obediencia, no de capacidad",
    capitulos: "Lucas 4–5",
    descripcion: "Jesús inicia Su ministerio público, enfrenta la tentación en el desierto, enseña con autoridad y llama a Sus primeros discípulos.",
    libro_referencia: "El Llamado a Seguir a Jesús, Kay Arthur",
    paginas_referencia: "pp. 29–32",
    temas_clave: ["La tentación de Jesús en el desierto", "El poder de conocer la Palabra de Dios", "El llamado de Jesús (Lucas 4:18-19)", "Los primeros discípulos", "La oposición de los líderes religiosos"],
    preguntas_destacadas: [
      "Jesús venció la tentación usando la Palabra de Dios. ¿Qué versículo puedes memorizar o llevar contigo esta semana para defenderte de tu tentación más frecuente?",
      "Los primeros discípulos dejaron sus redes para seguir a Jesús. ¿Hay alguna 'red' (hábito, distracción, preocupación) que debas soltar hoy para seguir a Cristo más de cerca?",
      "Según el llamado de Jesús a dar libertad y sanidad, ¿a quién en tu entorno podrías acercarte esta semana para compartirle esperanza o ayudarle en su carga?",
    ],
    versiculos_clave: ["Lucas 4:1-13", "Lucas 4:18-19", "Lucas 4:31-44", "Lucas 5:1-16", "Lucas 5:17-39", "Mateo 4:1-11"],
    pdf_url: "/guias/lucas-semana-3.pdf",
    biblia_url: "https://www.biblegateway.com/passage/?search=Lucas+4-5&version=RVR1960",
    audio_videos: [{ label: "Lucas 4", url: "https://www.youtube.com/watch?v=7dGv6xFODQc" }, { label: "Lucas 5", url: "https://www.youtube.com/watch?v=3xCTDeJAZ60" }],
  },
  "lucas-4": {
    id: "lucas-4", semana_numero: 4, titulo: "El amor del que ha sido perdonado",
    capitulos: "Lucas 6–7",
    descripcion: "Jesús demuestra Su amor y poder al acercarse a las personas, escucharlas y transformar sus vidas.",
    libro_referencia: "El Llamado a Seguir a Jesús, Kay Arthur",
    paginas_referencia: "pp. 33–36",
    temas_clave: ["Jesús y el día de reposo", "Las bienaventuranzas en Lucas", "Un árbol se conoce por su fruto", "Juan el Bautista y sus dudas", "El amor del que ha sido perdonado"],
    preguntas_destacadas: [
      "Jesús enseñó que 'de la abundancia del corazón habla la boca'. Presta atención a tus conversaciones hoy, ¿qué revelan sobre lo que hay en tu corazón?",
      "Pensando en la mujer que ungió a Jesús por el perdón que recibió, ¿cómo puedes demostrar hoy un amor extravagante y gratitud a Dios de manera práctica?",
      "Jesús nos llama a amar y perdonar a quienes nos ofenden. ¿Hay alguna persona en tu vida con la que necesites iniciar la reconciliación o extender perdón esta misma semana?",
    ],
    versiculos_clave: ["Lucas 6:1-11", "Lucas 6:20-49", "Lucas 6:43-45", "Lucas 7:1-35", "Lucas 7:36-50", "Mateo 5:17-19", "Éxodo 20:8-11"],
    pdf_url: "/guias/lucas-semana-4.pdf",
    biblia_url: "https://www.biblegateway.com/passage/?search=Lucas+6-7&version=RVR1960",
    audio_videos: [{ label: "Lucas 6", url: "https://www.youtube.com/watch?v=apMiaadShg4" }, { label: "Lucas 7", url: "https://www.youtube.com/watch?v=OuLjZxiy9eU" }],
  },
  "lucas-5": {
    id: "lucas-5", semana_numero: 5, titulo: "Sin mirar atrás",
    capitulos: "Lucas 8–9",
    descripcion: "Jesús nos enseña qué significa ser buena tierra para Su Palabra y qué implica seguirlo de verdad.",
    libro_referencia: "El Llamado a Seguir a Jesús, Kay Arthur",
    paginas_referencia: "pp. 37–40",
    temas_clave: ["La parábola del sembrador — cuatro tipos de terreno", "Jesús calma la tempestad", "La fe de Jairo y la mujer con flujo de sangre", "Alimentación de los cinco mil", "El costo de seguir a Cristo"],
    preguntas_destacadas: [
      "Basado en la parábola del sembrador, ¿qué 'espinos' (afanes, riquezas o placeres) están ahogando tu crecimiento espiritual hoy y qué paso tomarás para removerlos?",
      "Jesús dijo: 'Niéguese a sí mismo, tome su cruz cada día, y sígame'. ¿Qué significa rendir tus propios deseos en las decisiones que debes tomar hoy?",
      "Ante las 'tormentas' o crisis inesperadas de la vida diaria, ¿cómo puedes ejercitar tu fe y confiar en el control de Jesús en lugar de ceder al pánico o la ansiedad?",
    ],
    versiculos_clave: ["Lucas 8:1-18", "Lucas 8:22-39", "Lucas 8:40-56", "Lucas 9:1-17", "Lucas 9:18-36", "Lucas 9:57-62", "Marcos 4:13-20"],
    pdf_url: "/guias/lucas-semana-5.pdf",
    biblia_url: "https://www.biblegateway.com/passage/?search=Lucas+8-9&version=RVR1960",
    audio_videos: [{ label: "Lucas 8", url: "https://www.youtube.com/watch?v=C7klHuqleEc" }, { label: "Lucas 9", url: "https://www.youtube.com/watch?v=V3THscX9h4o" }],
  },
  "lucas-6": {
    id: "lucas-6", semana_numero: 6, titulo: "Permanece a Sus pies",
    capitulos: "Lucas 10 – 11:36",
    descripcion: "Jesús nos enseña a vivir el reino de Dios con obediencia práctica: sirviendo con compasión, escuchando Su Palabra y perseverando en la oración.",
    libro_referencia: "El Llamado a Seguir a Jesús, Kay Arthur",
    paginas_referencia: "pp. 41–44",
    temas_clave: ["El envío de los setenta discípulos", "La parábola del buen samaritano", "María y Marta — la única cosa necesaria", "La enseñanza de Jesús sobre la oración", "Jesús y el poder sobre los demonios"],
    preguntas_destacadas: [
      "Pensando en el Buen Samaritano, ¿quién es el 'prójimo' en tu camino diario (trabajo, comunidad) que tiene una necesidad práctica y cómo puedes ayudarle activamente esta semana?",
      "Entre el afán de Marta y la adoración de María, ¿cómo puedes asegurarte de apartar tiempo intencional hoy para sentarte a escuchar a Dios, sin que las responsabilidades te abrumen?",
      "A la luz de la enseñanza de Jesús sobre la oración persistente, ¿por qué situación específica vas a orar con insistencia, fe y constancia durante esta semana?",
    ],
    versiculos_clave: ["Lucas 10:1-16", "Lucas 10:25-37", "Lucas 10:38-42", "Lucas 11:1-13", "Lucas 11:14-28", "Juan 8:31-32", "Juan 15:7"],
    pdf_url: "/guias/lucas-semana-6.pdf",
    biblia_url: "https://www.biblegateway.com/passage/?search=Lucas+10-11&version=RVR1960",
    audio_videos: [{ label: "Lucas 10", url: "https://www.youtube.com/watch?v=AF1bY3ck8Ug" }, { label: "Lucas 11", url: "https://www.youtube.com/watch?v=_IUJvaKpcSs" }],
  },
};

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function GuiaDetailPage({ params }: PageProps) {
  const { id } = await params;
  const guia = guiasData[id];

  if (!guia) {
    notFound();
  }

  return (
    <div className="max-w-3xl mx-auto">
      {/* Back Link */}
      <Link
        href="/guias"
        className="inline-flex items-center gap-1.5 text-text-secondary hover:text-accent text-sm mb-6 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Volver a Guías
      </Link>

      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-accent font-[family-name:var(--font-display)] text-xs font-semibold uppercase">
            Semana {guia.semana_numero}
          </span>
          <span className="text-border text-xs">&bull;</span>
          <span className="text-text-secondary text-xs">
            {guia.capitulos}
          </span>
        </div>
        <h1 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold mb-2">
          {guia.titulo}
        </h1>
        <p className="text-text-secondary text-sm">{guia.descripcion}</p>
        <div className="flex items-center gap-2 mt-3 flex-wrap">
          <span className="inline-flex items-center gap-1.5 bg-primary/20 border border-border-accent/30 px-3 py-1 rounded-full text-xs text-accent-gold">
            <Book className="w-3.5 h-3.5" />
            {guia.libro_referencia} — {guia.paginas_referencia}
          </span>
        </div>
      </div>

      {/* Download PDF */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
        <a
          href={guia.pdf_url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-primary/20 border border-border-accent/40 rounded-xl p-4 hover:bg-primary/30 transition-colors group"
        >
          <div className="w-10 h-10 rounded-lg bg-primary/30 flex items-center justify-center group-hover:bg-primary/40">
            <Download className="w-5 h-5 text-accent" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-text-primary text-sm font-medium">Descargar Guía en PDF</p>
            <p className="text-text-secondary text-xs">Guía completa para imprimir</p>
          </div>
          <ExternalLink className="w-4 h-4 text-accent flex-shrink-0" />
        </a>

        <a
          href={guia.biblia_url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-accent-gold/10 border border-accent-gold/30 rounded-xl p-4 hover:bg-accent-gold/20 transition-colors group"
        >
          <div className="w-10 h-10 rounded-lg bg-accent-gold/20 flex items-center justify-center group-hover:bg-accent-gold/30">
            <BookOpen className="w-5 h-5 text-accent-gold" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-text-primary text-sm font-medium">Leer {guia.capitulos}</p>
            <p className="text-text-secondary text-xs">Reina Valera 1960</p>
          </div>
          <ExternalLink className="w-4 h-4 text-accent-gold flex-shrink-0" />
        </a>
      </div>

      {/* Audio Bible Videos */}
      <div className={`grid grid-cols-1 ${guia.audio_videos.length > 1 ? "sm:grid-cols-2" : ""} gap-3 mb-6`}>
        {guia.audio_videos.map((video, i) => (
          <a
            key={i}
            href={video.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-bg-card border border-border rounded-xl p-4 hover:border-accent/50 hover:bg-bg-elevated transition-colors group"
          >
            <div className="w-10 h-10 rounded-lg bg-[#FF0000]/15 flex items-center justify-center group-hover:bg-[#FF0000]/25">
              <Headphones className="w-5 h-5 text-[#FF0000]" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-text-primary text-sm font-medium">Escuchar {video.label}</p>
              <p className="text-text-secondary text-xs">Audio Biblia Dramatizada</p>
            </div>
            <ExternalLink className="w-4 h-4 text-text-secondary group-hover:text-accent flex-shrink-0" />
          </a>
        ))}
      </div>

      {/* Key Topics */}
      <div className="bg-bg-card border border-border rounded-xl p-5 md:p-6 mb-4">
        <div className="flex items-center gap-2 mb-4">
          <BookOpen className="w-5 h-5 text-accent" />
          <h2 className="font-[family-name:var(--font-heading)] text-lg font-bold">
            Temas Principales
          </h2>
        </div>
        <ul className="space-y-2">
          {guia.temas_clave.map((tema, i) => (
            <li key={i} className="flex items-start gap-2 text-text-secondary text-sm">
              <span className="text-accent font-bold mt-0.5">•</span>
              {tema}
            </li>
          ))}
        </ul>
      </div>

      {/* Key Verses */}
      <div className="bg-bg-card border border-border rounded-xl p-5 md:p-6 mb-4">
        <h3 className="text-xs font-semibold text-accent-gold uppercase tracking-wider mb-3">
          Versículos Clave
        </h3>
        <div className="flex flex-wrap gap-2">
          {guia.versiculos_clave.map((v, i) => (
            <span key={i} className="bg-primary/20 border border-border-accent/30 px-2.5 py-1 rounded-full text-xs text-accent">
              {v}
            </span>
          ))}
        </div>
      </div>

      {/* Discussion Questions */}
      <div className="bg-bg-card border border-border rounded-xl p-5 md:p-6">
        <div className="flex items-center gap-2 mb-4">
          <MessageCircle className="w-5 h-5 text-accent" />
          <h2 className="font-[family-name:var(--font-heading)] text-lg font-bold">
            Preguntas Prácticas
          </h2>
        </div>
        <p className="text-text-secondary text-xs mb-4">
          Preguntas de aplicación diaria para la vida y el grupo pequeño
        </p>
        <ul className="space-y-4">
          {guia.preguntas_destacadas.map((pregunta, i) => (
            <li key={i} className="flex gap-3">
              <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-accent/10 text-accent text-xs font-bold">
                {i + 1}
              </span>
              <p className="text-text-primary text-sm leading-relaxed pt-0.5">
                {pregunta}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

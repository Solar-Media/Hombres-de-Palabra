import { BookOpen, Book, ArrowLeft, MessageCircle, Download, ExternalLink, Headphones } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

// Same data — in production this would come from Supabase
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
      "¿Para quién fue escrito este evangelio y por qué fue escrito?",
      "¿Qué aprendes acerca de Zacarías, Elisabet y María según el texto?",
      "¿Qué has aprendido en Lucas 1 acerca de Dios y de Su manera de actuar?",
      "¿Qué aprendiste acerca de Jesús en este capítulo? Si te negaras a ti mismo, tomaras tu cruz y lo siguieras, ¿a qué persona estarías siguiendo?",
      "¿Qué has aprendido acerca del Espíritu Santo?",
      "¿Qué enseña este capítulo en lo referente al nacimiento virginal? ¿Es importante creer esto?",
      "¿Qué dicen Isaías 7:14; 9:6, Romanos 5:12-15 y 1 Pedro 1:18-19 acerca del nacimiento de Jesús y Su misión?",
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
      "Anota los eventos específicos de Lucas 2:1-20, 2:21-40, 2:41-52, 3:1-20 y 3:20-22.",
      "¿Qué aprendes acerca de Simeón y Ana en Lucas 2:21-40?",
      "¿Por qué se encontraban María, José y Jesús en Jerusalén? (Lee Levítico 12)",
      "¿Qué ejemplo ves en Jesús que te gustaría seguir?",
      "¿Cuál era el mensaje de Juan? ¿Cuál era su propósito? ¿Qué deberían hacer quienes le creían?",
      "¿Cumplió Juan su ministerio? ¿Qué le costó?",
      "Según Juan, ¿quién era Jesús y qué vino a hacer?",
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
      "¿Quiénes son los protagonistas en Lucas 4:1-13? ¿Cómo enfrenta Jesús cada tentación?",
      "¿Qué aprendes sobre la importancia de conocer la Palabra de Dios?",
      "Según Lucas 4:18-19, ¿cuál era el llamado de Jesús?",
      "¿Qué observas que te muestra cómo Jesús pensaba cumplir con su llamamiento? ¿Lo haría solo?",
      "¿Cómo respondieron los líderes religiosos al propósito de Dios para Jesús?",
      "Si sigues a Jesús, ¿piensas que podrías experimentar cosas similares?",
      "¿Qué observaste acerca de quiénes seguían a Jesús? ¿Qué clase de personas eran?",
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
      "¿Jesús o sus discípulos habían quebrantado el día de reposo? Explica tu respuesta.",
      "Si vamos a seguir a Jesús, ¿cómo deberíamos responder a lo que Él enseña en Lucas 6:20-49?",
      "¿Quiénes son bienaventurados y por qué? ¿Quiénes sufrirán el ¡ay! y por qué?",
      "¿Qué revela nuestro fruto acerca de nosotros? ¿Qué crees que es el 'fruto'?",
      "¿Cómo respondió Jesús a Juan cuando comenzó a dudar de si Jesús era realmente el Mesías?",
      "¿Qué aprendiste acerca de Jesucristo? ¿A quiénes encontró y cómo los trató?",
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
      "¿Cómo se relaciona la parábola del sembrador con la Palabra de Dios?",
      "¿Cómo es el terreno de tu corazón? ¿Cómo lo sabes?",
      "¿Por qué Jesús censura a los discípulos en la tempestad? ¿Fue justo?",
      "¿Cómo se desarrolla el relato de Jairo paso a paso y cómo responde Jesús en cada momento?",
      "¿Qué aprendes acerca de Jesucristo en Lucas 9:18-36?",
      "¿Cuál es el precio de ser seguidores de Jesucristo?",
      "¿Qué significa 'niéguese a sí mismo, tome su cruz cada día y sígame'?",
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
      "¿Cuántos discípulos envió Jesús y cuál es la enseñanza principal de Lucas 10:1-16?",
      "¿Qué estaba buscando el intérprete de la ley? ¿Cuál es la lección principal del buen samaritano?",
      "¿Qué aprendiste de María y Marta? ¿Cuál es la única cosa realmente necesaria?",
      "¿Con cuál de estas dos mujeres te identificas más y por qué?",
      "¿Qué aprendes sobre la oración en Lucas 11:1-13?",
      "¿Qué relación hay entre la oración y la Palabra de Dios? (Lee Juan 15:7 y 15:16)",
      "Según Lucas 11:29-32, ¿qué pide 'esta generación' y qué rechaza?",
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
            Preguntas de la Guía
          </h2>
        </div>
        <p className="text-text-secondary text-xs mb-4">
          Preguntas destacadas para reflexión personal y discusión en grupo
        </p>
        <div className="space-y-3">
          {guia.preguntas_destacadas.map((pregunta, i) => (
            <div key={i} className="bg-bg-elevated border border-border rounded-lg p-3">
              <div className="flex items-start gap-2">
                <span className="text-accent font-bold text-sm mt-0.5">{i + 1}.</span>
                <p className="text-text-primary text-sm">{pregunta}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between mt-6 pt-4 border-t border-border">
        {guia.semana_numero > 1 ? (
          <Link
            href={`/guias/lucas-${guia.semana_numero - 1}`}
            className="text-text-secondary hover:text-accent text-sm transition-colors"
          >
            ← Semana {guia.semana_numero - 1}
          </Link>
        ) : (
          <div />
        )}
        {guia.semana_numero < 6 ? (
          <Link
            href={`/guias/lucas-${guia.semana_numero + 1}`}
            className="text-text-secondary hover:text-accent text-sm transition-colors"
          >
            Semana {guia.semana_numero + 1} →
          </Link>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}

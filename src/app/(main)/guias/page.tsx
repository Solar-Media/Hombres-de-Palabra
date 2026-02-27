import { BookOpen, ChevronRight, Book, Download, FileText } from "lucide-react";
import Link from "next/link";

// Real data from the Lucas Bible study guides
const seriesData = {
  nombre: "Estudio de Lucas",
  descripcion: "El Llamado a Seguir a Jesús — Kay Arthur",
  parte: "Parte 1 de 2 (Semanas 1–8)",
  totalSemanas: 8,
  guias: [
    {
      id: "lucas-1",
      semana_numero: 1,
      titulo: "Nada es imposible para Dios",
      capitulos: "Lucas 1",
      descripcion:
        "En este primer estudio, nos sumergimos en Lucas 1, donde descubrimos el anuncio del nacimiento de Juan el Bautista y de Jesús. Conoceremos a Zacarías, Elisabet y María, y aprenderemos sobre el Espíritu Santo, el nacimiento virginal y la fidelidad de Dios.",
      libro_referencia: "El Llamado a Seguir a Jesús, Kay Arthur",
      paginas_referencia: "pp. 17–21",
      temas_clave: [
        "El propósito del Evangelio de Lucas",
        "Zacarías, Elisabet y María — ejemplos de fe",
        "El Espíritu Santo en Lucas 1",
        "El nacimiento virginal y su importancia",
        "Dios cumple Sus promesas",
      ],
      preguntas_destacadas: [
        "¿Para quién fue escrito este evangelio y por qué?",
        "¿Qué aprendes acerca de Jesús en este capítulo?",
        "¿Qué enseña este capítulo sobre el nacimiento virginal? ¿Es importante creerlo?",
        "¿Qué has aprendido acerca del Espíritu Santo?",
      ],
      versiculos_clave: ["Lucas 1:37", "Lucas 1:67-79", "Isaías 7:14", "Isaías 9:6", "Romanos 5:12-15"],
      pdf_url: "/guias/lucas-semana-1.pdf",
    },
    {
      id: "lucas-2",
      semana_numero: 2,
      titulo: "¿Dónde está el fruto del arrepentimiento?",
      capitulos: "Lucas 2–3",
      descripcion:
        "Esta semana cubrimos el nacimiento de Jesús, Su presentación en el templo, y el ministerio de Juan el Bautista. Exploraremos qué significa el verdadero arrepentimiento y conoceremos a Simeón y Ana.",
      libro_referencia: "El Llamado a Seguir a Jesús, Kay Arthur",
      paginas_referencia: "pp. 23–27",
      temas_clave: [
        "El nacimiento y la niñez de Jesús",
        "Simeón y Ana — esperando al Mesías",
        "El ministerio de Juan el Bautista",
        "El fruto del arrepentimiento",
        "El bautismo de Jesús",
      ],
      preguntas_destacadas: [
        "¿Qué aprendes acerca de Simeón y Ana en Lucas 2:21-40?",
        "¿Cuál sería el ministerio de Juan el Bautista?",
        "¿Cuál era el mensaje de Juan? ¿Cuál era su propósito?",
        "Según Juan, ¿quién era Jesús y qué vino a hacer?",
      ],
      versiculos_clave: ["Lucas 2:1-20", "Lucas 2:21-40", "Lucas 3:3-18", "Mateo 2:1-23", "Malaquías 4:6"],
      pdf_url: "/guias/lucas-semana-2.pdf",
    },
    {
      id: "lucas-3",
      semana_numero: 3,
      titulo: "Seguir a Cristo — un asunto de obediencia, no de capacidad",
      capitulos: "Lucas 4–5",
      descripcion:
        "Jesús inicia Su ministerio público, enfrenta la tentación en el desierto, enseña con autoridad y llama a Sus primeros discípulos. Aprenderemos que seguir a Cristo es un asunto de obediencia, no de capacidad.",
      libro_referencia: "El Llamado a Seguir a Jesús, Kay Arthur",
      paginas_referencia: "pp. 29–32",
      temas_clave: [
        "La tentación de Jesús en el desierto",
        "El poder de conocer la Palabra de Dios",
        "El llamado de Jesús (Lucas 4:18-19)",
        "Los primeros discípulos",
        "La oposición de los líderes religiosos",
      ],
      preguntas_destacadas: [
        "¿Cómo enfrenta Jesús cada tentación?",
        "¿Cuál era el llamado de Jesús según Lucas 4:18-19?",
        "¿Qué clase de personas seguían a Jesús y por qué razón lo seguían?",
        "Si sigues a Jesús, ¿piensas que podrías experimentar cosas similares?",
      ],
      versiculos_clave: ["Lucas 4:1-13", "Lucas 4:18-19", "Lucas 5:1-16", "Mateo 4:1-11", "Marcos 1:10-13"],
      pdf_url: "/guias/lucas-semana-3.pdf",
    },
    {
      id: "lucas-4",
      semana_numero: 4,
      titulo: "El amor del que ha sido perdonado",
      capitulos: "Lucas 6–7",
      descripcion:
        "Jesús demuestra Su amor y poder al acercarse a las personas, escucharlas y transformar sus vidas. Estudiaremos Sus enseñanzas sobre el día de reposo, las bienaventuranzas, el fruto espiritual y el perdón.",
      libro_referencia: "El Llamado a Seguir a Jesús, Kay Arthur",
      paginas_referencia: "pp. 33–36",
      temas_clave: [
        "Jesús y el día de reposo",
        "Las bienaventuranzas en Lucas",
        "Un árbol se conoce por su fruto",
        "Juan el Bautista y sus dudas",
        "El amor del que ha sido perdonado",
      ],
      preguntas_destacadas: [
        "¿Jesús o sus discípulos habían quebrantado el día de reposo?",
        "¿Qué revela nuestro fruto acerca de nosotros?",
        "¿Cómo respondió Jesús a Juan cuando comenzó a dudar?",
        "¿Cuál fue la verdad más importante que aprendiste esta semana?",
      ],
      versiculos_clave: ["Lucas 6:1-11", "Lucas 6:20-49", "Lucas 7:36-50", "Mateo 5:17-19", "Éxodo 20:8-11"],
      pdf_url: "/guias/lucas-semana-4.pdf",
    },
    {
      id: "lucas-5",
      semana_numero: 5,
      titulo: "Sin mirar atrás",
      capitulos: "Lucas 8–9",
      descripcion:
        "Jesús nos enseña qué significa ser buena tierra para Su Palabra y qué implica seguirlo de verdad. La parábola del sembrador, la fe de Jairo, la alimentación de los cinco mil y el costo del discipulado.",
      libro_referencia: "El Llamado a Seguir a Jesús, Kay Arthur",
      paginas_referencia: "pp. 37–40",
      temas_clave: [
        "La parábola del sembrador — cuatro tipos de terreno",
        "Jesús calma la tempestad",
        "La fe de Jairo y la mujer con flujo de sangre",
        "Alimentación de los cinco mil",
        "El costo de seguir a Cristo",
      ],
      preguntas_destacadas: [
        "¿Cómo es el terreno de tu corazón? ¿Cómo lo sabes?",
        "¿Qué aprendes acerca de los demonios en Lucas 8?",
        "¿Cuál es el precio de ser seguidores de Jesucristo?",
        "¿Qué significa 'niéguese a sí mismo, tome su cruz cada día y sígame'?",
      ],
      versiculos_clave: ["Lucas 8:1-18", "Lucas 8:40-56", "Lucas 9:18-36", "Lucas 9:57-62", "Marcos 4:13-20"],
      pdf_url: "/guias/lucas-semana-5.pdf",
    },
    {
      id: "lucas-6",
      semana_numero: 6,
      titulo: "Permanece a Sus pies",
      capitulos: "Lucas 10 – 11:36",
      descripcion:
        "Jesús nos enseña a vivir el reino de Dios con obediencia práctica: sirviendo con compasión, escuchando Su Palabra y perseverando en la oración con un corazón sincero. La parábola del buen samaritano, María y Marta, y la enseñanza sobre la oración.",
      libro_referencia: "El Llamado a Seguir a Jesús, Kay Arthur",
      paginas_referencia: "pp. 41–44",
      temas_clave: [
        "El envío de los setenta discípulos",
        "La parábola del buen samaritano",
        "María y Marta — la única cosa necesaria",
        "La enseñanza de Jesús sobre la oración",
        "Jesús y el poder sobre los demonios",
      ],
      preguntas_destacadas: [
        "¿Cuál es la lección principal de la parábola del buen samaritano?",
        "¿Cuál es la única cosa realmente necesaria según Jesús?",
        "¿Con cuál de las dos mujeres (María o Marta) te identificas más y por qué?",
        "¿Qué aprendes sobre la oración en Lucas 11:1-13?",
      ],
      versiculos_clave: ["Lucas 10:1-16", "Lucas 10:25-37", "Lucas 10:38-42", "Lucas 11:1-13", "Juan 8:31-32", "Juan 15:7"],
      pdf_url: "/guias/lucas-semana-6.pdf",
    },
  ],
};

export default function GuiasPage() {
  return (
    <div>
      {/* Page Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
            <BookOpen className="w-5 h-5 text-accent" />
          </div>
          <div>
            <h1 className="font-[family-name:var(--font-heading)] text-xl md:text-2xl font-bold tracking-wide">
              Guías de Estudio
            </h1>
            <p className="text-text-secondary text-xs">
              Estudios bíblicos semanales
            </p>
          </div>
        </div>
      </div>

      {/* Series Banner */}
      <div className="bg-gradient-to-r from-primary/20 to-bg-card border border-border-accent/30 rounded-xl p-5 mb-6">
        <p className="text-accent text-xs font-[family-name:var(--font-display)] uppercase tracking-wider mb-1">
          Serie Actual
        </p>
        <h2 className="font-[family-name:var(--font-heading)] text-lg font-semibold mb-1">
          {seriesData.nombre}
        </h2>
        <div className="flex items-center gap-2 text-text-secondary text-xs mb-2">
          <Book className="w-3.5 h-3.5" />
          <span>{seriesData.descripcion}</span>
        </div>
        <div className="flex items-center gap-3 mt-3">
          <span className="inline-flex items-center bg-bg-elevated px-2.5 py-1 rounded-full text-[10px] text-accent-gold font-medium">
            {seriesData.parte}
          </span>
          <span className="text-text-secondary text-[10px]">
            {seriesData.guias.length} de {seriesData.totalSemanas} guías disponibles
          </span>
        </div>
      </div>

      {/* Guides List */}
      <div className="space-y-3">
        {seriesData.guias.map((guia) => (
          <Link
            key={guia.id}
            href={`/guias/${guia.id}`}
            className="group block bg-bg-card border border-border rounded-xl p-4 transition-all duration-300 hover:border-border-accent hover:bg-bg-elevated"
          >
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-accent font-[family-name:var(--font-display)] text-xs font-semibold uppercase">
                    Semana {guia.semana_numero}
                  </span>
                  <span className="text-border text-xs">&bull;</span>
                  <span className="text-text-secondary text-xs">
                    {guia.capitulos}
                  </span>
                </div>
                <h3 className="font-[family-name:var(--font-heading)] font-semibold text-sm mb-1">
                  {guia.titulo}
                </h3>
                <p className="text-text-secondary text-xs line-clamp-2">
                  {guia.descripcion}
                </p>
                <div className="flex items-center gap-2 mt-2 flex-wrap">
                  <span className="inline-flex items-center gap-1 bg-bg-elevated px-2 py-0.5 rounded text-[10px] text-accent-gold">
                    <Book className="w-3 h-3" />
                    {guia.paginas_referencia}
                  </span>
                  <span className="inline-flex items-center gap-1 bg-bg-elevated px-2 py-0.5 rounded text-[10px] text-text-secondary">
                    <FileText className="w-3 h-3" />
                    PDF disponible
                  </span>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-border group-hover:text-accent transition-colors ml-3 flex-shrink-0" />
            </div>
          </Link>
        ))}
      </div>

      {/* Coming Soon */}
      <div className="mt-6 bg-bg-card/50 border border-border/50 border-dashed rounded-xl p-5 text-center">
        <p className="text-text-secondary text-sm">
          Semanas 7–8 — Próximamente
        </p>
        <p className="text-text-secondary/60 text-xs mt-1">
          Las guías restantes de la Parte 1 serán agregadas pronto
        </p>
      </div>
    </div>
  );
}

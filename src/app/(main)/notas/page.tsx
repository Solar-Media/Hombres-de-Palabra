import { FileText, User, BookMarked, Film } from "lucide-react";

const notasData = [
  {
    id: "1",
    titulo: "Sé Buena Tierra",
    orador: "Vicente Martínez",
    fecha: "2026-02-24",
    serie: "Semana 6 – Estudio de Lucas",
    texto_base: "Lucas 8:4-15",
    tema_central: "Sé Buena Tierra",
    pelicula: "Karate Kid (1984) — Ilustra disciplina, carácter, perseverancia y formación interior.",
    secciones: [
      {
        titulo: "1. ¿Qué es una Parábola?",
        contenido: "Las parábolas son historias que Jesús utilizaba para revelar verdades espirituales profundas, especialmente sobre el Reino de Dios.",
        puntos: [
          "Narraciones breves",
          "Comparaciones entre una historia ficticia y una verdad real",
          "Enseñanzas que usan metáforas y símiles",
          "Diseñadas para revelar una verdad importante",
        ],
      },
      {
        titulo: "2. Propósito de las Parábolas",
        contenido: "Jesús explica que las parábolas revelan la verdad a quienes tienen un corazón dispuesto, pero permanecen ocultas para quienes endurecen su corazón.",
        versiculos: ["Mateo 13:10-16", "Isaías 6:9-10"],
        puntos: [
          "Profecía sobre un pueblo que oye pero no entiende, ve pero no percibe",
          "Las parábolas examinan el corazón",
        ],
      },
      {
        titulo: "3. Parábola del Sembrador – Lucas 8:4-15",
        contenido: '"El que tiene oídos para oír, oiga." — Lucas 8:8',
        puntos: [
          "La pregunta no es si escuchamos…",
          "La pregunta es cómo escuchamos.",
        ],
      },
      {
        titulo: "4. Significado de la Parábola",
        contenido: "La Semilla es la Palabra de Dios, el mensaje de salvación. Los cuatro tipos de terreno representan diferentes tipos de corazones:",
        puntos: [
          "🚶 Junto al Camino — Escuchan superficialmente. No le dan importancia al mensaje. El enemigo arrebata la Palabra. Representa la obra del diablo que no quiere que sean salvos.",
          "🪨 Sobre la Roca — Reciben el mensaje con gozo. No permiten que eche raíces. No hay profundidad. No crecen espiritualmente. Abandonan cuando llegan pruebas.",
          "🌿 Entre Espinos — Escuchan el mensaje. Pero las preocupaciones, riquezas y placeres lo ahogan. Dios no ocupa el trono de su corazón. Las distracciones impiden el fruto.",
          "🌾 Buena Tierra — Reciben la Palabra con corazón abierto. Permiten que Dios reine en sus vidas. Tienen un corazón recto. Aman y obedecen a Dios. Perseveran. Dan fruto.",
        ],
      },
      {
        titulo: "5. ¿Qué es el Fruto?",
        contenido: "El fruto es la evidencia visible de una vida transformada por Jesús. Una persona transformada:",
        puntos: [
          "Vive para la gloria de Dios",
          "Persevera",
          "Comparte la Palabra",
          "Impacta a otros",
        ],
      },
      {
        titulo: "6. Preguntas de Reflexión",
        contenido: null,
        puntos: [
          "¿Estoy permitiendo que Dios reine en todas las áreas de mi vida?",
          "¿Vivo para Él y tomo tiempo para escuchar Su voz?",
          "¿Estoy sembrando y dando fruto para la gloria de Dios?",
        ],
      },
      {
        titulo: "7. Aplicación: ¿Cómo ser Buena Tierra?",
        contenido: "Se requiere: Carácter, Valentía, Disciplina, Obediencia, El carácter de Cristo.",
        puntos: [
          "Quién eres cuando nadie te ve",
          "La motivación interna de hacer lo correcto en todo tiempo",
          "Vivir conforme a la Palabra de Dios",
          "Reflejar la imagen de Dios",
          "Evidenciar la obra del Espíritu Santo en tu vida",
        ],
      },
    ],
    resumen: "La condición del corazón determina el fruto de la vida. La semilla es perfecta. El sembrador es fiel. La diferencia está en el terreno. La pregunta no es: ¿Recibo la Palabra? La pregunta es: ¿Soy buena tierra?",
  },
];

export default function NotasPage() {
  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
            <FileText className="w-5 h-5 text-accent" />
          </div>
          <div>
            <h1 className="font-[family-name:var(--font-heading)] text-xl md:text-2xl font-bold tracking-wide">
              Notas de Sermón
            </h1>
            <p className="text-text-secondary text-xs">
              Apuntes de cada sesión de estudio
            </p>
          </div>
        </div>
      </div>

      {/* Notes */}
      <div className="space-y-6">
        {notasData.map((nota) => (
          <div
            key={nota.id}
            className="bg-bg-card border border-border rounded-xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary/20 to-bg-card border-b border-border p-5">
              <div className="flex items-center gap-2 mb-1 flex-wrap">
                <span className="text-accent font-[family-name:var(--font-display)] text-xs font-semibold uppercase">
                  {nota.serie}
                </span>
                <span className="text-border text-xs">&bull;</span>
                <span className="text-text-secondary text-xs">
                  {new Date(nota.fecha).toLocaleDateString("es-MX", {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
              </div>
              <h2 className="font-[family-name:var(--font-heading)] font-bold text-xl mb-1">
                {nota.titulo}
              </h2>
              <div className="flex items-center gap-1.5 text-text-secondary text-sm">
                <User className="w-3.5 h-3.5" />
                {nota.orador}
              </div>

              {/* Texto base */}
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1 bg-primary/20 border border-border-accent/30 px-2.5 py-1 rounded-full text-xs text-accent">
                  <BookMarked className="w-3 h-3" />
                  {nota.texto_base}
                </span>
              </div>

              {/* Movie recommendation */}
              {nota.pelicula && (
                <div className="mt-3 flex items-start gap-2 bg-bg-elevated/50 rounded-lg p-2.5">
                  <Film className="w-4 h-4 text-accent-gold flex-shrink-0 mt-0.5" />
                  <p className="text-text-secondary text-xs">
                    <span className="text-accent-gold font-medium">🎬 Película recomendada:</span>{" "}
                    {nota.pelicula}
                  </p>
                </div>
              )}
            </div>

            {/* Content Sections */}
            <div className="p-5 space-y-5">
              {nota.secciones.map((seccion, i) => (
                <div key={i}>
                  <h3 className="font-[family-name:var(--font-heading)] text-sm font-bold text-accent mb-2">
                    {seccion.titulo}
                  </h3>
                  {seccion.contenido && (
                    <p className="text-text-secondary text-sm mb-2 leading-relaxed">
                      {seccion.contenido}
                    </p>
                  )}
                  {seccion.versiculos && (
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {seccion.versiculos.map((v, j) => (
                        <span key={j} className="bg-primary/15 border border-border-accent/20 px-2 py-0.5 rounded-full text-[11px] text-accent">
                          📖 {v}
                        </span>
                      ))}
                    </div>
                  )}
                  {seccion.puntos && (
                    <ul className="space-y-1.5">
                      {seccion.puntos.map((punto, j) => (
                        <li key={j} className="flex items-start gap-2 text-text-secondary text-sm">
                          <span className="text-accent mt-1 text-xs">•</span>
                          <span className="leading-relaxed">{punto}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}

              {/* Resumen Final */}
              {nota.resumen && (
                <div className="bg-gradient-to-r from-primary/10 to-bg-elevated border border-border-accent/20 rounded-xl p-4 mt-4">
                  <h3 className="font-[family-name:var(--font-heading)] text-sm font-bold text-accent-gold mb-2">
                    Resumen Final
                  </h3>
                  <p className="text-text-primary text-sm italic leading-relaxed">
                    {nota.resumen}
                  </p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

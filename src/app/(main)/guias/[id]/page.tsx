import { BookOpen, Book, ArrowLeft, MessageCircle } from "lucide-react";
import Link from "next/link";

// Demo data — will be replaced with Supabase query
const guiaDemo = {
  id: "1",
  titulo: "La Fe que Transforma",
  descripcion: "Estudio sobre cómo la fe genuina produce cambios reales en nuestra vida diaria.",
  libro_referencia: "Una Vida Más Que Maravillosa",
  paginas_referencia: "pp. 23-45",
  fecha_estudio: "2026-03-01",
  semana_numero: 1,
  serie_nombre: "Una Vida Más Que Maravillosa",
  contenido: `## Introducción

La fe no es simplemente creer algo en nuestra mente — es una convicción profunda que transforma cada área de nuestra vida. En este estudio, exploraremos lo que significa vivir por fe según las Escrituras.

## Lectura Bíblica

**Hebreos 11:1-6** — "Es, pues, la fe la certeza de lo que se espera, la convicción de lo que no se ve."

## Puntos Principales

### 1. La Fe es Certeza
La fe bíblica no es un salto al vacío. Es una confianza fundamentada en el carácter de Dios y en Sus promesas.

### 2. La Fe Produce Acción
Santiago 2:17 nos dice que "la fe, si no tiene obras, es muerta en sí misma." La fe genuina siempre se manifiesta en acciones.

### 3. La Fe Transforma Nuestra Perspectiva
Cuando caminamos por fe, vemos las circunstancias a través del lente de las promesas de Dios, no de nuestras limitaciones.

## Aplicación Práctica

- ¿En qué área de tu vida necesitas ejercitar más fe?
- ¿Cómo puedes demostrar tu fe con acciones esta semana?
- ¿Qué promesa de Dios necesitas recordar en este momento?`,
  notas: {
    titulo: "La Fe que Transforma — Notas del Estudio",
    orador: "Pastor Erick Zaldaña",
    versiculos_clave: ["Hebreos 11:1-6", "Santiago 2:17", "Romanos 10:17"],
    puntos_principales: [
      "La fe es certeza, no suposición",
      "La fe sin obras es muerta",
      "La fe viene por el oír la Palabra de Dios",
    ],
  },
  preguntas: [
    { tipo: "personal", pregunta: "¿Cuál es el área de tu vida donde más te cuesta confiar en Dios?" },
    { tipo: "personal", pregunta: "¿Qué promesa bíblica ha sostenido tu fe recientemente?" },
    { tipo: "grupal", pregunta: "¿Cómo podemos como grupo animarnos mutuamente a caminar por fe?" },
    { tipo: "grupal", pregunta: "¿Qué ejemplos de fe en la Biblia les inspiran más y por qué?" },
  ],
};

export default function GuiaDetailPage() {
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
            Semana {guiaDemo.semana_numero}
          </span>
          <span className="text-border text-xs">&bull;</span>
          <span className="text-text-secondary text-xs">
            {new Date(guiaDemo.fecha_estudio).toLocaleDateString("es-MX", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </span>
        </div>
        <h1 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl font-bold mb-2">
          {guiaDemo.titulo}
        </h1>
        <p className="text-text-secondary text-sm">{guiaDemo.descripcion}</p>
        <div className="flex items-center gap-2 mt-3">
          <span className="inline-flex items-center gap-1.5 bg-primary/20 border border-border-accent/30 px-3 py-1 rounded-full text-xs text-accent-gold">
            <Book className="w-3.5 h-3.5" />
            {guiaDemo.libro_referencia} — {guiaDemo.paginas_referencia}
          </span>
        </div>
      </div>

      {/* Content */}
      <article className="bg-bg-card border border-border rounded-xl p-5 md:p-8 mb-6 prose-invert">
        <div className="text-text-primary text-sm leading-relaxed whitespace-pre-wrap space-y-4">
          {guiaDemo.contenido.split('\n\n').map((paragraph, i) => {
            if (paragraph.startsWith('## ')) {
              return (
                <h2 key={i} className="font-[family-name:var(--font-heading)] text-lg font-bold text-accent mt-6 mb-2">
                  {paragraph.replace('## ', '')}
                </h2>
              );
            }
            if (paragraph.startsWith('### ')) {
              return (
                <h3 key={i} className="font-[family-name:var(--font-heading)] text-base font-semibold text-accent-gold mt-4 mb-1">
                  {paragraph.replace('### ', '')}
                </h3>
              );
            }
            if (paragraph.startsWith('- ')) {
              return (
                <ul key={i} className="list-disc list-inside space-y-1 text-text-secondary">
                  {paragraph.split('\n').map((line, j) => (
                    <li key={j}>{line.replace('- ', '')}</li>
                  ))}
                </ul>
              );
            }
            return (
              <p key={i} className="text-text-secondary">
                {paragraph.startsWith('**') ? (
                  <strong className="text-text-primary">{paragraph.replace(/\*\*/g, '')}</strong>
                ) : paragraph}
              </p>
            );
          })}
        </div>
      </article>

      {/* Sermon Notes */}
      <div className="bg-bg-card border border-border rounded-xl p-5 md:p-8 mb-6">
        <div className="flex items-center gap-2 mb-4">
          <BookOpen className="w-5 h-5 text-accent" />
          <h2 className="font-[family-name:var(--font-heading)] text-lg font-bold">
            Notas del Sermón
          </h2>
        </div>
        <p className="text-text-secondary text-xs mb-3">
          Orador: <span className="text-accent">{guiaDemo.notas.orador}</span>
        </p>

        {/* Key Verses */}
        <div className="mb-4">
          <h3 className="text-xs font-semibold text-accent-gold uppercase tracking-wider mb-2">
            Versículos Clave
          </h3>
          <div className="flex flex-wrap gap-2">
            {guiaDemo.notas.versiculos_clave.map((v, i) => (
              <span key={i} className="bg-primary/20 border border-border-accent/30 px-2.5 py-1 rounded-full text-xs text-accent">
                {v}
              </span>
            ))}
          </div>
        </div>

        {/* Main Points */}
        <div>
          <h3 className="text-xs font-semibold text-accent-gold uppercase tracking-wider mb-2">
            Puntos Principales
          </h3>
          <ul className="space-y-2">
            {guiaDemo.notas.puntos_principales.map((punto, i) => (
              <li key={i} className="flex items-start gap-2 text-text-secondary text-sm">
                <span className="text-accent font-bold mt-0.5">{i + 1}.</span>
                {punto}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Discussion Questions */}
      <div className="bg-bg-card border border-border rounded-xl p-5 md:p-8">
        <div className="flex items-center gap-2 mb-4">
          <MessageCircle className="w-5 h-5 text-accent" />
          <h2 className="font-[family-name:var(--font-heading)] text-lg font-bold">
            Preguntas de Discusión
          </h2>
        </div>

        {/* Personal Questions */}
        <div className="mb-6">
          <h3 className="text-xs font-semibold text-accent uppercase tracking-wider mb-3">
            Reflexión Personal
          </h3>
          <div className="space-y-3">
            {guiaDemo.preguntas
              .filter((p) => p.tipo === "personal")
              .map((p, i) => (
                <div key={i} className="bg-bg-elevated border border-border rounded-lg p-3">
                  <p className="text-text-primary text-sm">{p.pregunta}</p>
                </div>
              ))}
          </div>
        </div>

        {/* Group Questions */}
        <div>
          <h3 className="text-xs font-semibold text-accent-gold uppercase tracking-wider mb-3">
            Discusión en Grupo
          </h3>
          <div className="space-y-3">
            {guiaDemo.preguntas
              .filter((p) => p.tipo === "grupal")
              .map((p, i) => (
                <div key={i} className="bg-bg-elevated border border-border rounded-lg p-3">
                  <p className="text-text-primary text-sm">{p.pregunta}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

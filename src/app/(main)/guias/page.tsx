import { BookOpen, ChevronRight, Book } from "lucide-react";
import Link from "next/link";

// Demo data — will be replaced with Supabase queries
const guiasDemo = [
  {
    id: "1",
    titulo: "La Fe que Transforma",
    descripcion: "Estudio sobre cómo la fe genuina produce cambios reales en nuestra vida diaria.",
    libro_referencia: "Una Vida Más Que Maravillosa",
    paginas_referencia: "pp. 23-45",
    fecha_estudio: "2026-03-01",
    semana_numero: 1,
    serie_nombre: "Una Vida Más Que Maravillosa",
  },
  {
    id: "2",
    titulo: "El Poder del Amor",
    descripcion: "Descubriendo el amor incondicional de Dios y cómo reflejarlo en nuestras relaciones.",
    libro_referencia: "Una Vida Más Que Maravillosa",
    paginas_referencia: "pp. 46-68",
    fecha_estudio: "2026-03-08",
    semana_numero: 2,
    serie_nombre: "Una Vida Más Que Maravillosa",
  },
  {
    id: "3",
    titulo: "Gozo en Medio de las Pruebas",
    descripcion: "Aprendiendo a encontrar gozo verdadero incluso en los momentos más difíciles.",
    libro_referencia: "Una Vida Más Que Maravillosa",
    paginas_referencia: "pp. 69-91",
    fecha_estudio: "2026-03-15",
    semana_numero: 3,
    serie_nombre: "Una Vida Más Que Maravillosa",
  },
];

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

      {/* Current Series Banner */}
      <div className="bg-gradient-to-r from-primary/20 to-bg-card border border-border-accent/30 rounded-xl p-5 mb-6">
        <p className="text-accent text-xs font-[family-name:var(--font-display)] uppercase tracking-wider mb-1">
          Serie Actual
        </p>
        <h2 className="font-[family-name:var(--font-heading)] text-lg font-semibold mb-1">
          Una Vida Más Que Maravillosa
        </h2>
        <div className="flex items-center gap-2 text-text-secondary text-xs">
          <Book className="w-3.5 h-3.5" />
          <span>Dr. David Jeremiah</span>
        </div>
      </div>

      {/* Guides List */}
      <div className="space-y-3">
        {guiasDemo.map((guia) => (
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
                    {new Date(guia.fecha_estudio).toLocaleDateString("es-MX", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </span>
                </div>
                <h3 className="font-[family-name:var(--font-heading)] font-semibold text-sm mb-1">
                  {guia.titulo}
                </h3>
                <p className="text-text-secondary text-xs line-clamp-2">
                  {guia.descripcion}
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="inline-flex items-center gap-1 bg-bg-elevated px-2 py-0.5 rounded text-[10px] text-accent-gold">
                    <Book className="w-3 h-3" />
                    {guia.paginas_referencia}
                  </span>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-border group-hover:text-accent transition-colors ml-3 flex-shrink-0" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

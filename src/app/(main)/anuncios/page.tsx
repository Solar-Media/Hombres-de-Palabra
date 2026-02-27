import { Megaphone, AlertTriangle, Info } from "lucide-react";

const anunciosDemo = [
  {
    id: "1",
    titulo: "Nuevo Horario de Estudio Bíblico",
    contenido: "A partir de marzo, nuestro estudio bíblico semanal será los sábados a las 9:00 AM. ¡Los esperamos!",
    prioridad: "importante" as const,
    fecha_publicacion: "2026-02-25T10:00:00Z",
  },
  {
    id: "2",
    titulo: "Inscripciones Abiertas — Retiro de Hombres 2026",
    contenido: "Ya están abiertas las inscripciones para nuestro retiro anual de hombres. Será del 10 al 12 de abril en Pine Valley. El costo es de $75 por persona e incluye hospedaje, comidas y todas las actividades. Habla con tu líder de grupo para más información.",
    prioridad: "urgente" as const,
    fecha_publicacion: "2026-02-20T08:00:00Z",
  },
  {
    id: "3",
    titulo: "Materiales de Estudio Disponibles",
    contenido: "Los libros 'Una Vida Más Que Maravillosa' ya están disponibles en la mesa de recursos después del servicio. El costo es de $15.",
    prioridad: "normal" as const,
    fecha_publicacion: "2026-02-18T12:00:00Z",
  },
];

const prioridadConfig = {
  urgente: { color: "text-error", bg: "bg-error/20", border: "border-error/30", icon: AlertTriangle, label: "Urgente" },
  importante: { color: "text-accent", bg: "bg-accent/20", border: "border-accent/30", icon: Info, label: "Importante" },
  normal: { color: "text-text-secondary", bg: "bg-bg-elevated", border: "border-border", icon: Megaphone, label: "Anuncio" },
};

export default function AnunciosPage() {
  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
            <Megaphone className="w-5 h-5 text-accent" />
          </div>
          <div>
            <h1 className="font-[family-name:var(--font-heading)] text-xl md:text-2xl font-bold tracking-wide">
              Anuncios
            </h1>
            <p className="text-text-secondary text-xs">
              Noticias importantes del ministerio
            </p>
          </div>
        </div>
      </div>

      {/* Announcements */}
      <div className="space-y-4">
        {anunciosDemo.map((anuncio) => {
          const config = prioridadConfig[anuncio.prioridad];
          const Icon = config.icon;
          return (
            <div
              key={anuncio.id}
              className={`bg-bg-card border ${config.border} rounded-xl p-5 transition-all`}
            >
              <div className="flex items-center gap-2 mb-2">
                <span className={`inline-flex items-center gap-1 ${config.bg} ${config.color} px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase`}>
                  <Icon className="w-3 h-3" />
                  {config.label}
                </span>
                <span className="text-text-secondary text-[10px]">
                  {new Date(anuncio.fecha_publicacion).toLocaleDateString("es-MX", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
              </div>
              <h2 className="font-[family-name:var(--font-heading)] font-bold text-base mb-2">
                {anuncio.titulo}
              </h2>
              <p className="text-text-secondary text-sm leading-relaxed">
                {anuncio.contenido}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

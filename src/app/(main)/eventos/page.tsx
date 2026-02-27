import { Calendar, MapPin, Clock } from "lucide-react";

const eventosDemo = [
  {
    id: "1",
    titulo: "Estudio Bíblico Semanal",
    descripcion: "Estudio del libro 'Una Vida Más Que Maravillosa' del Dr. David Jeremiah. Todos los hombres son bienvenidos.",
    fecha_inicio: "2026-03-01T09:00:00-08:00",
    fecha_fin: "2026-03-01T11:00:00-08:00",
    ubicacion: "Shadow Mountain Community Church",
    direccion: "2100 Greenfield Dr, El Cajon, CA 92019",
    es_recurrente: true,
  },
  {
    id: "2",
    titulo: "Desayuno de Hombres",
    descripcion: "Un tiempo de compañerismo y comunión entre hermanos. Desayuno incluido. Traigan a un amigo.",
    fecha_inicio: "2026-03-15T08:00:00-08:00",
    fecha_fin: "2026-03-15T10:00:00-08:00",
    ubicacion: "Salón Fellowship",
    direccion: "Shadow Mountain Community Church",
    es_recurrente: false,
  },
  {
    id: "3",
    titulo: "Retiro de Hombres 2026",
    descripcion: "Un fin de semana para crecer en nuestra fe, fortalecer relaciones y buscar a Dios. Incluye hospedaje, comidas y actividades.",
    fecha_inicio: "2026-04-10T16:00:00-08:00",
    fecha_fin: "2026-04-12T12:00:00-08:00",
    ubicacion: "Pine Valley Bible Conference Center",
    direccion: "Pine Valley, CA",
    es_recurrente: false,
  },
];

export default function EventosPage() {
  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
            <Calendar className="w-5 h-5 text-accent" />
          </div>
          <div>
            <h1 className="font-[family-name:var(--font-heading)] text-xl md:text-2xl font-bold tracking-wide">
              Eventos
            </h1>
            <p className="text-text-secondary text-xs">
              Próximas actividades del ministerio
            </p>
          </div>
        </div>
      </div>

      {/* Events */}
      <div className="space-y-4">
        {eventosDemo.map((evento) => {
          const fechaInicio = new Date(evento.fecha_inicio);
          const fechaFin = evento.fecha_fin ? new Date(evento.fecha_fin) : null;
          const esMultiDia = fechaFin && fechaFin.getDate() !== fechaInicio.getDate();

          return (
            <div
              key={evento.id}
              className="bg-bg-card border border-border rounded-xl overflow-hidden transition-all hover:border-border-accent/50"
            >
              {/* Date strip */}
              <div className="bg-primary/20 border-b border-border-accent/30 px-5 py-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="text-center">
                    <div className="text-accent font-[family-name:var(--font-display)] text-2xl font-bold leading-none">
                      {fechaInicio.getDate()}
                    </div>
                    <div className="text-accent-gold text-[10px] uppercase font-semibold">
                      {fechaInicio.toLocaleDateString("es-MX", { month: "short" })}
                    </div>
                  </div>
                  {esMultiDia && fechaFin && (
                    <>
                      <span className="text-border">—</span>
                      <div className="text-center">
                        <div className="text-accent font-[family-name:var(--font-display)] text-2xl font-bold leading-none">
                          {fechaFin.getDate()}
                        </div>
                        <div className="text-accent-gold text-[10px] uppercase font-semibold">
                          {fechaFin.toLocaleDateString("es-MX", { month: "short" })}
                        </div>
                      </div>
                    </>
                  )}
                </div>
                {evento.es_recurrente && (
                  <span className="text-[10px] bg-accent-gold/20 text-accent-gold px-2 py-0.5 rounded-full font-medium">
                    Recurrente
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-5">
                <h2 className="font-[family-name:var(--font-heading)] font-bold text-base mb-1">
                  {evento.titulo}
                </h2>
                <p className="text-text-secondary text-sm mb-3">{evento.descripcion}</p>

                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 text-text-secondary text-xs">
                    <Clock className="w-3.5 h-3.5 text-accent" />
                    {fechaInicio.toLocaleTimeString("es-MX", {
                      hour: "numeric",
                      minute: "2-digit",
                      hour12: true,
                    })}
                    {fechaFin && !esMultiDia && (
                      <>
                        {" — "}
                        {fechaFin.toLocaleTimeString("es-MX", {
                          hour: "numeric",
                          minute: "2-digit",
                          hour12: true,
                        })}
                      </>
                    )}
                  </div>
                  {evento.ubicacion && (
                    <div className="flex items-center gap-2 text-text-secondary text-xs">
                      <MapPin className="w-3.5 h-3.5 text-accent" />
                      {evento.ubicacion}
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

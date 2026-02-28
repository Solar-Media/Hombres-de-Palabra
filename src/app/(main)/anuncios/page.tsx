import Image from "next/image";
import { Megaphone, Calendar, MapPin, Clock, DollarSign } from "lucide-react";

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

      {/* Futbol y Carne Asada Announcement */}
      <div className="bg-bg-card border border-border rounded-xl overflow-hidden">
        {/* Event Image */}
        <div className="relative w-full">
          <Image
            src="/eventos/futbol-carne-asada.png"
            alt="Fútbol y Carne Asada — Hombres de Palabra"
            width={1920}
            height={1080}
            className="w-full h-auto"
            priority
          />
        </div>

        {/* Event Details */}
        <div className="p-5">
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-flex items-center gap-1 bg-accent/20 text-accent px-2 py-0.5 rounded-full text-[10px] font-semibold uppercase">
              Evento
            </span>
          </div>

          <h2 className="font-[family-name:var(--font-heading)] font-bold text-lg mb-3">
            Fútbol y Carne Asada para Hombres
          </h2>

          <div className="space-y-2">
            <div className="flex items-center gap-2.5 text-text-secondary text-sm">
              <Calendar className="w-4 h-4 text-accent flex-shrink-0" />
              <span>Sábado 28 de Marzo</span>
            </div>
            <div className="flex items-center gap-2.5 text-text-secondary text-sm">
              <Clock className="w-4 h-4 text-accent flex-shrink-0" />
              <span>9:00 A.M.</span>
            </div>
            <div className="flex items-center gap-2.5 text-text-secondary text-sm">
              <DollarSign className="w-4 h-4 text-accent flex-shrink-0" />
              <span>$10 dólares</span>
            </div>
            <div className="flex items-center gap-2.5 text-text-secondary text-sm">
              <MapPin className="w-4 h-4 text-accent flex-shrink-0" />
              <span>Canchas — Campus El Cajón</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

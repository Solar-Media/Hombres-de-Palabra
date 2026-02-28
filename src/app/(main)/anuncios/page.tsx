import { Megaphone } from "lucide-react";

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

      {/* Por actualizarse */}
      <div className="bg-bg-card border border-border border-dashed rounded-xl p-8 text-center">
        <Megaphone className="w-10 h-10 text-text-secondary/30 mx-auto mb-3" />
        <p className="text-text-secondary text-base font-medium">
          Por actualizarse
        </p>
        <p className="text-text-secondary/60 text-xs mt-1">
          Los anuncios del ministerio serán publicados aquí próximamente
        </p>
      </div>
    </div>
  );
}

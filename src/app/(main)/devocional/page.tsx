import { Sun, BookMarked, Heart, Lightbulb, Wrench } from "lucide-react";

const devocionalDemo = {
  fecha: "2026-02-27",
  versiculo: {
    cita: "Josué 1:9",
    texto: "Mira que te mando que te esfuerces y seas valiente; no temas ni desmayes, porque Jehová tu Dios estará contigo en dondequiera que vayas.",
  },
  devocional: {
    titulo: "Valentía que Viene de Dios",
    contenido: "Ser valiente no significa que no sentimos miedo. Significa que avanzamos a pesar del miedo porque confiamos en que Dios va con nosotros. Como hombres de fe, enfrentamos desafíos en el trabajo, en la familia y en nuestra vida espiritual. Pero la promesa de Dios es clara: Él estará con nosotros dondequiera que vayamos.\n\nHoy, sin importar lo que enfrentes, recuerda que no estás solo. El mismo Dios que estuvo con Josué cuando entró a la tierra prometida está contigo ahora. Esfuérzate y sé valiente.",
    categoria: "hombres",
    versiculo_referencia: "Josué 1:9",
  },
  mensaje_animo: "Hermano, Dios no te trajo hasta aquí para dejarte. Él es fiel y Su plan para tu vida es bueno. ¡Ánimo!",
  tip: {
    categoria: "salud",
    titulo: "Cuida Tu Cuerpo — Templo del Espíritu",
    contenido: "Beber al menos 8 vasos de agua al día mejora tu energía, concentración y salud general. Tu cuerpo es templo del Espíritu Santo — cuídalo bien.",
  },
};

const categoriaIcons: Record<string, string> = {
  auto: "🚗",
  cocina: "🍳",
  salud: "💪",
  organizacion: "📋",
  hogar: "🏠",
  general: "💡",
};

export default function DevocionalPage() {
  return (
    <div className="max-w-3xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
            <Sun className="w-5 h-5 text-accent" />
          </div>
          <div>
            <h1 className="font-[family-name:var(--font-heading)] text-xl md:text-2xl font-bold tracking-wide">
              Devocional del Día
            </h1>
            <p className="text-text-secondary text-xs">
              {new Date(devocionalDemo.fecha).toLocaleDateString("es-MX", {
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>
          </div>
        </div>
      </div>

      {/* Verse of the Day */}
      <div className="bg-gradient-to-br from-primary/20 via-bg-card to-bg-card border border-border-accent/30 rounded-xl p-6 mb-4 text-center">
        <div className="flex items-center justify-center gap-2 mb-3">
          <BookMarked className="w-4 h-4 text-accent-gold" />
          <span className="text-accent-gold font-[family-name:var(--font-heading)] text-xs tracking-widest uppercase">
            Versículo del Día
          </span>
        </div>
        <p className="text-text-primary text-base md:text-lg italic leading-relaxed mb-3">
          &ldquo;{devocionalDemo.versiculo.texto}&rdquo;
        </p>
        <p className="text-accent font-[family-name:var(--font-heading)] text-sm font-semibold">
          — {devocionalDemo.versiculo.cita}
        </p>
      </div>

      {/* Daily Devotional */}
      <div className="bg-bg-card border border-border rounded-xl p-6 mb-4">
        <div className="flex items-center gap-2 mb-3">
          <Sun className="w-4 h-4 text-accent" />
          <span className="text-accent font-[family-name:var(--font-display)] text-xs tracking-wider uppercase font-semibold">
            Devocional
          </span>
        </div>
        <h2 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-3">
          {devocionalDemo.devocional.titulo}
        </h2>
        <div className="text-text-secondary text-sm leading-relaxed space-y-3">
          {devocionalDemo.devocional.contenido.split('\n\n').map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>

      {/* Daily Encouragement */}
      <div className="bg-gradient-to-r from-accent/10 to-bg-card border border-accent/20 rounded-xl p-5 mb-4">
        <div className="flex items-center gap-2 mb-2">
          <Heart className="w-4 h-4 text-accent" />
          <span className="text-accent font-[family-name:var(--font-display)] text-xs tracking-wider uppercase font-semibold">
            Mensaje de Ánimo
          </span>
        </div>
        <p className="text-text-primary text-sm italic leading-relaxed">
          {devocionalDemo.mensaje_animo}
        </p>
      </div>

      {/* Daily Tip */}
      <div className="bg-bg-card border border-border rounded-xl p-5">
        <div className="flex items-center gap-2 mb-2">
          <Wrench className="w-4 h-4 text-accent-gold" />
          <span className="text-accent-gold font-[family-name:var(--font-display)] text-xs tracking-wider uppercase font-semibold">
            Tip del Día — {categoriaIcons[devocionalDemo.tip.categoria]} {devocionalDemo.tip.categoria.charAt(0).toUpperCase() + devocionalDemo.tip.categoria.slice(1)}
          </span>
        </div>
        <h3 className="font-[family-name:var(--font-heading)] text-sm font-semibold mb-2">
          {devocionalDemo.tip.titulo}
        </h3>
        <p className="text-text-secondary text-sm leading-relaxed">
          {devocionalDemo.tip.contenido}
        </p>
      </div>
    </div>
  );
}

import { FileText, User, BookMarked } from "lucide-react";

const notasDemo = [
  {
    id: "1",
    titulo: "La Fe que Transforma",
    orador: "Pastor Erick Zaldaña",
    fecha: "2026-03-01",
    versiculos_clave: ["Hebreos 11:1-6", "Santiago 2:17"],
    puntos_principales: [
      "La fe es certeza, no suposición",
      "La fe sin obras es muerta",
      "La fe viene por el oír la Palabra de Dios",
    ],
    contenido: "La fe bíblica no es un sentimiento pasajero ni una simple creencia intelectual. Es una convicción profunda que se ancla en el carácter inmutable de Dios. Cuando Hebreos 11:1 dice que la fe es la 'certeza de lo que se espera', nos habla de una confianza firme basada en las promesas de Dios.",
  },
  {
    id: "2",
    titulo: "El Poder del Amor Ágape",
    orador: "Pastor Erick Zaldaña",
    fecha: "2026-03-08",
    versiculos_clave: ["1 Corintios 13:4-7", "Juan 3:16"],
    puntos_principales: [
      "El amor ágape es un amor de decisión, no de emoción",
      "Dios demostró Su amor en la cruz",
      "Estamos llamados a amar como Cristo nos amó",
    ],
    contenido: "El amor que Dios nos llama a vivir no es un amor romántico ni sentimental. Es el amor ágape — un amor sacrificial que decide amar incluso cuando no es fácil. Este es el amor que Dios demostró al enviar a Su Hijo.",
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

      {/* Notes List */}
      <div className="space-y-4">
        {notasDemo.map((nota) => (
          <div
            key={nota.id}
            className="bg-bg-card border border-border rounded-xl p-5 transition-all hover:border-border-accent/50"
          >
            {/* Header */}
            <div className="flex items-center gap-2 mb-1">
              <span className="text-text-secondary text-xs">
                {new Date(nota.fecha).toLocaleDateString("es-MX", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
            </div>
            <h2 className="font-[family-name:var(--font-heading)] font-bold text-base mb-1">
              {nota.titulo}
            </h2>
            <div className="flex items-center gap-1.5 text-text-secondary text-xs mb-3">
              <User className="w-3 h-3" />
              {nota.orador}
            </div>

            {/* Content Preview */}
            <p className="text-text-secondary text-sm mb-4 line-clamp-3">
              {nota.contenido}
            </p>

            {/* Key Verses */}
            <div className="flex flex-wrap gap-2 mb-3">
              {nota.versiculos_clave.map((v, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1 bg-primary/20 border border-border-accent/30 px-2 py-0.5 rounded-full text-[11px] text-accent"
                >
                  <BookMarked className="w-3 h-3" />
                  {v}
                </span>
              ))}
            </div>

            {/* Main Points */}
            <div className="bg-bg-elevated rounded-lg p-3">
              <h3 className="text-[10px] font-semibold text-accent-gold uppercase tracking-wider mb-2">
                Puntos Principales
              </h3>
              <ul className="space-y-1">
                {nota.puntos_principales.map((punto, i) => (
                  <li key={i} className="text-text-secondary text-xs flex items-start gap-2">
                    <span className="text-accent font-bold">{i + 1}.</span>
                    {punto}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

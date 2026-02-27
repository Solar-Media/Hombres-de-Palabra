"use client";

import { Heart, Plus, User, Clock } from "lucide-react";
import { useState } from "react";

const peticionesDemo = [
  {
    id: "1",
    contenido: "Por favor oren por mi familia. Estamos pasando por un momento difícil económicamente y necesitamos la provisión de Dios.",
    es_anonima: false,
    estado: "activa" as const,
    created_at: "2026-02-25T10:00:00Z",
    autor: { nombre: "Carlos", apellido: "M." },
  },
  {
    id: "2",
    contenido: "Pido oración por mi salud. Tengo una cirugía programada para la próxima semana.",
    es_anonima: true,
    estado: "activa" as const,
    created_at: "2026-02-26T14:30:00Z",
    autor: null,
  },
  {
    id: "3",
    contenido: "Oren por mi hijo que está alejado del Señor. Que Dios toque su corazón y lo traiga de regreso.",
    es_anonima: false,
    estado: "activa" as const,
    created_at: "2026-02-27T08:00:00Z",
    autor: { nombre: "Miguel", apellido: "R." },
  },
];

export default function OracionPage() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div>
      {/* Header */}
      <div className="mb-8 flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
            <Heart className="w-5 h-5 text-accent" />
          </div>
          <div>
            <h1 className="font-[family-name:var(--font-heading)] text-xl md:text-2xl font-bold tracking-wide">
              Peticiones de Oración
            </h1>
            <p className="text-text-secondary text-xs">
              Oramos los unos por los otros
            </p>
          </div>
        </div>
        <button
          onClick={() => setShowForm(!showForm)}
          className="flex items-center gap-1.5 bg-primary hover:bg-primary-light text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
        >
          <Plus className="w-4 h-4" />
          <span className="hidden sm:inline">Nueva Petición</span>
        </button>
      </div>

      {/* New Prayer Request Form */}
      {showForm && (
        <div className="bg-bg-card border border-border-accent/50 rounded-xl p-5 mb-6">
          <h2 className="font-[family-name:var(--font-heading)] font-semibold text-sm mb-4">
            Nueva Petición de Oración
          </h2>
          <form className="space-y-4">
            <div>
              <textarea
                placeholder="Escribe tu petición de oración aquí..."
                rows={4}
                className="w-full bg-bg-elevated border border-border rounded-lg px-4 py-3 text-sm text-text-primary placeholder-text-secondary/50 focus:outline-none focus:border-accent resize-none"
              />
            </div>
            <div className="flex items-center gap-3">
              <label className="flex items-center gap-2 text-sm text-text-secondary cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-border accent-primary"
                />
                Publicar como anónima
              </label>
            </div>
            <div className="flex gap-3">
              <button
                type="submit"
                className="bg-primary hover:bg-primary-light text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                Enviar Petición
              </button>
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="bg-bg-elevated hover:bg-border text-text-secondary px-6 py-2 rounded-lg text-sm transition-colors"
              >
                Cancelar
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Scripture */}
      <div className="bg-gradient-to-r from-primary/10 to-bg-card border border-border-accent/20 rounded-xl p-4 mb-6 text-center">
        <p className="text-accent italic text-sm">
          &ldquo;Confesaos vuestras ofensas unos a otros, y orad unos por otros, para que seáis sanados.&rdquo;
        </p>
        <p className="text-accent-gold text-xs mt-1 font-[family-name:var(--font-heading)]">
          Santiago 5:16
        </p>
      </div>

      {/* Prayer Requests List */}
      <div className="space-y-3">
        {peticionesDemo.map((peticion) => (
          <div
            key={peticion.id}
            className="bg-bg-card border border-border rounded-xl p-4 transition-all hover:border-border-accent/30"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-primary/20 flex items-center justify-center">
                  <User className="w-3.5 h-3.5 text-accent" />
                </div>
                <span className="text-text-primary text-sm font-medium">
                  {peticion.es_anonima
                    ? "Anónimo"
                    : `${peticion.autor?.nombre} ${peticion.autor?.apellido}`}
                </span>
              </div>
              <div className="flex items-center gap-1 text-text-secondary text-[10px]">
                <Clock className="w-3 h-3" />
                {new Date(peticion.created_at).toLocaleDateString("es-MX", {
                  day: "numeric",
                  month: "short",
                })}
              </div>
            </div>
            <p className="text-text-secondary text-sm leading-relaxed">
              {peticion.contenido}
            </p>
            <div className="mt-3 flex items-center gap-2">
              <button className="flex items-center gap-1 text-xs text-text-secondary hover:text-accent transition-colors">
                <Heart className="w-3.5 h-3.5" />
                Orar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

"use client";

import { ArrowLeft, BookOpen, Save } from "lucide-react";
import Link from "next/link";

export default function NuevaGuiaPage() {
  return (
    <div className="min-h-screen bg-bg-primary">
      <div className="max-w-3xl mx-auto px-4 py-8">
        <Link
          href="/admin"
          className="inline-flex items-center gap-1.5 text-text-secondary hover:text-accent text-sm mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver al Panel
        </Link>

        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
            <BookOpen className="w-5 h-5 text-accent" />
          </div>
          <h1 className="font-[family-name:var(--font-heading)] text-xl font-bold tracking-wide">
            Nueva Guía de Estudio
          </h1>
        </div>

        <form className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-text-secondary text-xs font-medium mb-1.5">
                Nombre de la Serie
              </label>
              <input
                type="text"
                placeholder="Ej: Una Vida Más Que Maravillosa"
                className="w-full bg-bg-card border border-border rounded-lg px-4 py-2.5 text-sm text-text-primary placeholder-text-secondary/50 focus:outline-none focus:border-accent"
              />
            </div>
            <div>
              <label className="block text-text-secondary text-xs font-medium mb-1.5">
                Número de Semana
              </label>
              <input
                type="number"
                placeholder="Ej: 1"
                className="w-full bg-bg-card border border-border rounded-lg px-4 py-2.5 text-sm text-text-primary placeholder-text-secondary/50 focus:outline-none focus:border-accent"
              />
            </div>
          </div>

          <div>
            <label className="block text-text-secondary text-xs font-medium mb-1.5">
              Título de la Guía
            </label>
            <input
              type="text"
              placeholder="Ej: La Fe que Transforma"
              className="w-full bg-bg-card border border-border rounded-lg px-4 py-2.5 text-sm text-text-primary placeholder-text-secondary/50 focus:outline-none focus:border-accent"
            />
          </div>

          <div>
            <label className="block text-text-secondary text-xs font-medium mb-1.5">
              Descripción
            </label>
            <textarea
              rows={2}
              placeholder="Breve descripción del estudio..."
              className="w-full bg-bg-card border border-border rounded-lg px-4 py-2.5 text-sm text-text-primary placeholder-text-secondary/50 focus:outline-none focus:border-accent resize-none"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-text-secondary text-xs font-medium mb-1.5">
                Libro de Referencia
              </label>
              <input
                type="text"
                placeholder="Ej: Una Vida Más Que Maravillosa"
                className="w-full bg-bg-card border border-border rounded-lg px-4 py-2.5 text-sm text-text-primary placeholder-text-secondary/50 focus:outline-none focus:border-accent"
              />
            </div>
            <div>
              <label className="block text-text-secondary text-xs font-medium mb-1.5">
                Páginas de Referencia
              </label>
              <input
                type="text"
                placeholder="Ej: pp. 23-45"
                className="w-full bg-bg-card border border-border rounded-lg px-4 py-2.5 text-sm text-text-primary placeholder-text-secondary/50 focus:outline-none focus:border-accent"
              />
            </div>
          </div>

          <div>
            <label className="block text-text-secondary text-xs font-medium mb-1.5">
              Fecha del Estudio
            </label>
            <input
              type="date"
              className="w-full bg-bg-card border border-border rounded-lg px-4 py-2.5 text-sm text-text-primary focus:outline-none focus:border-accent"
            />
          </div>

          <div>
            <label className="block text-text-secondary text-xs font-medium mb-1.5">
              Contenido de la Guía
            </label>
            <textarea
              rows={12}
              placeholder="Escribe el contenido del estudio aquí. Puedes usar formato Markdown."
              className="w-full bg-bg-card border border-border rounded-lg px-4 py-2.5 text-sm text-text-primary placeholder-text-secondary/50 focus:outline-none focus:border-accent resize-y"
            />
          </div>

          <button
            type="submit"
            className="flex items-center gap-2 bg-primary hover:bg-primary-light text-white px-6 py-2.5 rounded-lg text-sm font-medium transition-colors"
          >
            <Save className="w-4 h-4" />
            Guardar Guía
          </button>
        </form>
      </div>
    </div>
  );
}

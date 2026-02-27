"use client";
import { ArrowLeft, FileText, Save } from "lucide-react";
import Link from "next/link";

export default function NuevaNotaPage() {
  return (
    <div className="min-h-screen bg-bg-primary">
      <div className="max-w-3xl mx-auto px-4 py-8">
        <Link href="/admin" className="inline-flex items-center gap-1.5 text-text-secondary hover:text-accent text-sm mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Volver al Panel
        </Link>
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
            <FileText className="w-5 h-5 text-accent" />
          </div>
          <h1 className="font-[family-name:var(--font-heading)] text-xl font-bold tracking-wide">Nuevas Notas de Sermón</h1>
        </div>
        <form className="space-y-5">
          <div>
            <label className="block text-text-secondary text-xs font-medium mb-1.5">Título</label>
            <input type="text" placeholder="Título del sermón" className="w-full bg-bg-card border border-border rounded-lg px-4 py-2.5 text-sm text-text-primary placeholder-text-secondary/50 focus:outline-none focus:border-accent" />
          </div>
          <div>
            <label className="block text-text-secondary text-xs font-medium mb-1.5">Orador</label>
            <input type="text" placeholder="Nombre del orador" className="w-full bg-bg-card border border-border rounded-lg px-4 py-2.5 text-sm text-text-primary placeholder-text-secondary/50 focus:outline-none focus:border-accent" />
          </div>
          <div>
            <label className="block text-text-secondary text-xs font-medium mb-1.5">Fecha</label>
            <input type="date" className="w-full bg-bg-card border border-border rounded-lg px-4 py-2.5 text-sm text-text-primary focus:outline-none focus:border-accent" />
          </div>
          <div>
            <label className="block text-text-secondary text-xs font-medium mb-1.5">Versículos Clave (separados por coma)</label>
            <input type="text" placeholder="Ej: Juan 3:16, Romanos 8:28" className="w-full bg-bg-card border border-border rounded-lg px-4 py-2.5 text-sm text-text-primary placeholder-text-secondary/50 focus:outline-none focus:border-accent" />
          </div>
          <div>
            <label className="block text-text-secondary text-xs font-medium mb-1.5">Contenido de las Notas</label>
            <textarea rows={10} placeholder="Escribe las notas del sermón aquí..." className="w-full bg-bg-card border border-border rounded-lg px-4 py-2.5 text-sm text-text-primary placeholder-text-secondary/50 focus:outline-none focus:border-accent resize-y" />
          </div>
          <button type="submit" className="flex items-center gap-2 bg-primary hover:bg-primary-light text-white px-6 py-2.5 rounded-lg text-sm font-medium transition-colors">
            <Save className="w-4 h-4" /> Guardar Notas
          </button>
        </form>
      </div>
    </div>
  );
}

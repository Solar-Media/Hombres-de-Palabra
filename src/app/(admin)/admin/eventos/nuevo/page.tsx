"use client";
import { ArrowLeft, Calendar, Save } from "lucide-react";
import Link from "next/link";

export default function NuevoEventoPage() {
  return (
    <div className="min-h-screen bg-bg-primary">
      <div className="max-w-3xl mx-auto px-4 py-8">
        <Link href="/admin" className="inline-flex items-center gap-1.5 text-text-secondary hover:text-accent text-sm mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Volver al Panel
        </Link>
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
            <Calendar className="w-5 h-5 text-accent" />
          </div>
          <h1 className="font-[family-name:var(--font-heading)] text-xl font-bold tracking-wide">Nuevo Evento</h1>
        </div>
        <form className="space-y-5">
          <div>
            <label className="block text-text-secondary text-xs font-medium mb-1.5">Título del Evento</label>
            <input type="text" placeholder="Nombre del evento" className="w-full bg-bg-card border border-border rounded-lg px-4 py-2.5 text-sm text-text-primary placeholder-text-secondary/50 focus:outline-none focus:border-accent" />
          </div>
          <div>
            <label className="block text-text-secondary text-xs font-medium mb-1.5">Descripción</label>
            <textarea rows={3} placeholder="Describe el evento..." className="w-full bg-bg-card border border-border rounded-lg px-4 py-2.5 text-sm text-text-primary placeholder-text-secondary/50 focus:outline-none focus:border-accent resize-none" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-text-secondary text-xs font-medium mb-1.5">Fecha y Hora de Inicio</label>
              <input type="datetime-local" className="w-full bg-bg-card border border-border rounded-lg px-4 py-2.5 text-sm text-text-primary focus:outline-none focus:border-accent" />
            </div>
            <div>
              <label className="block text-text-secondary text-xs font-medium mb-1.5">Fecha y Hora de Fin</label>
              <input type="datetime-local" className="w-full bg-bg-card border border-border rounded-lg px-4 py-2.5 text-sm text-text-primary focus:outline-none focus:border-accent" />
            </div>
          </div>
          <div>
            <label className="block text-text-secondary text-xs font-medium mb-1.5">Ubicación</label>
            <input type="text" placeholder="Lugar del evento" className="w-full bg-bg-card border border-border rounded-lg px-4 py-2.5 text-sm text-text-primary placeholder-text-secondary/50 focus:outline-none focus:border-accent" />
          </div>
          <button type="submit" className="flex items-center gap-2 bg-primary hover:bg-primary-light text-white px-6 py-2.5 rounded-lg text-sm font-medium transition-colors">
            <Save className="w-4 h-4" /> Guardar Evento
          </button>
        </form>
      </div>
    </div>
  );
}

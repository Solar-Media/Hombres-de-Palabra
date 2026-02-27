"use client";
import { ArrowLeft, Sun, Save } from "lucide-react";
import Link from "next/link";

export default function NuevoDevocionalPage() {
  return (
    <div className="min-h-screen bg-bg-primary">
      <div className="max-w-3xl mx-auto px-4 py-8">
        <Link href="/admin" className="inline-flex items-center gap-1.5 text-text-secondary hover:text-accent text-sm mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Volver al Panel
        </Link>
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
            <Sun className="w-5 h-5 text-accent" />
          </div>
          <h1 className="font-[family-name:var(--font-heading)] text-xl font-bold tracking-wide">Nuevo Devocional</h1>
        </div>
        <form className="space-y-6">
          {/* Date */}
          <div>
            <label className="block text-text-secondary text-xs font-medium mb-1.5">Fecha</label>
            <input type="date" className="w-full bg-bg-card border border-border rounded-lg px-4 py-2.5 text-sm text-text-primary focus:outline-none focus:border-accent" />
          </div>

          {/* Verse of the Day */}
          <div className="bg-bg-card border border-border rounded-xl p-5">
            <h2 className="font-[family-name:var(--font-heading)] text-sm font-semibold text-accent-gold mb-3">✝️ Versículo del Día</h2>
            <div className="space-y-3">
              <div>
                <label className="block text-text-secondary text-xs font-medium mb-1.5">Cita Bíblica</label>
                <input type="text" placeholder="Ej: Juan 3:16" className="w-full bg-bg-elevated border border-border rounded-lg px-4 py-2.5 text-sm text-text-primary placeholder-text-secondary/50 focus:outline-none focus:border-accent" />
              </div>
              <div>
                <label className="block text-text-secondary text-xs font-medium mb-1.5">Texto del Versículo</label>
                <textarea rows={3} placeholder="Texto completo del versículo..." className="w-full bg-bg-elevated border border-border rounded-lg px-4 py-2.5 text-sm text-text-primary placeholder-text-secondary/50 focus:outline-none focus:border-accent resize-none" />
              </div>
            </div>
          </div>

          {/* Devotional */}
          <div className="bg-bg-card border border-border rounded-xl p-5">
            <h2 className="font-[family-name:var(--font-heading)] text-sm font-semibold text-accent mb-3">📿 Devocional</h2>
            <div className="space-y-3">
              <div>
                <label className="block text-text-secondary text-xs font-medium mb-1.5">Título</label>
                <input type="text" placeholder="Título del devocional" className="w-full bg-bg-elevated border border-border rounded-lg px-4 py-2.5 text-sm text-text-primary placeholder-text-secondary/50 focus:outline-none focus:border-accent" />
              </div>
              <div>
                <label className="block text-text-secondary text-xs font-medium mb-1.5">Categoría</label>
                <select className="w-full bg-bg-elevated border border-border rounded-lg px-4 py-2.5 text-sm text-text-primary focus:outline-none focus:border-accent">
                  <option value="hombres">Hombres</option>
                  <option value="familia">Familia</option>
                  <option value="integridad">Integridad</option>
                  <option value="fe">Fe</option>
                  <option value="general">General</option>
                </select>
              </div>
              <div>
                <label className="block text-text-secondary text-xs font-medium mb-1.5">Contenido</label>
                <textarea rows={6} placeholder="Escribe el devocional..." className="w-full bg-bg-elevated border border-border rounded-lg px-4 py-2.5 text-sm text-text-primary placeholder-text-secondary/50 focus:outline-none focus:border-accent resize-y" />
              </div>
            </div>
          </div>

          {/* Encouragement */}
          <div className="bg-bg-card border border-border rounded-xl p-5">
            <h2 className="font-[family-name:var(--font-heading)] text-sm font-semibold text-accent mb-3">💪 Mensaje de Ánimo</h2>
            <textarea rows={3} placeholder="Mensaje breve de ánimo para hoy..." className="w-full bg-bg-elevated border border-border rounded-lg px-4 py-2.5 text-sm text-text-primary placeholder-text-secondary/50 focus:outline-none focus:border-accent resize-none" />
          </div>

          {/* Daily Tip */}
          <div className="bg-bg-card border border-border rounded-xl p-5">
            <h2 className="font-[family-name:var(--font-heading)] text-sm font-semibold text-accent-gold mb-3">🔧 Tip del Día</h2>
            <div className="space-y-3">
              <div>
                <label className="block text-text-secondary text-xs font-medium mb-1.5">Categoría</label>
                <select className="w-full bg-bg-elevated border border-border rounded-lg px-4 py-2.5 text-sm text-text-primary focus:outline-none focus:border-accent">
                  <option value="auto">🚗 Auto</option>
                  <option value="cocina">🍳 Cocina</option>
                  <option value="salud">💪 Salud</option>
                  <option value="organizacion">📋 Organización</option>
                  <option value="hogar">🏠 Hogar</option>
                  <option value="general">💡 General</option>
                </select>
              </div>
              <div>
                <label className="block text-text-secondary text-xs font-medium mb-1.5">Título</label>
                <input type="text" placeholder="Título del tip" className="w-full bg-bg-elevated border border-border rounded-lg px-4 py-2.5 text-sm text-text-primary placeholder-text-secondary/50 focus:outline-none focus:border-accent" />
              </div>
              <div>
                <label className="block text-text-secondary text-xs font-medium mb-1.5">Contenido</label>
                <textarea rows={3} placeholder="Escribe el tip..." className="w-full bg-bg-elevated border border-border rounded-lg px-4 py-2.5 text-sm text-text-primary placeholder-text-secondary/50 focus:outline-none focus:border-accent resize-none" />
              </div>
            </div>
          </div>

          <button type="submit" className="flex items-center gap-2 bg-primary hover:bg-primary-light text-white px-6 py-2.5 rounded-lg text-sm font-medium transition-colors">
            <Save className="w-4 h-4" /> Guardar Todo
          </button>
        </form>
      </div>
    </div>
  );
}

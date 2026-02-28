"use client";

import { useState } from "react";
import Link from "next/link";
import {
  BookOpen,
  FileText,
  Calendar,
  Megaphone,
  Sun,
  Shield,
  ArrowLeft,
  Lock,
} from "lucide-react";

const adminSections = [
  { href: "/admin/guias/nueva", icon: BookOpen, label: "Nueva Guía de Estudio", desc: "Crear guía semanal con referencias del libro" },
  { href: "/admin/notas/nueva", icon: FileText, label: "Nuevas Notas de Sermón", desc: "Agregar notas de la sesión de estudio" },
  { href: "/admin/eventos/nuevo", icon: Calendar, label: "Nuevo Evento", desc: "Crear evento o actividad" },
  { href: "/admin/anuncios/nuevo", icon: Megaphone, label: "Nuevo Anuncio", desc: "Publicar un anuncio" },
  { href: "/admin/devocional/nuevo", icon: Sun, label: "Nuevo Devocional", desc: "Agregar devocional, versículo y tip del día" },
];

const ADMIN_PASSWORD = "HombresdePalabra";

export default function AdminPage() {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setAuthenticated(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-bg-primary flex items-center justify-center px-4">
        <div className="w-full max-w-sm">
          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center mx-auto mb-4">
              <Lock className="w-8 h-8 text-accent" />
            </div>
            <h1 className="font-[family-name:var(--font-heading)] text-xl font-bold tracking-wide">
              Panel de Administración
            </h1>
            <p className="text-text-secondary text-sm mt-1">
              Ingresa la contraseña para acceder
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => { setPassword(e.target.value); setError(false); }}
                placeholder="Contraseña"
                className={`w-full bg-bg-card border ${error ? "border-error" : "border-border"} rounded-lg px-4 py-3 text-sm text-text-primary placeholder-text-secondary/50 focus:outline-none focus:border-accent text-center tracking-widest`}
                autoFocus
              />
              {error && (
                <p className="text-error text-xs mt-2 text-center">
                  Contraseña incorrecta. Intenta de nuevo.
                </p>
              )}
            </div>
            <button
              type="submit"
              className="w-full bg-primary hover:bg-primary-light text-white py-3 rounded-lg text-sm font-medium transition-colors"
            >
              Acceder
            </button>
          </form>

          <div className="mt-6 text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-text-secondary hover:text-accent text-xs transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Volver al Inicio
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg-primary">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Back */}
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-text-secondary hover:text-accent text-sm mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver al Inicio
        </Link>

        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
            <Shield className="w-6 h-6 text-accent" />
          </div>
          <div>
            <h1 className="font-[family-name:var(--font-heading)] text-2xl font-bold tracking-wide">
              Panel de Administración
            </h1>
            <p className="text-text-secondary text-sm">
              Gestionar contenido del ministerio
            </p>
          </div>
        </div>

        {/* Admin Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {adminSections.map((section) => {
            const Icon = section.icon;
            return (
              <Link
                key={section.href}
                href={section.href}
                className="group bg-bg-card border border-border rounded-xl p-5 transition-all hover:border-border-accent hover:bg-bg-elevated hover:scale-[1.02]"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/30">
                    <Icon className="w-4.5 h-4.5 text-accent" />
                  </div>
                  <h2 className="font-[family-name:var(--font-heading)] font-semibold text-sm">
                    {section.label}
                  </h2>
                </div>
                <p className="text-text-secondary text-xs">{section.desc}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

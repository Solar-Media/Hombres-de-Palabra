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
  Plus,
  Edit,
  Trash2
} from "lucide-react";

// Actualizamos las secciones para incluir la ruta base y descripciones más generales
const adminSections = [
  { basePath: "/admin/guias", newHref: "/admin/guias/nueva", icon: BookOpen, label: "Guías de Estudio", desc: "Gestionar guías semanales" },
  { basePath: "/admin/notas", newHref: "/admin/notas/nueva", icon: FileText, label: "Notas de Sermón", desc: "Gestionar notas de la sesión" },
  { basePath: "/admin/eventos", newHref: "/admin/eventos/nuevo", icon: Calendar, label: "Eventos", desc: "Gestionar eventos y actividades" },
  { basePath: "/admin/anuncios", newHref: "/admin/anuncios/nuevo", icon: Megaphone, label: "Anuncios", desc: "Gestionar publicaciones y avisos" },
  { basePath: "/admin/devocional", newHref: "/admin/devocional/nuevo", icon: Sun, label: "Devocionales", desc: "Gestionar devocionales diarios" },
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {adminSections.map((section) => {
            const Icon = section.icon;
            return (
              <div
                key={section.basePath}
                className="flex flex-col bg-bg-card border border-border rounded-xl p-5 transition-all hover:border-border-accent hover:bg-bg-elevated"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                  <h2 className="font-[family-name:var(--font-heading)] font-semibold text-base text-text-primary">
                    {section.label}
                  </h2>
                </div>
                <p className="text-text-secondary text-sm mb-5 flex-grow">
                  {section.desc}
                </p>
                
                {/* Botones de Acción */}
                <div className="flex items-center gap-2 pt-4 border-t border-border/50">
                  <Link
                    href={section.newHref}
                    className="flex-1 flex items-center justify-center gap-1.5 bg-primary hover:bg-primary-light text-white py-2 px-2 rounded-lg text-xs font-medium transition-colors"
                    title="Crear nuevo"
                  >
                    <Plus className="w-4 h-4" />
                    Nuevo
                  </Link>
                  <Link
                    href={section.basePath}
                    className="flex-1 flex items-center justify-center gap-1.5 bg-bg-elevated hover:bg-border border border-border text-text-primary py-2 px-2 rounded-lg text-xs font-medium transition-colors"
                    title="Editar existentes"
                  >
                    <Edit className="w-4 h-4" />
                    Editar
                  </Link>
                  <Link
                    href={section.basePath}
                    className="flex-1 flex items-center justify-center gap-1.5 bg-error/10 hover:bg-error/20 border border-error/20 text-error py-2 px-2 rounded-lg text-xs font-medium transition-colors"
                    title="Eliminar existentes"
                  >
                    <Trash2 className="w-4 h-4" />
                    Borrar
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  BookOpen,
  FileText,
  Heart,
  Calendar,
  Megaphone,
  Sun,
  Users,
  Home,
  Menu,
  X,
  Shield,
} from "lucide-react";
import { useState } from "react";

const navItems = [
  { href: "/guias", icon: BookOpen, label: "Guías" },
  { href: "/notas", icon: FileText, label: "Notas" },
  { href: "/oracion", icon: Heart, label: "Oración" },
  { href: "/eventos", icon: Calendar, label: "Eventos" },
  { href: "/anuncios", icon: Megaphone, label: "Anuncios" },
  { href: "/devocional", icon: Sun, label: "Devocional" },
  { href: "/comunidad", icon: Users, label: "Comunidad" },
];

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-bg-primary flex flex-col">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-50 bg-bg-secondary/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo-icon.png"
              alt="HDP"
              width={32}
              height={32}
              className="w-8 h-8"
            />
            <span className="font-[family-name:var(--font-heading)] text-sm tracking-wider hidden sm:block">
              HOMBRES DE PALABRA
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    active
                      ? "bg-primary/20 text-accent border border-border-accent/50"
                      : "text-text-secondary hover:text-text-primary hover:bg-bg-card"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-text-secondary hover:text-text-primary"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Nav Dropdown */}
        {menuOpen && (
          <nav className="md:hidden bg-bg-secondary border-t border-border px-4 py-3 space-y-1">
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-text-secondary hover:text-text-primary hover:bg-bg-card transition-colors"
            >
              <Home className="w-4 h-4" />
              Inicio
            </Link>
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                    active
                      ? "bg-primary/20 text-accent border border-border-accent/50"
                      : "text-text-secondary hover:text-text-primary hover:bg-bg-card"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {item.label}
                </Link>
              );
            })}
            <div className="border-t border-border pt-2 mt-2">
              <Link
                href="/admin/guias/nueva"
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-text-secondary hover:text-text-primary hover:bg-bg-card transition-colors"
              >
                <Shield className="w-4 h-4" />
                Panel Admin
              </Link>
            </div>
          </nav>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-6xl mx-auto w-full px-4 py-6">
        {children}
      </main>

      {/* Bottom Nav (Mobile) */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-bg-secondary/95 backdrop-blur-sm border-t border-border z-50">
        <div className="flex justify-around items-center h-16 px-2">
          {[
            { href: "/", icon: Home, label: "Inicio" },
            { href: "/guias", icon: BookOpen, label: "Guías" },
            { href: "/oracion", icon: Heart, label: "Oración" },
            { href: "/devocional", icon: Sun, label: "Devocional" },
            { href: "/eventos", icon: Calendar, label: "Eventos" },
          ].map((item) => {
            const Icon = item.icon;
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex flex-col items-center gap-0.5 px-2 py-1 rounded-lg transition-colors ${
                  active ? "text-accent" : "text-text-secondary"
                }`}
              >
                <Icon className={`w-5 h-5 ${active ? "text-accent" : ""}`} />
                <span className="text-[10px]">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Spacer for bottom nav on mobile */}
      <div className="h-16 md:hidden" />
    </div>
  );
}

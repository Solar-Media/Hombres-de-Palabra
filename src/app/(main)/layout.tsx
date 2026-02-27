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
  ChevronRight,
} from "lucide-react";
import { useState } from "react";

const navItems = [
  { href: "/", icon: Home, label: "Inicio" },
  { href: "/guias", icon: BookOpen, label: "Guías de Estudio" },
  { href: "/notas", icon: FileText, label: "Notas de Sermón" },
  { href: "/oracion", icon: Heart, label: "Peticiones de Oración" },
  { href: "/eventos", icon: Calendar, label: "Eventos" },
  { href: "/anuncios", icon: Megaphone, label: "Anuncios" },
  { href: "/devocional", icon: Sun, label: "Devocional del Día" },
  { href: "/comunidad", icon: Users, label: "Comunidad" },
];

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-bg-primary flex">
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-bg-secondary border-r border-border z-50 flex flex-col transition-transform duration-300 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:static md:z-auto`}
      >
        {/* Logo Area */}
        <div className="p-5 border-b border-border">
          <Link href="/" className="flex items-center gap-3" onClick={() => setSidebarOpen(false)}>
            <Image
              src="/logo-icon.png"
              alt="HDP"
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <div>
              <h1 className="font-[family-name:var(--font-heading)] text-xs tracking-wider leading-tight">
                HOMBRES
              </h1>
              <h1 className="font-[family-name:var(--font-heading)] text-xs tracking-wider text-accent leading-tight">
                DE PALABRA
              </h1>
            </div>
          </Link>
          {/* Close button (mobile) */}
          <button
            onClick={() => setSidebarOpen(false)}
            className="md:hidden absolute top-4 right-4 p-1 text-text-secondary hover:text-text-primary"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 py-4 px-3 space-y-1 overflow-y-auto">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 group ${
                  active
                    ? "bg-primary/20 text-accent border-l-2 border-accent"
                    : "text-text-secondary hover:text-text-primary hover:bg-bg-card"
                }`}
              >
                <Icon className={`w-4.5 h-4.5 flex-shrink-0 ${active ? "text-accent" : "group-hover:text-accent"}`} />
                <span className="flex-1">{item.label}</span>
                {active && <ChevronRight className="w-3.5 h-3.5 text-accent" />}
              </Link>
            );
          })}
        </nav>

        {/* Admin Link */}
        <div className="p-3 border-t border-border">
          <Link
            href="/admin"
            onClick={() => setSidebarOpen(false)}
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-text-secondary hover:text-text-primary hover:bg-bg-card transition-colors"
          >
            <Shield className="w-4.5 h-4.5" />
            <span>Panel Admin</span>
          </Link>
        </div>

        {/* Motto */}
        <div className="p-4 border-t border-border">
          <p className="text-[10px] text-text-secondary/60 italic text-center leading-relaxed">
            &ldquo;Renovando nuestra mente a través de la Palabra de Dios.&rdquo;
          </p>
          <p className="text-[9px] text-accent-gold/60 text-center mt-0.5 font-[family-name:var(--font-heading)]">
            ROMANOS 12:2
          </p>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Top Bar (Mobile) */}
        <header className="sticky top-0 z-30 bg-bg-secondary/95 backdrop-blur-sm border-b border-border md:hidden">
          <div className="px-4 h-14 flex items-center justify-between">
            <button
              onClick={() => setSidebarOpen(true)}
              className="p-2 -ml-2 text-text-secondary hover:text-text-primary"
            >
              <Menu className="w-5 h-5" />
            </button>
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo-icon.png"
                alt="HDP"
                width={28}
                height={28}
                className="w-7 h-7"
              />
              <span className="font-[family-name:var(--font-heading)] text-xs tracking-wider">
                HOMBRES DE PALABRA
              </span>
            </Link>
            <div className="w-9" /> {/* Spacer for centering */}
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 max-w-5xl w-full mx-auto px-4 md:px-8 py-6">
          {children}
        </main>
      </div>
    </div>
  );
}

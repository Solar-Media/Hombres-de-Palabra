import Image from "next/image";
import Link from "next/link";
import {
  BookOpen,
  FileText,
  Heart,
  Calendar,
  Megaphone,
  Sun,
  Users,
} from "lucide-react";

const features = [
  {
    href: "/guias",
    icon: BookOpen,
    titulo: "Guías de Estudio",
    descripcion: "Estudios bíblicos semanales con referencias del libro",
  },
  {
    href: "/notas",
    icon: FileText,
    titulo: "Notas de Sermón",
    descripcion: "Apuntes y puntos clave de cada sesión",
  },
  {
    href: "/oracion",
    icon: Heart,
    titulo: "Peticiones de Oración",
    descripcion: "Comparte y ora por las necesidades del grupo",
  },
  {
    href: "/eventos",
    icon: Calendar,
    titulo: "Eventos",
    descripcion: "Próximas actividades y reuniones",
  },
  {
    href: "/anuncios",
    icon: Megaphone,
    titulo: "Anuncios",
    descripcion: "Noticias importantes del ministerio",
  },
  {
    href: "/devocional",
    icon: Sun,
    titulo: "Devocional del Día",
    descripcion: "Reflexión diaria centrada en Cristo",
  },
  {
    href: "/comunidad",
    icon: Users,
    titulo: "Comunidad",
    descripcion: "Únete a nuestro grupo de WhatsApp",
  },
];

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/15 via-bg-card to-bg-card border border-border mb-8">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
        
        <div className="relative px-6 py-10 md:py-14 text-center">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <Image
              src="/placagrande-hombres.png"
              alt="Hombres de Palabra"
              width={1376}
              height={768}
              className="w-auto h-32 md:h-44 drop-shadow-[0_0_15px_rgba(139,0,0,0.3)]"
              priority
            />
          </div>

          {/* Motto */}
          <p className="font-[family-name:var(--font-display)] text-accent uppercase tracking-wider text-sm md:text-base font-semibold italic mb-2">
            &ldquo;Renovando nuestra mente a través de la Palabra de Dios.&rdquo;
          </p>
          <p className="text-accent-gold font-[family-name:var(--font-heading)] text-sm tracking-widest mb-6">
            ROMANOS 12:2
          </p>

          {/* Church info */}
          <p className="text-text-primary text-base font-semibold tracking-wide">
            Shadow Mountain en Español
          </p>
          <p className="text-text-secondary text-xs mt-1">
            Pastor Erick Zaldaña &bull; Líder - Carlos García
          </p>
        </div>
      </section>

      {/* Feature Grid */}
      <section>
        <h2 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-4 tracking-wide">
          Recursos del Ministerio
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Link
                key={feature.href}
                href={feature.href}
                className="group block bg-bg-card border border-border rounded-xl p-5 transition-all duration-300 hover:border-border-accent hover:bg-bg-elevated hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-heading)] text-text-primary font-semibold text-sm tracking-wide">
                      {feature.titulo}
                    </h3>
                    <p className="text-text-secondary text-xs mt-1 leading-relaxed">
                      {feature.descripcion}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-10 pt-6 border-t border-border text-center">
        <p className="text-text-secondary text-xs">
          Hombres de Palabra &bull; Ministerio de Hombres
        </p>
        <div className="flex justify-center gap-4 mt-3">
          <a
            href="https://www.facebook.com/HombresDePalabraSMCC"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-accent transition-colors text-xs"
          >
            Facebook
          </a>
          <a
            href="https://www.instagram.com/HombresDePalabraSMCC"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-accent transition-colors text-xs"
          >
            Instagram
          </a>
          <a
            href="mailto:hombresdepalabra@shadowmountain.org"
            className="text-text-secondary hover:text-accent transition-colors text-xs"
          >
            Correo
          </a>
        </div>
      </footer>
    </div>
  );
}

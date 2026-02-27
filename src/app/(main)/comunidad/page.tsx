import Image from "next/image";
import { Users, Instagram, Facebook, Mail } from "lucide-react";

export default function ComunidadPage() {
  return (
    <div className="max-w-3xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
            <Users className="w-5 h-5 text-accent" />
          </div>
          <div>
            <h1 className="font-[family-name:var(--font-heading)] text-xl md:text-2xl font-bold tracking-wide">
              Comunidad
            </h1>
            <p className="text-text-secondary text-xs">
              Conéctate con nosotros
            </p>
          </div>
        </div>
      </div>

      {/* WhatsApp Group */}
      <div className="bg-bg-card border border-border rounded-xl p-6 mb-6 text-center">
        <h2 className="font-[family-name:var(--font-heading)] text-lg font-bold mb-2">
          Únete a Nuestro Grupo de WhatsApp
        </h2>
        <p className="text-text-secondary text-sm mb-4">
          ¡Entérate de todo lo que estamos haciendo! Escanea el código QR para unirte.
        </p>
        <div className="flex justify-center mb-4">
          <div className="bg-white rounded-xl p-4 inline-block">
            <Image
              src="/qr-whatsapp.png"
              alt="QR WhatsApp Group"
              width={250}
              height={250}
              className="w-48 h-48 md:w-64 md:h-64"
            />
          </div>
        </div>
        <p className="text-text-secondary text-xs">
          Escanea el código QR con la cámara de tu teléfono
        </p>
      </div>

      {/* Motto */}
      <div className="bg-gradient-to-r from-primary/20 to-bg-card border border-border-accent/30 rounded-xl p-5 mb-6 text-center">
        <p className="font-[family-name:var(--font-display)] text-accent uppercase tracking-wider text-sm font-semibold italic">
          &ldquo;Renovando nuestra mente a través de la Palabra de Dios.&rdquo;
        </p>
        <p className="text-accent-gold font-[family-name:var(--font-heading)] text-xs tracking-widest mt-1">
          ROMANOS 12:2
        </p>
      </div>

      {/* Social Links */}
      <div className="bg-bg-card border border-border rounded-xl p-6">
        <h2 className="font-[family-name:var(--font-heading)] text-base font-bold mb-4 text-center">
          Síguenos en Nuestras Redes Sociales
        </h2>
        <div className="space-y-3">
          <a
            href="https://www.facebook.com/HombresDePalabraSMCC"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-bg-elevated border border-border rounded-lg p-4 hover:border-accent/50 transition-colors"
          >
            <div className="w-10 h-10 rounded-full bg-[#1877F2]/20 flex items-center justify-center">
              <Facebook className="w-5 h-5 text-[#1877F2]" />
            </div>
            <div>
              <p className="text-text-primary text-sm font-medium">Facebook</p>
              <p className="text-text-secondary text-xs">@HombresDePalabraSMCC</p>
            </div>
          </a>

          <a
            href="https://www.instagram.com/HombresDePalabraSMCC"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-bg-elevated border border-border rounded-lg p-4 hover:border-accent/50 transition-colors"
          >
            <div className="w-10 h-10 rounded-full bg-[#E4405F]/20 flex items-center justify-center">
              <Instagram className="w-5 h-5 text-[#E4405F]" />
            </div>
            <div>
              <p className="text-text-primary text-sm font-medium">Instagram</p>
              <p className="text-text-secondary text-xs">@HombresDePalabraSMCC</p>
            </div>
          </a>

          <a
            href="mailto:hombresdepalabra@shadowmountain.org"
            className="flex items-center gap-4 bg-bg-elevated border border-border rounded-lg p-4 hover:border-accent/50 transition-colors"
          >
            <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
              <Mail className="w-5 h-5 text-accent" />
            </div>
            <div>
              <p className="text-text-primary text-sm font-medium">Correo Electrónico</p>
              <p className="text-text-secondary text-xs">hombresdepalabra@shadowmountain.org</p>
            </div>
          </a>
        </div>
      </div>

      {/* Church Info */}
      <div className="mt-6 text-center text-text-secondary text-xs space-y-1">
        <p className="font-[family-name:var(--font-heading)] tracking-wider">
          Shadow Mountain en Español Community Church
        </p>
        <p>Pastor Erick Zaldaña &bull; Dr. David Jeremiah</p>
        <p>2100 Greenfield Dr, El Cajon, CA 92019</p>
      </div>
    </div>
  );
}

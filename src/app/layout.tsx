import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hombres de Palabra | Ministerio de Hombres",
  description: "Ministerio de Hombres — Shadow Mountain en Español Community Church. Renovando nuestra mente a través de la Palabra de Dios. Romanos 12:2",
  manifest: "/manifest.json",
  icons: {
    icon: "/icons/icon-192.png",
    apple: "/icons/icon-512.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#8B0000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased min-h-screen bg-bg-primary text-text-primary">
        {children}
      </body>
    </html>
  );
}

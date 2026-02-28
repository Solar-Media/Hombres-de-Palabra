"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Save, Calendar, MapPin, AlignLeft, Type } from "lucide-react";
import { createClient } from "@/lib/supabase/client";

export default function EditarEventoPage() {
  const router = useRouter();
  const params = useParams();
  const eventId = params.id as string;

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  
  // Estados para los campos del formulario
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [fechaInicio, setFechaInicio] = useState("");
  const [ubicacion, setUbicacion] = useState("");

  const supabase = createClient();

  // Descargar los datos actuales del evento al cargar la página
  useEffect(() => {
    const fetchEvento = async () => {
      if (!eventId) return;
      
      const { data, error } = await supabase
        .from("eventos")
        .select("*")
        .eq("id", eventId)
        .single();

      if (error) {
        console.error("Error al cargar:", error);
        alert("No se pudo cargar la información del evento.");
        router.push("/admin/eventos");
        return;
      }

      if (data) {
        setTitulo(data.titulo || "");
        setDescripcion(data.descripcion || "");
        
        // Ajustar el formato de fecha para el input type="datetime-local"
        if (data.fecha_inicio) {
          const date = new Date(data.fecha_inicio);
          // Convertir a formato YYYY-MM-DDThh:mm (requerido por HTML5)
          const formattedDate = date.toISOString().slice(0, 16);
          setFechaInicio(formattedDate);
        }
        
        setUbicacion(data.ubicacion || "");
      }
      setLoading(false);
    };

    fetchEvento();
  }, [eventId, router]); // Se eliminó 'supabase' de las dependencias para evitar advertencias

  // Función para guardar los cambios en la base de datos
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    const { error } = await supabase
      .from("eventos")
      .update({
        titulo,
        descripcion,
        fecha_inicio: fechaInicio ? new Date(fechaInicio).toISOString() : null,
        ubicacion,
      })
      .eq("id", eventId);

    setSaving(false);

    if (error) {
      console.error(error);
      alert("Hubo un error al guardar los cambios.");
    } else {
      alert("¡Evento actualizado con éxito!");
      router.push("/admin/eventos"); // Regresar a la lista de eventos
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-bg-primary flex items-center justify-center">
        <p className="text-text-secondary animate-pulse">Cargando información del evento...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg-primary">
      <div className="max-w-3xl mx-auto px-4 py-8">
        {/* Botón Volver */}
        <Link href="/admin/eventos" className="inline-flex items-center gap-1.5 text-text-secondary hover:text-accent text-sm mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Volver a Eventos
        </Link>

        {/* Encabezado */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
            <Calendar className="w-6 h-6 text-accent" />
          </div>
          <div>
            <h1 className="font-[family-name:var(--font-heading)] text-2xl font-bold tracking-wide">Editar Evento</h1>
            <p className="text-text-secondary text-sm">Modifica los detalles del evento seleccionado</p>
          </div>
        </div>

        {/* Formulario */}
        <form onSubmit={handleSubmit} className="bg-bg-card border border-border rounded-xl p-6 md:p-8 space-y-6">
          
          {/* Título */}
          <div>
            <label className="flex items-center gap-2 text-xs font-semibold text-text-secondary uppercase tracking-wider mb-2">
              <Type className="w-4 h-4 text-accent" /> Título del Evento
            </label>
            <input
              type="text"
              required
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
              placeholder="Ej. Desayuno de Hombres"
              className="w-full bg-bg-elevated border border-border rounded-lg px-4 py-3 text-sm text-text-primary placeholder-text-secondary/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
            />
          </div>

          {/* Fecha y Hora */}
          <div>
            <label className="flex items-center gap-2 text-xs font-semibold text-text-secondary uppercase tracking-wider mb-2">
              <Calendar className="w-4 h-4 text-accent" /> Fecha y Hora
            </label>
            <input
              type="datetime-local"
              required
              value={fechaInicio}
              onChange={(e) => setFechaInicio(e.target.value)}
              className="w-full bg-bg-elevated border border-border rounded-lg px-4 py-3 text-sm text-text-primary focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
            />
          </div>

          {/* Ubicación */}
          <div>
            <label className="flex items-center gap-2 text-xs font-semibold text-text-secondary uppercase tracking-wider mb-2">
              <MapPin className="w-4 h-4 text-accent" /> Ubicación
            </label>
            <input
              type="text"
              value={ubicacion}
              onChange={(e) => setUbicacion(e.target.value)}
              placeholder="Ej. Salón Principal, Iglesia..."
              className="w-full bg-bg-elevated border border-border rounded-lg px-4 py-3 text-sm text-text-primary placeholder-text-secondary/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
            />
          </div>

          {/* Descripción */}
          <div>
            <label className="flex items-center gap-2 text-xs font-semibold text-text-secondary uppercase tracking-wider mb-2">
              <AlignLeft className="w-4 h-4 text-accent" /> Descripción o Detalles
            </label>
            <textarea
              rows={4}
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
              placeholder="Escribe los detalles, qué traer, de qué trata el evento..."
              className="w-full bg-bg-elevated border border-border rounded-lg px-4 py-3 text-sm text-text-primary placeholder-text-secondary/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all resize-none"
            />
          </div>

          {/* Botones de Acción */}
          <div className="pt-4 border-t border-border flex justify-end gap-3">
            <Link 
              href="/admin/eventos"
              className="px-5 py-2.5 rounded-lg text-sm font-medium text-text-secondary hover:bg-bg-elevated border border-transparent hover:border-border transition-all"
            >
              Cancelar
            </Link>
            <button
              type="submit"
              disabled={saving}
              className="flex items-center gap-2 bg-primary hover:bg-primary-light disabled:bg-primary/50 text-white px-6 py-2.5 rounded-lg text-sm font-medium transition-all"
            >
              <Save className="w-4 h-4" />
              {saving ? "Guardando..." : "Guardar Cambios"}
            </button>
          </div>
        </form>

      </div>
    </div>
  );
}

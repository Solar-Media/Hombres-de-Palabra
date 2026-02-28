"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Plus, Edit, Trash2, Calendar, MapPin, Clock } from "lucide-react";
import { createClient } from "@/lib/supabase/client";

// Definimos el tipo aquí mismo para evitar errores de importación en Vercel
interface Evento {
  id: string;
  titulo: string;
  descripcion: string;
  fecha_inicio: string;
  ubicacion: string;
}

export default function AdminEventosPage() {
  const [eventos, setEventos] = useState<Evento[]>([]);
  const [loading, setLoading] = useState(true);
  
  const supabase = createClient();

  const fetchEventos = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("eventos")
      .select("*")
      .order("fecha_inicio", { ascending: false });

    if (!error && data) {
      setEventos(data as Evento[]);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchEventos();
  }, []);

  const handleDelete = async (id: string) => {
    const confirmar = window.confirm("¿Estás seguro de que deseas eliminar este evento?");
    if (!confirmar) return;

    const { error } = await supabase.from("eventos").delete().eq("id", id);
    
    if (!error) {
      alert("Evento eliminado correctamente.");
      fetchEventos(); 
    } else {
      alert("Hubo un error al eliminar el evento.");
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-bg-primary">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Link href="/admin" className="inline-flex items-center gap-1.5 text-text-secondary hover:text-accent text-sm mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Volver al Panel
        </Link>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
              <Calendar className="w-6 h-6 text-accent" />
            </div>
            <div>
              <h1 className="font-[family-name:var(--font-heading)] text-2xl font-bold tracking-wide">Eventos</h1>
              <p className="text-text-secondary text-sm">Gestiona los eventos del ministerio</p>
            </div>
          </div>
          <Link href="/admin/eventos/nuevo" className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-light text-white px-4 py-2.5 rounded-lg text-sm font-medium transition-colors">
            <Plus className="w-4 h-4" /> Nuevo Evento
          </Link>
        </div>

        {loading ? (
          <p className="text-center text-text-secondary py-10">Cargando eventos desde la base de datos...</p>
        ) : eventos.length === 0 ? (
          <div className="bg-bg-card border border-border border-dashed rounded-xl p-10 text-center">
            <Calendar className="w-10 h-10 text-text-secondary/30 mx-auto mb-3" />
            <p className="text-text-primary font-medium">No hay eventos registrados</p>
            <Link href="/admin/eventos/nuevo" className="mt-4 inline-flex items-center gap-2 bg-primary/10 text-accent hover:bg-primary/20 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
              <Plus className="w-4 h-4" /> Crear mi primer evento
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4">
            {eventos.map((evento) => (
              <div key={evento.id} className="bg-bg-card border border-border rounded-xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-colors hover:border-border-accent">
                <div>
                  <h3 className="font-bold text-lg text-text-primary mb-1">{evento.titulo}</h3>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-text-secondary">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" /> 
                      {new Date(evento.fecha_inicio).toLocaleDateString()}
                    </span>
                    {evento.ubicacion && (
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5" /> {evento.ubicacion}
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-2 sm:mt-0">
                  <Link href={`/admin/eventos/${evento.id}/editar`} className="flex items-center gap-1.5 px-3 py-1.5 bg-bg-elevated border border-border rounded-lg text-sm hover:border-accent text-text-primary transition-colors">
                    <Edit className="w-3.5 h-3.5" /> Editar
                  </Link>
                  <button onClick={() => handleDelete(evento.id)} className="flex items-center gap-1.5 px-3 py-1.5 bg-error/10 border border-error/20 rounded-lg text-sm text-error hover:bg-error/20 transition-colors">
                    <Trash2 className="w-3.5 h-3.5" /> Borrar
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// Types for Hombres de Palabra app

export type RolUsuario = 'admin' | 'lider' | 'facilitador' | 'miembro'
export type TipoPregunta = 'personal' | 'grupal'
export type EstadoPeticion = 'activa' | 'respondida' | 'archivada'
export type PrioridadAnuncio = 'normal' | 'importante' | 'urgente'
export type CategoriaDevocional = 'hombres' | 'familia' | 'integridad' | 'fe' | 'general'
export type CategoriaTip = 'auto' | 'cocina' | 'salud' | 'organizacion' | 'hogar' | 'general'

export interface Profile {
  id: string
  nombre: string
  apellido: string
  email: string
  telefono?: string
  rol: RolUsuario
  avatar_url?: string
  created_at: string
  updated_at: string
}

export interface GuiaEstudio {
  id: string
  titulo: string
  descripcion: string
  libro_referencia: string
  paginas_referencia: string
  contenido: string
  fecha_estudio: string
  semana_numero: number
  serie_nombre: string
  archivos_adjuntos?: Record<string, unknown>[]
  created_by: string
  created_at: string
  updated_at: string
}

export interface NotaSermon {
  id: string
  guia_id?: string
  titulo: string
  orador: string
  contenido: string
  versiculos_clave: string[]
  puntos_principales: Record<string, unknown>[]
  fecha: string
  created_by: string
  created_at: string
  updated_at: string
}

export interface PreguntaDiscusion {
  id: string
  guia_id?: string
  tipo: TipoPregunta
  pregunta: string
  contexto?: string
  orden: number
  created_by: string
  created_at: string
}

export interface PeticionOracion {
  id: string
  autor_id: string
  contenido: string
  es_anonima: boolean
  es_publica: boolean
  estado: EstadoPeticion
  created_at: string
  updated_at: string
  // Joined
  autor?: Profile
}

export interface Evento {
  id: string
  titulo: string
  descripcion: string
  fecha_inicio: string
  fecha_fin?: string
  ubicacion?: string
  direccion?: string
  imagen_url?: string
  es_recurrente: boolean
  recurrencia?: Record<string, unknown>
  created_by: string
  created_at: string
  updated_at: string
}

export interface Anuncio {
  id: string
  titulo: string
  contenido: string
  prioridad: PrioridadAnuncio
  fecha_publicacion: string
  fecha_expiracion?: string
  imagen_url?: string
  created_by: string
  created_at: string
}

export interface VersiculoDia {
  id: string
  fecha: string
  cita: string
  texto: string
  reflexion?: string
  created_by: string
  created_at: string
}

export interface DevocionalDia {
  id: string
  fecha: string
  titulo: string
  contenido: string
  categoria: CategoriaDevocional
  versiculo_referencia: string
  created_by: string
  created_at: string
}

export interface MensajeAnimo {
  id: string
  fecha: string
  mensaje: string
  autor?: string
  created_by: string
  created_at: string
}

export interface TipDia {
  id: string
  fecha: string
  categoria: CategoriaTip
  titulo: string
  contenido: string
  created_by: string
  created_at: string
}

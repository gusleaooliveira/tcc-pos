// Interface para Materiais Complementares
export interface ComplementaryMaterial {
  id: string;
  title: string;
  type: string; // Tipo do material, como PDF, etc.
  size: number; // Tamanho do arquivo em bytes
  url: string; // URL para o material
}

// Interface para Vídeo
export interface Video {
  id: string;
  title: string;
  url: string; // URL do vídeo
}

// Interface para Miniatura
export interface Thumbnail {
  id: string;
  title: string;
  url: string; // URL da imagem
}

// Interface para Miniatura em Formato SVG
export interface Miniature {
  id: string;
  title: string;
  url: string; // URL da imagem SVG
}

// Interface para Lição
export interface Lesson {
  id: string;
  title: string;
  full_description: string;
  short_description: string;
  order: number;
  duration: number; // Duração em minutos
  is_highlighted: boolean;
  count_likes: number; // Contagem de likes
  created_at: string; // Data de criação no formato ISO
  updated_at: string; // Data de atualização no formato ISO
  video: Video;
  thumbnail: Thumbnail;
  miniature: Miniature;
  complementary_materials: ComplementaryMaterial[];
}

// Interface para Seção (Módulo)
export interface Module {
  id: string;
  title: string;
  subtitle: string;
  full_description: string;
  color: string | null; // Pode ser uma string ou null
  short_description: string;
  number_of_lessons: number;
  created_at: string; // Data de criação no formato ISO
  updated_at: string; // Data de atualização no formato ISO
  lessons: Lesson[];
}

// Array de Seções
export type Modules = Module[];

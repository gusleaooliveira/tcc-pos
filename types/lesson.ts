export interface Thumbnail {
  id: string;
  title: string;
  url: string;
}

export interface Miniature {
  id: string;
  title: string;
  url: string;
}

export interface ComplementaryMaterial {
  id: string;
  title: string;
  type: string;
  size: number;
  url: string;
  document_description: string;
  type_document: string;
}

export interface Video {
  id: string;
  title: string;
  url: string;
}

export interface Module {
  id: string;
  title: string;
  subtitle: string;
  full_description: string;
  color: string;
  short_description: string;
  number_of_lessons: number;
  created_at: string;
  updated_at: string;
}

export interface Lesson {
  id: string;
  title: string;
  full_description: string;
  short_description: string;
  order: number;
  duration: number;
  is_highlighted: boolean;
  count_likes: number;
  created_at: string;
  updated_at: string;
  thumbnail: Thumbnail;
  miniature: Miniature;
  complementary_materials: ComplementaryMaterial[];
  video: Video;
  module: Module;
  commentaries: any[]; // Ajuste o tipo conforme necessário
}

export type Lessons = Lesson[];

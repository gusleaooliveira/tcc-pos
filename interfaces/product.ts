import { IMedia } from "./media";

// enum ERanking {
//   bronze = "bronze",
//   silver = "silver",
//   gold = "gold",
//   notStarted = "not-started",
// }

// type IType = "Em Breve" | "Concluído" | "Assistindo" | "Não iniciado";

// export enum EStatus {
//   soon = "Em Breve",
//   completed = "Concluído",
//   started = "Assistindo",
//   NotStarted = "Não iniciado",
// }

// export interface IComment {
//   id: string;
//   title: string;
//   avatar: IMedia;
//   message: string;
// }
// export interface IModule {
//   id: string;
//   title: string;
//   subtitle: string;
//   full_description: string;
//   short_description: string;
//   number_of_lessons: number;
//   lessons: ILesson[];
//   is_highlight: boolean;
//   module_status: IModuleStatus;
// }
// export interface IModuleStatus {
//   id: string;
//   module_id: string;
//   user_id: string;
//   quantity_completed: number;
//   is_completed: boolean;
//   certificate_id: string;
// }
// export interface ILesson {
//   id: string;
//   title: string;
//   full_description: string;
//   short_description: string;
//   thumbnail: IMedia;
//   avatar: IMedia;
//   status: EStatus;
//   complementary_materials: IMedia[];
//   video_id: IMedia;
//   module_id: IModuleid;
//   order: number;
//   duration: string;
//   time: string;
//   percent: number;
//   launchDate: string;
//   comments: IComment[];
//   like: boolean;
// }

// export interface IModuleid {
//   id: string;
//   name: string;
//   subTitle: string;
//   description: string;
//   isHighlight: boolean;
//   numberOfLessons: number;
//   percent: number;
//   ranking: ERanking;
//   completed: boolean;
//   lessons: ILesson[];
//   certification?: IDocument;
//   location: IImage;
//   color: string;
// }

export enum ERanking {
  bronze = "bronze",
  silver = "silver",
  gold = "gold",
  notStarted = "not-started",
}

export enum EStatus {
  soon = "Em Breve",
  completed = "Concluído",
  started = "Assistindo",
  NotStarted = "Não iniciado",
}

export interface IImage {
  id: string;
  title: string;
  url: string;
}

export interface IComment {
  id: string;
  title: string;
  avatar: IImage;
  message: string;
}

export interface IDocument {
  id: string;
  title: string;
  type: string;
  type_document: "E-BOOK" | "AUDIOBOOK" | "CERTIFICATE";
  size: number;
  url: string;
  document_description: string; 
}

export interface Ivideo {
  id: string;
  title: string;
  url: string;
}

export interface ILessonProgress {
  id: string;
  status: string;
  percentage_completed: number;
  time: number;
  updated_at: string;
  lesson_id: ILessonDetails;
  user_id: IUserDetails;
}

export interface ILessonDetails {
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
}

export interface IUserDetails {
  id: string;
  email: string;
  name: string;
  last_name: string;
  phone: string;
  password: string;
  description: string | null;
  cpf: string;
  gender: string | null;
  is_first_login: boolean;
  stripe_customer_id: string;
  stripe_subscription_id: string;
  total_progress: number;
  created_at: string;
  updated_at: string;
  passwordResetToken: string | null;
}


export interface ILesson {
  complementary_materials: IDocument[];
  video: Ivideo;
  full_description: string;
  created_at?: Date;
  id: string;
  title: string;
  thumbnail: IImage;
  miniature?: IImage;
  avatar: IImage;
  status: EStatus;
  time: string;
  timeTotal: string;
  percent: number;
  launchDate: string;
  description: string;
  documents: IDocument[];
  comments: IComment[];
  like: boolean;
  module: IModule;
  order: number;
  time_read?: ILessonProgress
}

export interface IModule {
  created_at: Date;
  id: string;
  title: string;
  subTitle: string;
  description: string;
  isHighlight: boolean;
  number_of_lessons: number;
  percent: number;
  ranking: ERanking;
  completed: boolean;
  lessons: ILesson[];
  certification?: IDocument;
  location: IImage;
  color: string;
}

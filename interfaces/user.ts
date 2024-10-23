import { IMedia } from "./media";

export interface IUser {
  id: string;
  name: string;
  last_name: string;
  phone: string;
  email: string;
  description: string;
  cpf: string;
  gender: string;
  social_media: ISocialmedia;
  address: IAddress;
  avatar: IMedia;
  password: string;
  total_progress: number;
}

export interface IAddress {
  id: string;
  name: string;
  cep: string;
  country: string;
  state: string;
  city: string;
  neighborhood: string;
  street: string;
  number: string;
  complement: string;
}

export interface ISocialmedia {
  id: string;
  instagram: string;
  facebook: string;
  twitter: string;
  linkedin: string;
  tiktok: string;
  youtube: string;
}

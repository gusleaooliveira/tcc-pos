import { z } from "zod";

export const myDataSchema = z.object({
  name: z.string(),
  last_name: z.string(),
  phone: z.string(),
  description: z.string(),
  cpf: z.string(),
  gender: z.string(),
  address: z.object({
    name: z.string(),
    cep: z.string(),
    country: z.string(),
    state: z.string(),
    city: z.string(),
    neighborhood: z.string(),
    street: z.string(),
    number: z.string(),
    complement: z.string(),
  }),
  social_media: z.object({
    instagram: z.string(),
    facebook: z.string(),
    twitter: z.string(),
    linkedin: z.string(),
    tiktok: z.string(),
    youtube: z.string(),
  }),
});

export type IMyDataSchema = z.infer<typeof myDataSchema>;

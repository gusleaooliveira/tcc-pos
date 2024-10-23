import { z } from "zod";
import { emailSchema, passwordSchema } from "./schemasDefault";

export const loginSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
});

export type ILoginSchema = z.infer<typeof loginSchema>;

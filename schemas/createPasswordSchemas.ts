import { z } from "zod";
import { passwordSchema } from "./schemasDefault";

export const createPasswordSchema = z.object({
  password: passwordSchema,
  confirmPassword: passwordSchema,
});

export type ICreatePasswordSchema = z.infer<typeof createPasswordSchema>;

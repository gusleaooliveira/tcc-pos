import { z } from "zod";
import { emailSchema } from "./schemasDefault";

export const forgotYourPasswordSchema = z.object({
  email: emailSchema,
});

export type IForgotYourPassword = z.infer<typeof forgotYourPasswordSchema>;

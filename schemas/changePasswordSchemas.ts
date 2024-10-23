import { z } from "zod";
import { passwordSchema } from "./schemasDefault";

export const changePasswordSchema = z
  .object({
    currentPassword: passwordSchema,
    newPassword: passwordSchema,
    confirmNewPassword: passwordSchema,
  })
  .refine((data) => data.confirmNewPassword === data.newPassword, {
    path: ["ConfirmNewPassword"],
    message: "As senhas não correspondem",
  });

export type IChangePasswordSchema = z.infer<typeof changePasswordSchema>;

import { z } from "zod";

export const emailSchema = z.string().email("Digite um e-mail válido");
export const passwordSchema = z
  .string({ message: "Campo obrigatório" })
  .regex(/[A-Z]/, {
    message: "A senha deve conter ao menos uma letra maiúscula",
  })
  .regex(/[a-z]/, {
    message: "A senha deve conter ao menos uma letra minúscula",
  })
  .regex(/[0-9]/, { message: "A senha deve conter ao menos um número" })
  .min(8, { message: "A senha deve ter no mínimo 8 caracteres" });

"use client";
import React, { useState } from "react";
import Input from "@/components/Input";
import { PiEnvelopeSimpleFill } from "react-icons/pi";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "@/components/Button";
import {
  forgotYourPasswordSchema,
  IForgotYourPassword,
} from "@/schemas/forgotYourPassword";
import { TickCircle } from "iconsax-react";

export default function Form() {
  const [showSendPassword, setShowSendPassword] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { isDirty },
  } = useForm<IForgotYourPassword>({
    mode: "onBlur",
    resolver: zodResolver(forgotYourPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (data: IForgotYourPassword) => {
    console.log("🚀 ~ data:", data, showSendPassword);
    setShowSendPassword(true);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full h-full flex flex-col justify-between"
    >
      <div>
        <Controller
          control={control}
          name="email"
          render={({ field, fieldState: { error } }) => (
            <Input
              type="email"
              label="E-mail"
              placeholder="Digite seu e-mail"
              leftIcon={<PiEnvelopeSimpleFill size={28} color="#FFFFFF" />}
              error={!!error?.message ? error.message : ""}
              {...field}
            />
          )}
        />
        {showSendPassword ? (
          <>
            <div className="w-full bg-[#021705] rounded-lg flex justify-start items-center gap-2 p-3 mt-7">
              <TickCircle color="#169A3B" size={24} className="min-w-[24px]" />
              <span className="text-sm font-normal text-[#169A3B]">
                Link para alterar senha foi enviado com sucesso
              </span>
            </div>
            <div className="mt-3 gap-1 flex">
              <span className="text-xs font-light text-white">
                Ainda não recebeu?
              </span>
              <button className="text-xs font-medium text-[#F4C91D] underline">
                Reenviar link
              </button>
            </div>
          </>
        ) : null}
      </div>
      <div className="flex mt-12">
        <Button
          text="Enviar"
          color="yellow"
          variant="filled"
          disabled={!isDirty}
        />
      </div>
    </form>
  );
}

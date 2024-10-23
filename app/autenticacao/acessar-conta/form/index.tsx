"use client";

import React, { useState } from "react";
import Input from "@/components/Input";
import { Controller, useForm } from "react-hook-form";
import {
  PiEnvelopeSimpleFill,
  PiEyeFill,
  PiEyeSlashFill,
  PiPasswordFill,
} from "react-icons/pi";
import { ILoginSchema } from "@/schemas/loginSchemas";
import Button from "@/components/Button";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Form() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const {
    control,
    handleSubmit,
    formState: { isDirty },
  } = useForm<ILoginSchema>({
    mode: "onBlur",
    // resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: ILoginSchema) => {
    const result = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });

    if (result?.error) {
      if (result?.error === "CredentialsSignin") {
        setError("Email ou senha inválidos");
      } else {
        setError("Algo deu errado, entre em contanto com o suporte");
      }
      return;
    }

    router.replace("/meus-cursos");
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex-col w-full gap-11 mt-3 lg:mt-7 2xl:mt-[60px]">
        <div className="flex pb-8">
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
        </div>
        <div className="flex pb-8">
          <Controller
            control={control}
            name="password"
            render={({ field, fieldState: { error } }) => (
              <Input
                label="Senha"
                placeholder="Digite sua senha"
                leftIcon={<PiPasswordFill size={28} color="#FFFFFF" />}
                rightIcon={
                  showPassword ? (
                    <PiEyeSlashFill
                      size={28}
                      color="#FFFFFF"
                      onClick={togglePasswordVisibility}
                    />
                  ) : (
                    <PiEyeFill
                      size={28}
                      color="#FFFFFF"
                      onClick={togglePasswordVisibility}
                    />
                  )
                }
                type={showPassword ? "text" : "password"}
                error={!!error?.message ? error.message : ""}
                {...field}
              />
            )}
          />
        </div>
      </div>
      <div className="flex flex-col mt-8 2xl:mt-[30px] relative">
        <Button
          icon={true}
          text="Acessar"
          color="yellow"
          variant="filled"
          disabled={!isDirty}
        />
        {!!error ? (
          <p
            className={`absolute top-[66px] left-0 text-sm ${error ? "text-red-600" : "text-[#757678]"}`}
          >
            {error}
          </p>
        ) : null}
      </div>
      <a
        href="/autenticacao/esqueceu-sua-senha"
        className="flex w-full justify-center hover:underline text-[#F4C91D] mt-5"
      >
        Recuperar senha
      </a>
    </form>
  );
}

"use client";
import React, { useState } from "react";
import Input from "@/components/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { PiEyeFill, PiEyeSlashFill, PiPasswordFill } from "react-icons/pi";
import {
  ICreatePasswordSchema,
  createPasswordSchema,
} from "@/schemas/createPasswordSchemas";
import { useRouter } from "next/navigation";
import Button from "@/components/Button";

export default function Form() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigation = useRouter();

  const {
    control,
    handleSubmit,
    formState: { isDirty },
  } = useForm<ICreatePasswordSchema>({
    mode: "onBlur",
    resolver: zodResolver(createPasswordSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const handleFilterForms = (data: ICreatePasswordSchema) => {
    console.log(data);
    navigation.replace("/meus-cursos");
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <form
      onSubmit={handleSubmit(handleFilterForms)}
      className="flex flex-col justify-between h-[100vh] mt-3 "
    >
      <div className="flex-col w-full">
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
              error={!!error?.message ? error.message : ""}
              type={showPassword ? "text" : "password"}
              requiredField={true}
              {...field}
            />
          )}
        />
        <div className="flex mt-6">
          <Controller
            control={control}
            name="confirmPassword"
            render={({ field, fieldState: { error } }) => (
              <Input
                label="Confirme sua senha"
                placeholder="Re-digite sua senha"
                leftIcon={<PiPasswordFill size={28} color="#FFFFFF" />}
                rightIcon={
                  showConfirmPassword ? (
                    <PiEyeSlashFill
                      size={28}
                      color="#FFFFFF"
                      onClick={toggleConfirmPasswordVisibility}
                    />
                  ) : (
                    <PiEyeFill
                      size={28}
                      color="#FFFFFF"
                      onClick={toggleConfirmPasswordVisibility}
                    />
                  )
                }
                error={!!error?.message ? error.message : ""}
                type={showPassword ? "text" : "password"}
                requiredField={true}
                {...field}
              />
            )}
          />
        </div>
      </div>
      <div className="flex mt-5">
        <Button
          icon={false}
          text="Criar senha"
          color="yellow"
          variant="filled"
          disabled={!isDirty}
        />
      </div>
    </form>
  );
}

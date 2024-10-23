import React, { useState, useEffect } from "react";
import Image from "next/image";
import delete_element from "@/public/img/x.svg";
import pass from "@/public/img/pass.svg";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  changePasswordSchema,
  IChangePasswordSchema,
} from "@/schemas/changePasswordSchemas";
import { PiEyeFill, PiEyeSlashFill, PiPasswordFill } from "react-icons/pi";
import { CloseCircle, TickCircle } from "iconsax-react";
import Input from "@/components/Input";
import Button from "@/components/Button";

interface IProps {
  open: boolean;
  onClose: () => void;
}

const ChangePassword = (props: IProps) => {
  const { open, onClose } = props;

  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmNewPassword, setShowConfirmNewPassword] = useState(false);

  const [hasNumber, setHasNumber] = useState(false);
  const [hasUpperCase, setHasUpperCase] = useState(false);
  const [hasMinLength, setHasMinLength] = useState(false);
  const [hasLowerCase, setHasLowerCase] = useState(false);
  const [hasSpecialChar, setHasSpecialChar] = useState(false);

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors, isDirty, isValid },
  } = useForm<IChangePasswordSchema>({
    mode: "onSubmit",
    resolver: zodResolver(changePasswordSchema),
  });
  console.log("🚀 ~ ChangePassword ~ watch:", watch(), errors);

  const validatePassword = (password: string) => {
    setHasNumber(/\d/.test(password));
    setHasUpperCase(/[A-Z]/.test(password));
    setHasLowerCase(/[a-z]/.test(password));
    setHasMinLength(password.length >= 8);
    setHasSpecialChar(/[!@#$%^&*(),.?":{}|<>]/.test(password));
  };

  const toggleCurrentPasswordVisibility = () => {
    setShowCurrentPassword(!showCurrentPassword);
  };

  const toggleNewPasswordVisibility = () => {
    setShowNewPassword(!showNewPassword);
  };

  const toggleConfirmNewPasswordVisibility = () => {
    setShowConfirmNewPassword(!showConfirmNewPassword);
  };

  const handleFilterForms = (data: IChangePasswordSchema) => {
    console.log(data);
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <div
      className={`fixed flex justify-center items-center transition-colors z-50 w-full left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] h-full
        ${open ? "visible bg-black/40" : "invisible"}
        `}
    >
      <div className="fixed inset-0 z-50 bg-black/80" />
      <div
        onClick={(e) => e.stopPropagation()}
        className={`
          bg-black rounded-xl shadow transition-all duration-300 w-[382px] min-h-[640px] z-50 flex flex-col justify-center items-center 
          ${open ? "scale-100 opacity-100" : "scale-50 opacity-0"}
          `}
      >
        <form
          onSubmit={handleSubmit(handleFilterForms)}
          className="flex flex-col justify-between items-center w-full h-full"
        >
          <div className="flex w-full justify-between items-center px-6 border-b-[1px] border-[#d9d9d92c] py-2">
            <span className="text-base text-white font-medium">
              Alterar Senha
            </span>
            <button
              className="h-7 w-7 bg-[#1C1C1C] rounded-lg justify-center items-center flex"
              onClick={handleClose}
            >
              <Image src={delete_element} alt="fechar" width={15} height={15} />
            </button>
          </div>
          <div className="flex flex-col justify-center items-center gap-4 mx-4">
            <div className="flex flex-col justify-center items-center">
              <Image
                src={pass}
                alt="Ícone de senha"
                height={56}
                width={56}
                className="mt-6"
              />
              <span className="text-lg text-white font-medium mt-1 text-center">
                Para a sua segurança <br /> confirme sua senha atual.
              </span>
            </div>
            <Controller
              control={control}
              name="currentPassword"
              render={({ field, fieldState: { error } }) => (
                <Input
                  label="Senha Atual"
                  placeholder="Digite sua senha"
                  leftIcon={<PiPasswordFill size={28} color="#FFFFFF" />}
                  rightIcon={
                    showCurrentPassword ? (
                      <PiEyeSlashFill
                        size={28}
                        color="#FFFFFF"
                        onClick={toggleCurrentPasswordVisibility}
                      />
                    ) : (
                      <PiEyeFill
                        size={28}
                        color="#FFFFFF"
                        onClick={toggleCurrentPasswordVisibility}
                      />
                    )
                  }
                  error={!!error?.message ? error.message : ""}
                  type={showCurrentPassword ? "text" : "password"}
                  requiredField={true}
                  {...field}
                />
              )}
            />
            <Controller
              control={control}
              name="newPassword"
              render={({ field, fieldState: { error } }) => (
                <Input
                  label="Nova Senha"
                  placeholder="Digite sua nova senha"
                  leftIcon={<PiPasswordFill size={28} color="#FFFFFF" />}
                  rightIcon={
                    showNewPassword ? (
                      <PiEyeSlashFill
                        size={28}
                        color="#FFFFFF"
                        onClick={toggleNewPasswordVisibility}
                      />
                    ) : (
                      <PiEyeFill
                        size={28}
                        color="#FFFFFF"
                        onClick={toggleNewPasswordVisibility}
                      />
                    )
                  }
                  error={!!error?.message ? error.message : ""}
                  type={showNewPassword ? "text" : "password"}
                  requiredField={true}
                  {...field}
                  onChange={(e) => {
                    field.onChange(e);
                    validatePassword(e.target.value);
                  }}
                />
              )}
            />
            <Controller
              control={control}
              name="confirmNewPassword"
              render={({ field, fieldState: { error } }) => (
                <Input
                  label="Confirme sua nova senha"
                  placeholder="Confirme sua nova senha"
                  leftIcon={<PiPasswordFill size={28} color="#FFFFFF" />}
                  rightIcon={
                    showConfirmNewPassword ? (
                      <PiEyeSlashFill
                        size={28}
                        color="#FFFFFF"
                        onClick={toggleConfirmNewPasswordVisibility}
                      />
                    ) : (
                      <PiEyeFill
                        size={28}
                        color="#FFFFFF"
                        onClick={toggleConfirmNewPasswordVisibility}
                      />
                    )
                  }
                  error={!!error?.message ? error.message : ""}
                  type={showConfirmNewPassword ? "text" : "password"}
                  requiredField={true}
                  {...field}
                />
              )}
            />
            <div className="flex flex-col justify-center items-start w-full gap-1 mb-2">
              <span className="text-[14px] font-normal text-white">
                A senha deve possuir:
              </span>
              <div className="flex flex-wrap gap-3 items-center">
                <div className="flex justify-center items-center gap-1">
                  {hasNumber ? (
                    <TickCircle color="#169A3B" size={20} />
                  ) : (
                    <CloseCircle color="#D63131" size={20} />
                  )}
                  <span className="text-[13px] font-light text-white">
                    Número
                  </span>
                </div>
                <div className="flex justify-center items-center gap-1">
                  {hasLowerCase ? (
                    <TickCircle color="#169A3B" size={20} />
                  ) : (
                    <CloseCircle color="#D63131" size={20} />
                  )}
                  <span className="text-[13px] font-light text-white">
                    Letra minúscula
                  </span>
                </div>
                <div className="flex justify-center items-center gap-1">
                  {hasUpperCase ? (
                    <TickCircle color="#169A3B" size={20} />
                  ) : (
                    <CloseCircle color="#D63131" size={20} />
                  )}
                  <span className="text-[13px] font-light text-white">
                    Letra maiúscula
                  </span>
                </div>
                <div className="flex justify-center items-center gap-1">
                  {hasMinLength ? (
                    <TickCircle color="#169A3B" size={20} />
                  ) : (
                    <CloseCircle color="#D63131" size={20} />
                  )}
                  <span className="text-[13px] font-light text-white">
                    Oito Caracteres
                  </span>
                </div>
                <div className="flex justify-center items-center gap-1">
                  {hasSpecialChar ? (
                    <TickCircle color="#169A3B" size={20} />
                  ) : (
                    <CloseCircle color="#D63131" size={20} />
                  )}
                  <span className="text-[13px] font-light text-white">
                    Caractere Especial
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex h-24 w-full justify-center items-center px-4 pt-6 pb-4 border-t-[1px] border-[#d9d9d92c] ">
            <Button
              color="yellow"
              variant="filled"
              text="Alterar Senha"
              icon={false}
              onClick={() => {}}
              disabled={!isValid}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;

import React from "react";
import cards_darcio from "@/public/img/cards_darcio.png";
import logo_dr from "@/public/img/logo_dr.svg";
import pass from "@/public/img/pass.svg";
import Image from "next/image";
import Form from "./form";

export default function CreatePassword() {
  return (
    <div className="flex lg:flex-row items-center w-full">
      <Image
        src={cards_darcio}
        alt="Background Login"
        height={1920}
        width={1080}
        priority={true}
        className="hidden lg:block lg:h-screen lg:min-h-screen w-full lg:w-[596px] xl:w-[780px] 2xl:w-full object-cover"
      />
      <div className="flex flex-col w-full h-[100vh] px-6 md:px-12 lg:relative lg:ml-auto lg:w-[873px] bg-[#010101] lg:px-10">
        <div className="flex justify-start items-center">
          <Image
            src={logo_dr}
            height={1080}
            width={1179}
            alt="Logo Dr. Darci Pinheiro"
            className="h-[75px] w-[164px] mt-6"
          />
        </div>
        <div>
          <Image
            src={pass}
            alt="Ícone de senha"
            height={86}
            width={86}
            className="h-[72px] w-[72px] lg:h-[86px] lg:w-[86px] mt-6"
          />
          <p className="font-semibold text-[#FFFFFF] text-[28px] xl:text-[36px] leading-[48px] mt-4">
            Seja muito bem vindo(a).
          </p>
          <p className="font-light text-[#FFFFFF] text-[14px] leading-[32px] lg:leading-[24px] mt-4">
            Vamos criar sua senha de acesso ao curso, preencha os campos abaixo.
            Sua senha deve conter no mínimo{" "}
            <span className="font-bold">oito caracteres</span>, uma{" "}
            <span className="font-bold">letra minúscula</span>, uma{" "}
            <span className="font-bold">letra maiúscula</span> e{" "}
            <span className="font-bold">um número.</span>
          </p>
        </div>
        <Form />
      </div>
    </div>
  );
}

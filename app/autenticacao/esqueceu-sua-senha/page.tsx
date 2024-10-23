import React from "react";
import cards_darcio from "@/public/img/cards_darcio.png";
import logo_dr_mobile from "@/public/img/logo_dr_mobile.svg";
import password from "@/public/img/pass.svg";
import Image from "next/image";
import Form from "./form";

export default function ForgotYourPassword() {
  return (
    <div className="flex flex-col lg:flex-row items-center w-full h-[100vh]">
      <Image
        src={cards_darcio}
        alt="Background Login"
        height={1920}
        width={1080}
        priority={true}
        className="h-[230px] sm:h-[300px] lg:h-screen lg:min-h-screen w-full lg:w-[596px] xl:w-[780px] 2xl:w-full object-cover"
      />
      <div className="flex flex-col w-full h-full justify-between pt-6 px-6 sm:px-12 lg:h-screen lg:relative lg:ml-auto lg:w-[873px] bg-[#010101]">
        <div className="hidden lg:flex lg:justify-start lg:items-center lg:w-full">
          <Image
            src={logo_dr_mobile}
            height={1080}
            width={1920}
            alt="Logo Dr. Darci Pinheiro"
            className="h-[75px] w-[164px] mt-[20px]"
          />
        </div>
        <div className="flex flex-col mt-6 lg:mt-10">
          <Image src={password} alt="Background Login" height={86} width={86} />
          <span className="text-[28px] font-semibold text-white mt-3">
            Esqueceu sua senha ?
          </span>
          <p className="text-sm font-light text-white mt-3 mb-6 w-full">
            Digite o seu e-mail de cadastro para iniciarmos o processo de
            recuperação da sua senha.
          </p>
        </div>
        <Form />
      </div>
    </div>
  );
}

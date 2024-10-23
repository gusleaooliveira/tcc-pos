import React, { Suspense } from "react";
import cards_darcio from "@/public/img/cards_darcio.png";
import logo_dr_mobile from "@/public/img/logo_dr_mobile.svg";
import logo_dr from "@/public/img/logo_dr.svg";
import Image from "next/image";
import Form from "./form";

export default async function Page() {
  return (
    <div className="flex flex-col lg:flex-row items-center w-full">
      <Image
        src={cards_darcio}
        alt="Background Login"
        height={1920}
        width={1080}
        priority={true}
        className="h-[230px] sm:h-[350px] md:h-[400px] lg:h-screen lg:min-h-screen w-full lg:w-[60%] object-cover"
      />
      <div className="min-h-[calc(100vh-230px)] sm:min-h-[calc(100vh-350px)] md:min-h-[calc(100vh-400px)] lg:h-screen bg-[#010101] overflow-y-auto lg:w-[40%] w-screen flex flex-col justify-between">
        <div className="hidden lg:flex lg:justify-start lg:items-center lg:w-full lg:px-12 2xl:px-20">
          <Image
            src={logo_dr}
            height={1080}
            width={1179}
            alt="Logo Dr. Darci Pinheiro"
            className="h-[75px] w-[164px] mt-[50px] lg:mt-[20px] 2xl:mt-[50px]"
          />
        </div>
        <div className="flex flex-col w-full lg:justify-center lg:relative lg:ml-auto">
          <div className="flex lg:hidden justify-start items-center p-6 px-10">
            <Image
              src={logo_dr_mobile}
              height={228}
              width={430}
              alt="Logo Dr. Darci Pinheiro"
              className="h-[65px] w-[140px]"
            />
          </div>
          <div className="flex flex-col p-6 px-10 lg:px-12 2xl:px-20">
            <div>
              <p className="text-[#F4C91D] font-medium text-sm xl:text-base pb-2">
                VIDA SAUDÁVEL É O NOVO LUXO
              </p>
              <p className="text-[#FFFFFF] font-semibold text-[28px] sm:text-3xl xl:text-4xl w-full">
                Acesse conhecimentos que transformarão a sua vida.
              </p>
            </div>
            <Form />
          </div>
        </div>
        <div className="flex justify-center items-center gap-[10px] p-4 h-fit w-full bg-[#0B0B0B]">
          <p className="text-[#FFFFFF] font-light text-base">
            Ainda não possui uma conta?
          </p>
          <button type="button" className="text-[#F4C91D] underline">
            Cadastre-se aqui
          </button>
        </div>
      </div>
    </div>
  );
}

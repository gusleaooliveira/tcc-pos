import Image from "next/image";
import React from "react";
import { PiInstagramLogoFill } from "react-icons/pi";
import tablet from "@/public/tablet.png";

export const InstagramBlockMobile = () => {
  return (
    <div className="h-fit w-full rounded-xl bg-[#121212] bg-gradient-to-b from-[#121212] to-[#F4C91D20]">
      <div className="flex flex-col py-10 px-8 sm:px-14 sm:py-[72px]">
        <span className="font-medium text-sm text-[#F4C91D]">
          REDES SOCIAIS
        </span>
        <p className="font-semibold text-[28px] mt-3 text-white sm:text-4xl">
          Siga-me no Instagram para conferir conteúdos de alta qualidade.
        </p>
        <a
          type="button"
          href="https://www.instagram.com/drdarciopinheiro/"
          className="mt-8 relative flex justify-start px-5 items-center h-11 w-full max-w-[224px] overflow-hidden rounded-xl bg-[#F4C91D] before:bg-[#FFE41A] hover:before:translate-x-[700px] transition-all before:absolute before:left-[-200px] before:top-0 before:h-16 before:w-[140px] before:translate-x-44 before:rotate-0 before:opacity-100 before:duration-700 before:filter before:blur-xl"
        >
          <PiInstagramLogoFill size={30} color="#0F0F0F" className="relative" />
          <div className="flex ml-5 gap-1">
            <span className="relative font-light">Acessar</span>
            <span className="relative text-base font-semibold">instagram</span>
          </div>
        </a>
      </div>
      <Image
        src={tablet}
        alt="instagram foto"
        className="rounded-b-xl w-full"
      />
    </div>
  );
};

import Image from "next/image";
import React from "react";
import { PiInstagramLogoFill } from "react-icons/pi";
import blocoInstaDesktop from "@/public/blocoInstaDesktop.png";

export const InstagramBlockWeb = () => {
  return (
    <div className="flex h-fit w-full rounded-xl bg-[#121212] bg-gradient-to-tl from-[#121212] via-[#121212] to-[#F4C91D20]">
      <div className="flex flex-col py-14 px-10 lg:py-20 lg:px-14 xl:py-24 xl:px-24">
        <span className="font-medium text-sm text-[rgb(244,201,29)]">
          REDES SOCIAIS
        </span>
        <p className="font-semibold text-xl md:text-2xl lg:text-3xl xl:text-4xl md:leading-8 mt-3 text-white">
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
        src={blocoInstaDesktop}
        alt="instagram foto"
        height={673}
        width={861}
        className="rounded-r-xl w-full min-w-[300px] min-h-[300px] lg:min-w-[500px] lg:max-w-[800px] lg:max-h-[500px] xl:max-w-[900px]"
      />
    </div>
  );
};

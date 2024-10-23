"use client";
import Image from "next/image";
import React from "react";
import logo_dr_mobile from "@/public/img/logo_dr_mobile.svg";
import houseVector from "@/public/houseVector.svg";
import playVector from "@/public/playVector.svg";
import sealVector from "@/public/sealVector.svg";
import loginVector from "@/public/loginVector.svg";
import EmagrecaFlix from "@/public/EmagrecaFlix.svg";

import { Link } from "iconsax-react";
import MentoriaVip from "./mentoriaVip";

const HeaderMainPage = () => {
  return (
    <div className="w-full h-[100px] gap-[32px] bg-[#0101011b] justify-between backdrop-blur-md flex items-center px-[162px] fixed top-0 z-50">
      <div className="flex gap-[32px] items-center">
        <div>
          <Image
            src={EmagrecaFlix}
            alt="Logo Dr. Darci Pinheiro"
            height={55}
            width={117}
            priority
            className="h-[55px] w-[117px]"
          />
        </div>
        <div>
          <a
            href="/"
            className="flex gap-2 items-center px-2 h-[45px] border-b-2 border-transparent hover:border-yellow-500"
          >
            <Image
              src={houseVector}
              width={24}
              priority={true}
              alt="icon"
              className="object-cover w-[24] h-[24]"
            />
            <p className="text-[16px] text-white">HOME</p>
          </a>
        </div>
        <div>
          <a
            href="/meus-cursos"
            className="flex gap-2 items-center px-2 h-[45px] border-b-2 border-transparent hover:border-yellow-500"
          >
            <Image
              src={playVector}
              width={20}
              priority={true}
              alt="icon"
              className="object-cover w-[24] h-[24]"
            />
            <p className="text-[16px] text-white">VÍDEO</p>
          </a>
        </div>
        <div>
          <a
            href="/autenticacao/acessar-conta"
            className="flex gap-2 items-center px-2 h-[45px] border-b-2 border-transparent hover:border-yellow-500"
          >
            <Image
              src={sealVector}
              width={17}
              priority={true}
              alt="icon"
              className="object-cover w-[24] h-[24]"
            />
            <p className="text-[16px] text-white">ASSINAR</p>
          </a>
        </div>
        <div>
          <a
            href="/autenticacao/acessar-conta"
            className="flex gap-2 items-center px-2 h-[45px] border-b-2 border-transparent hover:border-yellow-500"
          >
            <Image
              src={loginVector}
              width={18}
              priority={true}
              alt="icon"
              className="object-cover w-[24] h-[24]"
            />
            <p className="text-[16px] text-white">LOGIN</p>
          </a>
        </div>
      </div>
      <div>
        <MentoriaVip />
      </div>
      {/* <a href="http://localhost:3000/vip">
        <div>
          <Image
            src={MentoriaVip}
            width={100}
            priority={true}
            alt="icon"
            className="w-[187px] h-[38px]"
          />
        </div>
      </a> */}
    </div>
  );
};

export default HeaderMainPage;

import Image from "next/image";
import React from "react";
import houseVector from "@/public/houseVector.svg";
import playVector from "@/public/playVector.svg";
import sealVector from "@/public/sealVector.svg";
import loginVector from "@/public/loginVector.svg";

const FooterMobile = () => {
  return (
    <div className="w-full fixed bottom-0 z-50 h-[100px] flex justify-between items-center bg-[#0F0F0F] px-[30px] sm:px-[80px] gap-4 ">
      <a href="/" className="flex flex-col items-center">
        <Image
          src={houseVector}
          width={45}
          priority={true}
          alt="icon"
          className="object-cover w-[38] h-[38] mb-1"
        />
        <p className="text-[14px] text-white">Home</p>
      </a>
      <a href="/meus-cursos" className="flex flex-col items-center">
        <Image
          src={playVector}
          width={36}
          priority={true}
          alt="icon"
          className="object-cover w-[38] h-[38] mb-2"
        />
        <p className="text-[14px] text-white">Vídeos</p>
      </a>
      <a className="flex flex-col items-center">
        <Image
          src={sealVector}
          width={30}
          priority={true}
          alt="icon"
          className="object-cover w-[38] h-[38] mb-2"
        />
        <p className="text-[14px] text-white">Assinar</p>
      </a>
      <a
        href="/autenticacao/acessar-conta"
        className="flex flex-col items-center"
      >
        <Image
          src={loginVector}
          width={38}
          priority={true}
          alt="icon"
          className="object-cover w-[38] h-[38] mb-2"
        />
        <p className="text-[14px] text-white">Entrar</p>
      </a>
    </div>
  );
};

export default FooterMobile;

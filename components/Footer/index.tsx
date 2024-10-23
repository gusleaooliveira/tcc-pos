import Image from "next/image";
import React from "react";
import logo_dr_mobile from "@/public/img/logo_dr_mobile.svg";

const Footer = () => {
  return (
    <div className="flex h-[61px] w-full bg-[#0C0C0C] justify-between items-center  p-6">
      <span className="text-base font-normal text-[#FFFFFF80]">
        © Todos os direitos reservados
      </span>
      <Image
        src={logo_dr_mobile}
        alt="Imagem de Darci Pinheiro"
        height={37}
        width={80}
        priority
        className="h-[37px] w-[80px]"
      />
    </div>
  );
};

export default Footer;

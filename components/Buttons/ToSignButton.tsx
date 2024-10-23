"use client";
import Image from "next/image";
import React, { useState } from "react";
import Icones2 from "@/public/Icones2.svg";
import ModalAssinante from "@/app/_pagina-inicial/modalAssinante";

const ToSignButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <div>
      <button
        onClick={openModal}
        className="flex items-center justify-center gap-4 mt-8 lg:w-[424px]  w-[330px] h-[64px] relative overflow-hidden bg-[#F4C91D] 
      before:bg-[#FFE41A] hover:before:translate-x-[700px] transition-all 
      before:absolute before:left-[-200px] before:top-0 before:h-16 before:w-[140px] 
      before:translate-x-44 before:rotate-0 before:opacity-100 before:duration-700 
      before:filter before:blur-xl 
      rounded-lg lg:flex  text-black text-[16px] 
      p-4 group"
      >
        <span className="absolute inset-y-0 left-0 w-full"></span>
        <Image
          src={Icones2}
          width={28}
          priority={true}
          alt="icon"
          className="object-cover w-[28px] h-[28px]"
        />
        <p className="mr-2 relative font-bold z-10">Assinar</p>
      </button>
      <ModalAssinante isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default ToSignButton;

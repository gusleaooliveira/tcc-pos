"use client";
import ModalAssinante from "@/app/_pagina-inicial/modalAssinante";
import React, { useState } from "react";
import { FaPlayCircle } from "react-icons/fa";

const WatchButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <div>
      <button
        onClick={openModal}
        className="hidden gap-4 mt-8 w-[215px] relative overflow-hidden bg-[#F4C91D] 
              before:bg-[#FFE41A] hover:before:translate-x-[700px] transition-all 
              before:absolute before:left-[-200px] before:top-0 before:h-16 before:w-[140px] 
              before:translate-x-44 before:rotate-0 before:opacity-100 before:duration-700 
              before:filter before:blur-xl 
              rounded-lg lg:flex items-center text-black text-[16px] 
              p-4 group"
      >
        <span className="absolute inset-y-0 left-0 w-full"></span>
        <FaPlayCircle className="w-8 h-8 mr-2 relative z-10" />
        <p className="mr-2 relative font-bold z-10">Assistir aula</p>
      </button>
      <ModalAssinante isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default WatchButton;

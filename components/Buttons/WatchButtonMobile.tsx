"use client";
import ModalAssinante from "@/app/_pagina-inicial/modalAssinante";
import React, { useState } from "react";
import { FaPlayCircle } from "react-icons/fa";

const WatchButtonMobile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <div>
      <button
        onClick={openModal}
        className="w-[56px] h-[56px] flex items-center justify-center bg-[#F4C91D] rounded-full"
      >
        <FaPlayCircle size={32} />
      </button>
      <ModalAssinante isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default WatchButtonMobile;

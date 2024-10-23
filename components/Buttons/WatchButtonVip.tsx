"use client";
import ModalAssinante from "@/app/_pagina-inicial/modalAssinante";
import React, { useState } from "react";

import { CiPlay1 } from "react-icons/ci";

const WatchButtonVip = () => {
  return (
    <div>
      <button
        className=" gap-2 mt-2 w-[200px] flex items-center relative overflow-hidden bg-[#F4C91D] 
              before:bg-[#FFE41A] hover:before:translate-x-[700px] transition-all 
              before:absolute before:left-[-200px] before:top-0 before:h-16 before:w-[140px] 
              before:translate-x-44 before:rotate-0 before:opacity-100 before:duration-700 
              before:filter before:blur-xl 
              rounded-lg lg:flex  text-black text-[16px] 
              p-4 group"
      >
        <span className="absolute inset-y-0 left-0 w-full"></span>
        <CiPlay1 className="  relative z-10" size={32} />
        <p className=" relative text-[16px] font-bold z-10">Assistir agora</p>
      </button>
    </div>
  );
};

export default WatchButtonVip;

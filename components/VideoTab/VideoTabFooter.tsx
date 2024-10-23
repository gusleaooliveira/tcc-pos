"use client";
import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

const VideoTabFooter = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="w-full h-[112px] bg-[#0F0F0F] rounded-lg px-[24px] xl:p-6 flex justify-between items-center transition-all duration-200 hover:outline hover:outline-2 hover:outline-[#F4C91D] mb-10"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col justify-center py-[12px]">
        <div className="w-[176px] flex justify-between">
          <p className="text-[#DAB319] text-[14px]">MÓDULO 2</p>
          <p className="text-[#FFFFFF]">•</p>
          <p className="text-[#FFFFFF] text-opacity-50">12 aulas</p>
        </div>
        <h1 className="text-[15px] sm:text-[20px] font-bold text-left">
          EMAGRECIMENTO FACIAL
        </h1>
      </div>
      <div
        className="relative w-[128px] h-[52px] flex justify-center items-center overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <button
          className={`absolute w-full h-full rounded-lg flex items-center justify-center text-[#FFFFFF] transition-opacity duration-300 ${
            isHovered ? "opacity-0" : "opacity-100"
          }`}
        >
          Acessar
        </button>
        <button
          className={`absolute w-full h-full rounded-lg bg-[#171303] flex items-center justify-center text-[#DAB319] transition-transform duration-900 transform ${
            isHovered ? "translate-x-0" : "translate-x-[150%]"
          }`}
        >
          Acessar
          <IoIosArrowForward className="w-[28px] h-[28px] text-[#DAB319]" />
        </button>
      </div>
    </div>
  );
};

export default VideoTabFooter;

"use client";
import React, { useState, useEffect } from "react";
import Gradient from "@/public/Gradient.svg";
import MentoriaVip2 from "@/public/MentoriaVip2.svg";
import LogosPagamento from "@/public/LogosPagamento.svg";
import { MdDone } from "react-icons/md";
import Image from "next/image";

const BANNER_MOCK = [
  {
    name: "Emagrecimento sustentável completo;",
  },
  {
    name: "Metodologia e abordagem;",
  },
  {
    name: "Emagrecimento facial;",
  },
  {
    name: "Resultados duradouros e manutenção do peso;",
  },
  {
    name: "Emagrecimento avançado;",
  },
  {
    name: "Aumento de energia e bem-estar.",
  },
];

const BannerVip = () => {
  const [timeLeft, setTimeLeft] = useState("00:00:00:00");

  useEffect(() => {
    const countdownDate = new Date("2024-11-05T23:59:59").getTime(); // Data de término da contagem

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = countdownDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft(
          `${days < 10 ? "0" + days : days}:${
            hours < 10 ? "0" + hours : hours
          }:${minutes < 10 ? "0" + minutes : minutes}:${
            seconds < 10 ? "0" + seconds : seconds
          }`
        );
      } else {
        setTimeLeft("00:00:00:00");
      }
    };

    const intervalId = setInterval(updateCountdown, 1000);

    return () => clearInterval(intervalId); // Limpa o intervalo quando o componente for desmontado
  }, []);

  return (
    <div className="w-[320px] sm:w-[408px] h-[712px] lg:h-[812px] bg-[#141414] rounded-lg flex items-center bg-gold-gradient p-[1px]">
      <div className="w-full px-4 h-full relative bg-[#141414] rounded-md flex justify-center items-center">
        <div className="absolute top-0 left-[100px] sm:left-[150px] lg:left-[140px]">
          <Image src={Gradient} width={124} priority={true} alt="icon" />
        </div>
        <div className="flex flex-col gap-4 items-center">
          <div className="flex mb-[24px] items-center justify-center">
            <Image
              src={MentoriaVip2}
              width={600}
              priority={true}
              alt="icon"
              className="w-full h-full"
            />
          </div>
          <div className="flex flex-col items-center">
            <div className="text-[#A1A1A1] ">
              <p>
                de{" "}
                <span className="line-through relative">
                  <span className="before:absolute text-[14px] before:inset-0 before:transform">
                    R$ 999,90
                  </span>
                </span>{" "}
                por
              </p>
            </div>
            <div className="flex gap-1 text-white items-center">
              <p className="text-[18px]">12x de</p>
              <h1 className="md:text-[42px] text-[38px] font-bold">R$ 59,90</h1>
              <p className="text-[18px]">/Ano</p>
            </div>
          </div>
          <button
            className="hidden gap-2 mt-1 mb-1 justify-center w-[200px] relative overflow-hidden bg-[#F4C91D] 
              before:bg-[#FFE41A] hover:before:translate-x-[700px] transition-all 
              before:absolute before:left-[-200px] before:top-0 before:h-16 before:w-[140px] 
              before:translate-x-44 before:rotate-0 before:opacity-100 before:duration-700 
              before:filter before:blur-xl 
              rounded-lg lg:flex items-center text-black text-[16px] 
              p-4 group"
          >
            <span className="absolute inset-y-0 left-0 w-full"></span>
            <p className="mr-2 relative text-[16px] font-medium z-10">
              Assinar mentoria
            </p>
          </button>
          <div className="flex flex-col items-center ">
            <p className="text-[12px] text-white">Esta oferta se encerra em:</p>
            <h1 className="text-[26px] text-[#F4C91D]">{timeLeft}</h1>
          </div>
          <div className="w-full">
            <p className="text-white text-[14px] text-left">Benefícios:</p>
          </div>
          <div className="gap-4">
            {BANNER_MOCK.map((banner, index) => (
              <div key={index} className="flex gap-2 items-center mb-4">
                <MdDone size={22} color="#F4C91D" />
                <p className="text-[#A1A1A1] text-[14px]">{banner.name}</p>
              </div>
            ))}
          </div>
          <div>
            <Image
              src={LogosPagamento}
              width={600}
              priority={true}
              alt="icon"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerVip;

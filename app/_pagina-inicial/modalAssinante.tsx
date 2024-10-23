import Image from "next/image";
import React from "react";
import { createPortal } from "react-dom";
import modal2xl from "@/public/modal2xl.png";
import Icones2 from "@/public/Icones2.svg";
import logoDarcio from "@/public/logoDarcio.svg";
import modalMobile from "@/public/modalMobile.png";
import Link from "next/link";

interface ModalAssinanteProps {
  onClose: () => void;
  isOpen: boolean;
}

const ModalAssinante: React.FC<ModalAssinanteProps> = ({ onClose, isOpen }) => {
  if (!isOpen) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={onClose}
    >
      <div
        className={`relative ${
          window.innerWidth >= 1024
            ? "w-[1600px] h-[600px] rounded-lg"
            : "w-full h-full"
        } `}
        onClick={(e) => e.stopPropagation()} // Impede o clique dentro do modal de fechá-lo
      >
        {/* Imagem de fundo */}
        <Image
          alt="modal"
          src={modal2xl}
          width={1600}
          height={600}
          priority={true}
          objectFit="cover"
          className="absolute hidden lg:block inset-0 rounded-lg"
        />
        <Image
          alt="modal"
          src={modalMobile}
          width={1600}
          height={600}
          priority={true}
          objectFit="cover"
          className="absolute  lg:hidden inset-0 rounded-lg"
        />

        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full p-8">
          {/* Botão Fechar */}
          <button
            onClick={onClose}
            className="absolute top-6 bg-[#1C1C1C] right-6 w-10 h-10 rounded-lg"
          >
            <p className="text-white">X</p>
          </button>

          {/* Conteúdo mobile */}
          <div>
            <div className="lg:hidden mt-[200px]">
              <div className="absolute top-4 left-6">
                <Image
                  src={logoDarcio}
                  width={100}
                  priority={true}
                  alt="icon"
                  className="object-cover w-[100px] h-[48px]"
                />
              </div>
              <div className="mb-8 text-center">
                <p className="text-[24px] sm:text-[36px] mb-4 font-bold text-white">
                  Ainda não é assinante?
                </p>
                <p className="text-[#D9D9D9] px-[24px] text-[14px] sm:text-[20px]">
                  Aperte o botão abaixo e desbloqueie agora mesmo todos os
                  conteúdos exclusivos do
                  <br /> Dr. Dárcio Pinheiro e{" "}
                  <strong className="font-bold">
                    mantenha-se atualizado sobre a ciência
                  </strong>{" "}
                  por trás do emagrecimento.
                </p>
              </div>
              <div className="flex items-center justify-center">
                <Link
                  href="https://drdarciopinheiro.framer.ai/#planos"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    className="flex items-center justify-center gap-4 w-[300px] sm:w-[400px] h-[64px] relative overflow-hidden bg-[#F4C91D] 
                before:bg-[#FFE41A] hover:before:translate-x-[700px] transition-all 
                before:absolute before:left-[-200px] before:top-0 before:h-16 before:w-[140px] 
                before:translate-x-44 before:rotate-0 before:opacity-100 before:duration-700 
                before:filter before:blur-xl 
                rounded-lg lg:flex text-black text-[16px] 
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
                </Link>
              </div>
              <div className=" flex justify-between items-center gap-4 px-6 mt-3">
                <div className="w-full h-[2px] bg-[#FFFFFF50]"></div>
                <p className="text-white">ou</p>
                <div className="w-full h-[2px] bg-[#FFFFFF50]"></div>
              </div>
              <div className="flex items-center justify-center mt-3">
                <Link href="http://localhost:3000/autenticacao/acessar-conta">
                  <button className="px-4 py-2 w-[300px] sm:w-[400px] h-[64px] border-2 border-[#F4C91D] text-[#F4C91D] rounded-lg">
                    Acessar
                  </button>
                </Link>
              </div>
            </div>
            <div className="hidden lg:flex flex-col absolute left-20 top-32 h-full space-y-4">
              <div className="mb-8">
                <Image
                  src={logoDarcio}
                  width={100}
                  priority={true}
                  alt="icon"
                  className="object-cover w-[100px] h-[48px]"
                />
              </div>
              <div className="mb-8">
                <p className="text-[36px] font-bold text-white">
                  Ainda não é assinante?
                </p>
                <p className="text-[#D9D9D9] text-[18px]">
                  Aperte o botão abaixo e desbloqueie agora mesmo todos os
                  conteúdos exclusivos do
                  <br /> Dr. Dárcio Pinheiro e{" "}
                  <strong className="font-bold">
                    mantenha-se atualizado sobre a ciência
                  </strong>{" "}
                  por trás do emagrecimento.
                </p>
              </div>
              <div className="flex pt-10 gap-4">
                <Link
                  href="https://drdarciopinheiro.framer.ai/#planos"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    className="flex items-center justify-center gap-4 w-[392px] h-[64px] relative overflow-hidden bg-[#F4C91D] 
                before:bg-[#FFE41A] hover:before:translate-x-[700px] transition-all 
                before:absolute before:left-[-200px] before:top-0 before:h-16 before:w-[140px] 
                before:translate-x-44 before:rotate-0 before:opacity-100 before:duration-700 
                before:filter before:blur-xl 
                rounded-lg lg:flex text-black text-[16px] 
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
                </Link>
                <a href="http://localhost:3000/autenticacao/acessar-conta">
                  <button className="px-4 py-2 w-[200px] h-[64px] border-2 border-[#F4C91D] text-[#F4C91D] rounded-lg">
                    Acessar
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default ModalAssinante;

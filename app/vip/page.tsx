import WatchButton from "@/components/Buttons/WatchButton";
import HeaderMainPage from "@/components/Header/headerMainPage";
import Rectangle6 from "@/public/Rectangle6.svg";
import MentoriaVipLogo from "@/public/MentoriaVipLogo.svg";
import LogoDarcioPinheiro from "@/public/LogoDarcioPinheiro.svg";
import VisionLogo from "@/public/VisionLogo.svg";
import HDLogo from "@/public/HDLogo.svg";
import ADLogo from "@/public/ADLogo.svg";
import Treinamento from "@/public/Treinamento.svg";
import HeroMentoria from "@/public/HeroMentoria.svg";
import EmagrecaFlix from "@/public/EmagrecaFlix.svg";
import MentoriaVip from "@/public/MentoriaVip.svg";
import MercadoMedicina from "@/public/MercadoMedicina.svg";
import TodasSolucoes from "@/public/TodasSolucoes.svg";
import Chave from "@/public/Chave.svg";
import Hero2 from "@/public/Hero2.svg";
import Image from "next/image";
import React from "react";
import WatchButtonVip from "@/components/Buttons/WatchButtonVip";
import BannerVip from "@/components/Banner/BannerVip";
import Footer from "@/components/Footer";
import { Mobile } from "iconsax-react";
import FooterMobile from "../_pagina-inicial/footerMobile";

const SELOS_MOCK = [
  {
    name: "Mentalidade que prospera",
  },
  {
    name: "Marketing médico, posicionamento e imagem",
  },
  {
    name: "Dificuldades, desafios para implantação de um serviço de High Ticket",
  },
  {
    name: "Pré-venda e pós-venda",
  },
];

const SOLUCOES_MOCK = [
  {
    name: "Entendendo a cabeça do paciente;",
  },
  {
    name: "Fidelização que necessitamos?",
  },
  {
    name: "Plano B de investimentos;",
  },
  {
    name: "Formação e treinamento da equipe;",
  },
  {
    name: "Tratamentos ético de valor.",
  },
  {
    name: "Pilares de uma consulta mágica;",
  },
];

const page = () => {
  return (
    <div className="w-full  overflow-x-hidden">
      <div className="absolute flex top-6 justify-between w-full px-4 items-center lg:hidden z-15">
        <Image
          src={EmagrecaFlix}
          width={100}
          priority={true}
          alt="icon"
          className="object-cover w-[130px] h-[38px]"
        />
        <div>
          <Image
            src={MentoriaVip}
            width={100}
            priority={true}
            alt="icon"
            className="w-[187px] h-[38px]"
          ></Image>
        </div>
      </div>
      <div className="hidden lg:block">
        <HeaderMainPage />
      </div>
      <div className="flex px-[30px] xl:mt-[-100px] lg:mt-[-150px] mt-[0px] 2xl:mt-[-50px] lg:px-[160px] flex-col-reverse lg:flex-row  justify-between items-center">
        <div>
          <div className="flex gap-4 xl:gap-2  flex-col w-full  ">
            <div className="flex items-center gap-4 ">
              <div>
                <Image
                  src={MentoriaVipLogo}
                  width={60}
                  priority={true}
                  alt="icon"
                  className="lg:w-[176px] lg:h-[34px] w-[120px] h-[26px]"
                />
              </div>
              <div
                className="lg:w-[60px] lg:h-[21px] w-[40px] h-[20px] justify-center rounded-sm text-[#F4C91D] 
          flex items-center text-[12px] font-bold bg-[#212121] border-2 
          border-[#D9D9D91F]"
              >
                COM
              </div>
              <div>
                <Image
                  src={LogoDarcioPinheiro}
                  width={60}
                  priority={true}
                  alt="icon"
                  className="lg:w-[153px] lg:h-[52px] w-[102px] h-[40px]"
                />
              </div>
            </div>
            <div className=" flex items-start">
              <Image
                src={Treinamento}
                width={600}
                priority={true}
                alt="icon"
                className="lg:w-[600px] w-full h-[100px] xl:h-[190px]"
              />
            </div>
            <div className="text-white flex-col md:flex-row  items justify-start lg:text-[20px] text-[12px] flex  gap-4">
              <div className="">
                <p>2024 | DÁRCIO PINHEIRO</p>
              </div>
              <div className="flex  gap-4">
                <div
                  className="min-w-[26px] min-h-[28px] max-h-[28px] bg-[#646464] rounded-sm flex 
            items-center justify-center"
                >
                  <p>L</p>
                </div>
                <Image
                  src={VisionLogo}
                  width={60}
                  priority={true}
                  alt="icon"
                  className="w-[76px] h-[24px]"
                />
                <Image
                  src={HDLogo}
                  width={60}
                  priority={true}
                  alt="icon"
                  className="w-[26px] h-[24px]"
                />
                <Image
                  src={ADLogo}
                  width={60}
                  priority={true}
                  alt="icon"
                  className="w-[44px] h-[16px]"
                />
              </div>
            </div>
            <div className="lg:mt-[20px]">
              <WatchButtonVip />
            </div>
          </div>
        </div>

        <div className="lg:w-[870px]  mt-[70px] lg:mt-0 w-[400px] h-[390px] flex items-center justify-center lg:h-[985px] lg:mr-[-100px]">
          <Image
            src={HeroMentoria}
            width={600}
            priority={true}
            alt="icon"
            className="w-[400px] h-[390px] lg:w-[870px] lg:h-[985px]"
          ></Image>
        </div>
      </div>
      <div className="text-white hidden lg:flex items-center justify-center">
        <Image src={MercadoMedicina} width={600} priority={true} alt="icon" />
      </div>
      <div className="flex flex-col lg:flex-row justify-center px-[30px] lg:px-[160px] gap-6 mt-[64px]">
        {SELOS_MOCK.map((selo, index) => (
          <div key={index} className="flex justify-center">
            <div
              className="w-[380px] md:w-[420px] h-[75px] 2xl:w-[380px] 2xl:h-[140px] xl:w-[230px] xl:h-[100px] lg:w-[200px] 
            lg:h-[100px] px-4 flex items-center justify-center   bg-gold-gradient border-2 border-[#d9d9d91f] rounded-lg"
            >
              <p className="2xl:text-[22px] xl:text-[14px] lg:text-[12px] text-[12px] text-center font-medium">
                {selo.name}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col lg:flex-row lg:mt-[200px] mt-[54px] items-center ">
        <div>
          <Image
            src={Hero2}
            width={600}
            priority={true}
            alt="icon"
            className="w-full h-full"
          />
        </div>
        <div className="flex flex-col gap-4">
          <div className="mb-[48px] flex justify-center lg:justify-start ">
            <Image
              src={TodasSolucoes}
              width={400}
              priority={true}
              alt="icon"
              className="2xl:w-[500px] xl:w-[400px] lg:w-[350px] w-[300px] h-full"
            />
          </div>

          <div className="flex flex-col lg:gap-4 xl:mr-[163px] lg:mr-[130px] mr-0">
            {SOLUCOES_MOCK.map((solucao, index) => (
              <div
                key={index}
                className="2xl:w-[686px] xl:w-[580px] w-[320px] md:w-[420px] mb-[24px]  h-[56px] bg-[#110E00] rounded-lg flex items-center bg-gold-gradient p-[1px]"
              >
                <div className="w-full h-full bg-[#110E00] rounded-md flex items-center">
                  <div className="mr-[22px] ml-[22px]">
                    <Image
                      src={Chave}
                      width={63}
                      height={24}
                      priority={true}
                      alt="icon"
                    />
                  </div>

                  <p className="2xl:text-[24px] xl:text-[20px] text-[12px] font-medium bg-text-gradient bg-clip-text text-transparent">
                    {solucao.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-[48px] mb-[48px] lg:mt-[211px] lg:mb-[211px] flex justify-center">
        <BannerVip />
      </div>
      <div className="lg:hidden">
        <FooterMobile />
      </div>
      <Footer />
    </div>
  );
};

export default page;

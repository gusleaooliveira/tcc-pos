import Image from "next/image";
import badge_bronze from "@/public/img/badge_bronze.svg";
import bg_meus_cursos from "@/public/img/bg-meus-cursos.png";
import { PiPlayCircleFill } from "react-icons/pi";
import "swiper/css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { InstagramBlockMobile } from "./instagramBlockMobile";
import { InstagramBlockWeb } from "./instagramBlockWeb";
import { ModulesLessons } from "./modulesLessons";

const MeusCursos = () => {
  return (
    <main className="flex flex-col min-h-screen justify-between w-full bg-[#010101]">
      <Header />
      <div className="flex flex-col mt-[50px]">
        <div className="lg:flex lg:h-[900px] lg:mt-[15px] flex-row-reverse">
          <Image
            src={bg_meus_cursos}
            alt="Background tela 'Meus Cursos'"
            height={1100}
            width={1300}
            priority
            className="h-full w-full object-cover lg:w-[600px] xl:w-[680px] 2xl:w-[1000px]"
          />
          <div className="flex flex-col px-6 md:px-16 mt-[-70px] sm:mt-[-150px] md:mt-[-200px] lg:mt-48 lg:px-6 lg:ml-20 xl:mt-60">
            <div>
              <p className="text-[13px] lg:text-base font-light text-[#F4C91D] leading-6">
                EMAGRECIMENTO SUSTENTÁVEL
              </p>
              <p className="text-[32px] text-[#FFFFFF] leading-10 font-semibold mt-2 lg:text-[48px] xl:mt-3">
                METODOLOGIA
              </p>
              <div className="flex justify-center items-center h-8 w-[91px] bg-[#C09D111A] text-[#FFFFFF80] text-sm lg:text-base font-normal rounded mt-2 lg:mt-6">
                Aula 2 de 8
              </div>
              <p className="text-[#FFFFFF] font-light text-[14px] leading-8 lg:text-lg mt-4">
                Nossa metodologia de emagrecimento sustentável se baseia na{" "}
                adoção de hábitos saudáveis e equilibrados, combinando uma{" "}
                alimentação adequada com a prática regular de exercícios
                físicos.
              </p>
              <button
                type="button"
                className="mt-8 relative flex justify-start px-5 items-center h-14 w-64 overflow-hidden rounded-xl bg-[#F4C91D] before:bg-[#FFE41A] hover:before:translate-x-[700px] transition-all before:absolute before:left-[-200px] before:top-0 before:h-16 before:w-[140px] before:translate-x-44 before:rotate-0 before:opacity-100 before:duration-700 before:filter before:blur-xl"
              >
                <PiPlayCircleFill
                  size={30}
                  color="#0F0F0F"
                  className="relative"
                />
                <div className="flex ml-5 gap-1">
                  <span className="relative text-base font-semibold">
                    Continuar
                  </span>
                  <span className="relative font-light">assistindo</span>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="h-fit p-6 md:px-16 mt-12 flex justify-between bg-[#0D0D0D]">
          <div className="flex flex-col items-start justify-start gap-[6px]">
            <div className="flex gap-2">
              <p className="text-[#F4C91D] font-medium text-sm">
                ESPECIALIZAÇÃO
              </p>
              <span className="h-1 w-1 bg-white rounded-full my-2 mx-1" />
              <p className="text-[#FFFFFF80] font-light text-sm">33 AULAS</p>
            </div>
            <span className="hidden text-white text-[32px] font-extrabold">
              VIDA SAUDÁVEL: ALCANÇANDO O EQUILÍBRIO
            </span>
            <p className="text-white text-xl font-extrabold">VIDA SAUDÁVEL:</p>
            <p className="text-white text-xl font-extrabold">
              ALCANÇANDO O EQUILÍBRIO
            </p>
          </div>
          <div className="h-fit flex flex-col items-center bg-[#171717] rounded-xl p-4 gap-[4px]">
            <Image
              src={badge_bronze}
              alt="Distintivo bronze"
              height={37}
              width={37}
              priority
            />
            <span className="flex text-white text-sm font-normal">36%</span>
            <div className="h-1 w-full bg-[#222222] rounded-[20px]">
              <div
                className="h-full bg-[#169A3B] rounded-2xl"
                style={{ width: "36%" }}
              />
            </div>
          </div>
        </div>
        <ModulesLessons />
        <div className="block md:hidden mt-12 mb-7 mx-6">
          <InstagramBlockMobile />
        </div>
        <div className="hidden md:block mt-12 mb-7 px-16">
          <InstagramBlockWeb />
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default MeusCursos;

import Image from "next/image";
import Rectangle6 from "@/public/Rectangle6.svg";
import VectorMetodologia from "@/public/VectorMetodologia.svg";
import EmagrecaFlix from "@/public/EmagrecaFlix.svg";
import calendarVector from "@/public/calendarVector.svg";
import blocoInstagram from "@/public/blocoInstagram.svg";
import blocoInstagramMobile from "@/public/blocoInstagramMobile.svg";
import MentoriaVip from "@/components/Header/mentoriaVip";
import blocoInstagramMobile2 from "@/public/blocoInstagramMobile2.svg";
import VectorCalendario from "@/public/VectorCalendario.svg";
import Banner1 from "@/public/Banner1.svg";
import App from "@/app/_pagina-inicial/swiper";
import "@vidstack/react/player/styles/base.css";
import FooterMobile from "./_pagina-inicial/footerMobile";
import banner from "@/public/banner.svg";
import { AiFillInstagram } from "react-icons/ai";
import Footer from "@/components/Footer";
import WatchButton from "@/components/Buttons/WatchButton";
import ToSignButton from "@/components/Buttons/ToSignButton";
import WatchButtonMobile from "@/components/Buttons/WatchButtonMobile";
import HeaderMainPage from "@/components/Header/headerMainPage";
import newHero1 from "@/public/newHero1.png";
import newHero1M from "@/public/newHero1M.svg";

import { MOCK_MODULES, MOCK_IMAGES } from "@/mock/product";
import Link from "next/link";
import Modules from "./_pagina-inicial/modules";
import { Suspense } from "react";

const Page = () => {
  return (
    <div className="w-full  overflow-x-hidden">
      <div className="hidden lg:block">
        <HeaderMainPage />
      </div>

      <div className="relative hidden lg:block  pb-[858px]">
        <div className="relative h-full w-full">
          <figure className="absolute right-0 top-10 h-full">
            <Image
              src={newHero1}
              width={600}
              priority={true}
              alt="icon"
              className="object-cover w-[1132px] h-[858px]"
            />
          </figure>
        </div>
        <div className="left-[163px] hidden flex-col gap-6 top-[300px] lg:flex w-full absolute z-10 text-white">
          <div className="text-start w-[900px]">
            <p className="font-light text-[#F4C91D] text-[16px]">
              EMAGRECIMENTO SUSTENTÁVEL
            </p>
            <h1 className="font-bold text-[26px] 2xl:text-[48px]">
              METODOLOGIA DE EMAGRECIMENTO <br></br> SUSTENTÁVEL E EQUILIBRADO.
            </h1>
          </div>
          <div>
            <WatchButton />
          </div>
        </div>
      </div>

      <div>
        <Image
          src={newHero1M}
          width={600}
          priority={true}
          alt="icon"
          className=" w-full h-full lg:hidden"
        />
      </div>
      <div className="absolute flex top-6 justify-between w-full px-4 items-center lg:hidden z-15">
        <Image
          src={EmagrecaFlix}
          width={100}
          priority={true}
          alt="icon"
          className="object-cover w-[130px] h-[38px]"
        />
        <MentoriaVip />
      </div>

      <div className=" absolute z-15 mt-[-100px]  px-[24px] lg:hidden">
        <div className="mb-[32px]">
          <WatchButtonMobile />
        </div>
        <div className="  flex-col  top-[300px] lg:flex w-full  text-white">
          <div className="text-start w-full">
            <p className="font-light mb-2 text-[#F4C91D] text-[16px]">
              EMAGRECIMENTO SUSTENTÁVEL
            </p>
            <h1 className="font-bold text-[20px] ">
              METODOLOGIA DE EMAGRECIMENTO <br></br>SUSTENTÁVEL E EQUILIBRADO.
            </h1>
          </div>
        </div>
      </div>

      <Suspense>
        <div className="w-full h-full xl:pl-[150px] pl-[24px] mt-[190px] ">
          <Modules />
          {/* {MOCK_MODULES.filter((_, index) => index <= 4).map((module, index) => (
          <div key={index}>
            <div className="flex mb-[-30px] mt-[20px] sm:mb-1 gap-2 ml-4">
              <div
                className="w-[25px] h-[25px] mt-[2px] mr-4 transform -skew-x-12 rounded-sm"
                style={{ backgroundColor: module.color }}
              ></div>

              <p
                className="text-[20px] mb-[-30px] sm:mb-1 font-light"
                style={{ color: module.color }}
              >
                {module.name}
              </p>
            </div>
            <App lessons={module.location} color={module.color} />
          </div>
        ))} */}
        </div>
      </Suspense>

      <div className="text-white mt-[46px] xl:mt-[217px] px-[30px] xl:px-[164px] flex flex-col">
        <div className="flex gap-4 mb-[32px] xl:mb-[76px]">
          <Image
            src={VectorCalendario}
            width={24}
            priority={true}
            alt="icon"
            className=" w-[24px] h-[26px]"
          />
          <h1 className="text-[20px] text-[#F4C91D]">CONTEÚDOS EXCLUSIVOS</h1>
        </div>
        <div className="xl:mb-[195px] ">
          <Image
            src={Banner1}
            width={600}
            priority={true}
            alt="icon"
            className="w-full h-full"
          />
        </div>
      </div>

      <div className="w-full h-[510px] bg-[#0F0F0F] mt-[64px] xl:mt-[195px]">
        <div className="flex flex-col items-center justify-center w-full h-full gap-8">
          <h1 className="text-white font bold text-[24px] lg:text-[48px]">
            Ainda não é assinante?
          </h1>
          <p className="text-[#D9D9D9] px-4 text-[14px] lg:text-[18px] text-center">
            Aperte o botão abaixo e desbloqueie agora mesmo todos os conteúdos
            exclusivos do Dr. Dárcio
            <br /> Pinheiro e
            <strong className="font-bold">
              mantenha-se atualizado sobre a ciência
            </strong>{" "}
            por trás do emagrecimento.
          </p>
          <ToSignButton />
        </div>
      </div>
      <div className="relative lg:hidden p-[24px]">
        <Image
          src={blocoInstagramMobile2}
          width={382}
          priority={true}
          alt="icon"
          className="w-full h-full"
        />
        <div className=" bottom-[-50px] sm:bottom-[100px] md:bottom-[180px] absolute left-10  transform -translate-y-1/2">
          <p className="text-[14px] font-light text-[#F4C91D]">REDES SOCIAIS</p>
          <h1 className="text-white font-bold text-[24px] sm:text-[45px] md:sm:text-[55px]">
            Siga-me no Instagram<br></br> para conferir conteúdos <br></br> de
            alta qualidade.
          </h1>

          <Link
            href="https://www.instagram.com/drdarciopinheiro/"
            target="_blank"
            rel="noreferrer"
            className="flex gap-1 mt-8 w-[224px] relative overflow-hidden bg-[#F4C91D] 
        before:bg-[#FFE41A] hover:before:translate-x-[700px] transition-all 
        before:absolute before:left-[-200px] before:top-0 before:h-16 before:w-[140px] 
        before:translate-x-44 before:rotate-0 before:opacity-100 before:duration-700 
        before:filter before:blur-xl 
        rounded-lg lg:flex items-center text-black text-[16px] 
        p-4 group"
          >
            <span className="absolute inset-y-0 left-0 w-full"></span>
            <AiFillInstagram className="w-8 h-8 mr-2 relative z-10" />
            <p className="mr-2 relative flex gap-1 z-10">
              <span className="font-medium text-[16px]">Acessar</span>{" "}
              <span className="font-bold text-[16px]">instagram</span>
            </p>
          </Link>
        </div>
      </div>
      <div className="relative hidden lg:block p-[163px]">
        <Image
          src={banner}
          width={600}
          priority={true}
          alt="icon"
          className="w-full h-full"
        />
        <div className=" absolute top-1/2 2xl:left-[300px] xl:left-[180px] lg:left-[200px] transform -translate-y-1/2">
          <p className="text-[20px] font-light text-[#F4C91D]">REDES SOCIAIS</p>
          <h1 className="text-white font-bold 2xl:text-[48px] xl:text-[40px] lg:text-[30px]">
            Siga-me no Instagram<br></br> para conferir conteúdos <br></br> de
            alta qualidade.
          </h1>
          <Link
            href="https://www.instagram.com/drdarciopinheiro/"
            target="_blank"
            rel="noreferrer"
          >
            <button
              className="hidden gap-4 2xl:mt-16 xl:mt-12 lg:mt-8 w-[276px] relative overflow-hidden bg-[#F4C91D] 
        before:bg-[#FFE41A] hover:before:translate-x-[700px] transition-all 
        before:absolute before:left-[-200px] before:top-0 before:h-16 before:w-[140px] 
        before:translate-x-44 before:rotate-0 before:opacity-100 before:duration-700 
        before:filter before:blur-xl 
        rounded-lg lg:flex items-center text-black text-[16px] 
        p-4 group"
            >
              <span className="absolute inset-y-0 left-0 w-full"></span>
              <AiFillInstagram className="w-8 h-8 mr-2 relative z-10" />
              <p className="mr-2 relative z-10">
                <span className="font-medium">Acessar</span>{" "}
                <span className="font-bold">instagram</span>
              </p>
            </button>
          </Link>
        </div>
      </div>
      <div className="lg:hidden z-50">
        <FooterMobile />
      </div>
      <Footer />
    </div>
  );
};

export default Page;

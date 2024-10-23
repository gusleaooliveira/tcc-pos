import Image from "next/image";
import { MOCK_FOTOS } from "@/resources/mockFotos";
import { MOCK_FOTOS2 } from "@/resources/mockFotos";
import { FaPlayCircle } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { PiLinkedinLogoFill } from "react-icons/pi";
import Blured_darcio from "@/public/Blured_darcio.png";
import Rectangle7 from "@/public/Rectangle7.svg";

import image27 from "@/public/image27.svg";
import textaspas from "@/public/textaspas.svg";

import textaspas2 from "@/public/textaspas2.svg";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "@vidstack/react/player/styles/base.css";

const Page = () => {
  return (
    <>
      <div className=" h-full w-full flex flex-col bg-[#010101]">
        <Header />
        <div>
          <figure className="absolute sm:flex sm:top-[-330px] items-center justify-center xl:hidden w-full h-full z-1">
            <Image
              src={Blured_darcio}
              width={600}
              priority={true}
              alt="icon"
              className="object-cover"
            />
          </figure>
        </div>

        <div className=" h-full flex  xl:flex-row flex-col-reverse  ">
          <div className="flex lg:items-center px-6 xl:px-0 justify-center xl:w-[800px] w-full  flex-col z-10">
            <div className="xl:px-20 ">
              <p className="text-[#F4C91D] text-[16px]">
                VIDA SAUDÁVEL É O NOVO LUXO
              </p>
              <h1 className="font-bold xl:text-[48px] text-[32px] text-white">
                DR. DARCIO PINHEIRO
              </h1>
              <div className="flex">
                <div className="bg-[#0B0B0B] mr-3 lg:w-[57px] w-[49px] flex items-center justify-center rounded-lg p-2">
                  <p className="text-[#7C7C7C] lg:text-[16px] text-[10px]">
                    CRM:
                  </p>
                </div>
                <div className="bg-[#0B0B0B] mr-3 lg:min-w-[110px] w-[84px] flex items-center justify-center rounded-lg p-2">
                  <p className="text-[#7C7C7C] lg:text-[16px] text-[10px]">
                    45574 / RS
                  </p>
                </div>
                <div className="bg-[#0B0B0B] mr-3 lg:w-[110px] w-[92px] flex items-center justify-center rounded-lg p-2">
                  <p className="text-[#7C7C7C] lg:text-[16px] text-[10px]">
                    257252 / SP
                  </p>
                </div>
                <div className="bg-[#0B0B0B] mr-3 lg:w-[102px] w-[86px] flex items-center justify-center rounded-lg p-2">
                  <p className="text-[#7C7C7C] lg:text-[16px] text-[10px]">
                    30476 / BA
                  </p>
                </div>
              </div>

              <p className="text-white xl:text-[24px] text-[14px] mt-6 xl:mt-[48px]">
                Especialista em Nutrologia Esportiva, Emagrecimento,<br></br>
                <br className="xl:hidden" />
                Implantes hormonais e Reposição hormonal.
              </p>
              {/* <button
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
              </button> */}

              <button
                className="hidden  relative overflow-hidden bg-[#F4C91D] before:bg-[#FFE41A] hover:before:translate-x-[700px] transition-all before:absolute before:left-[-200px] before:top-0 before:h-16 before:w-[140px] before:translate-x-44 before:rotate-0 before:opacity-100 before:duration-700 before:filter before:blur-xl 
                rounded-lg lg:flex items-center text-black text-[16px] 
                mt-[48px] px-[48px] py-[16px] group"
              >
                <span className="absolute inset-y-0 left-0  w-full"></span>
                <FaPlayCircle className="w-8 h-8 mr-2 relative z-10" />
                <p className="mr-2 relative z-10">Conheça</p>
                <p className="font-bold relative z-10">minha história</p>
              </button>
            </div>
          </div>
          <div className="xl:relative flex  items-center justify-center xl:w-[1132px] xl:h-[858px] z-10">
            <div className="w-[800px] h-[430px] mt-[100px] xl:mt-0">
              <video
                className="w-full"
                id="videoPlayer"
                width="640"
                controls
                controlsList="nodownload"
                poster="https://cdn.discordapp.com/attachments/1038582122165829724/1268572153918394418/thumb1.png?ex=66cf3062&is=66cddee2&hm=76cd98a68f73672aa5974e294af22647a4dee7b195376f77632cba1f0ce49e1f&"
              >
                <source
                  src="https://d2agu9bx46syqu.cloudfront.net/disturbed-stricken-guitar-cover-by-alex-s_video_1080p.mp4"
                  type="video/mp4"
                ></source>
              </video>
            </div>
          </div>
        </div>

        <div className="flex flex-col mt-[45px] h-full px-6 lg:px-0 lg:mt-0 lg:p-[100px] bg-gradient-to-b from-[#000000] to-[#1c1c1c]">
          <div className="lg:px-[24px]">
            <div className="flex lg:flex-row flex-col items-center justify-center ">
              <div
                className="max-w-[787px] lg:mr-8 mb-[84px] lg:mb-0  justify-between rounded-lg  
              h-full flex  flex-col lg:flex lg:flex-col items-center overflow-hidden"
              >
                <div className="w-full h-auto">
                  <figure className="w-full h-auto">
                    <Image
                      src={Rectangle7}
                      height={100}
                      priority={true}
                      alt="icon"
                      className="w-full h-auto"
                    />
                  </figure>
                </div>
                <div
                  className="flex  mt-[24px] lg:mt-[32px]  lg:h-[224px]  items-center max-w-[787px] 
                lg:p-[32px] p-[16px] rounded-lg bg-[#181818]"
                >
                  <p className="text-white lg:text-[20px] text-[16px]  lg:hidden">
                    Médico com mestrado em medicina estética na ESNECA BUSINESS
                    SCHOOL em Madri, Espanha, com especialização em nutrologia
                    esportiva pela ABRAN em São Paulo.
                  </p>
                  <p className="text-white lg:text-[20px] text-[16px] hidden lg:block ">
                    Possui conhecimentos em ciências da obesidade e sarcopenia
                    pela FANESE, além de ter feito cursos em emagrecimento
                    avançado e tratamento de sarcopenia com o Dr. Gabriel
                    Almeida, e em implantes hormonais e não hormonais com o Dr.
                    Luiz Paulo.
                  </p>
                </div>
              </div>

              <div
                className="max-w-[787px]  justify-between rounded-lg  
              h-full lg:max-h-[1047px] flex flex-col-reverse lg:flex lg:flex-col items-center overflow-hidden"
              >
                <div
                  className="flex lg:mb-[32px] mt-[32px] lg:mt-0  items-center max-w-[787px] lg:h-[224px] 
                lg:p-[32px] p-[16px] rounded-lg bg-[#181818]"
                >
                  <p className="text-white lg:text-[20px] text-[16px] hidden lg:block">
                    Médico com mestrado em medicina estética na ESNECA BUSINESS
                    SCHOOL em Madri, Espanha, com especialização em nutrologia
                    esportiva pela ABRAN em São Paulo.
                  </p>
                  <p className="text-white lg:text-[20px] text-[16px] lg:hidden">
                    Possui conhecimentos em ciências da obesidade e sarcopenia
                    pela FANESE, além de ter feito cursos em emagrecimento
                    avançado e tratamento de sarcopenia com o Dr. Gabriel
                    Almeida, e em implantes hormonais e não hormonais com o Dr.
                    Luiz Paulo.
                  </p>
                </div>
                <div className="w-full h-auto">
                  <figure className="w-full h-auto">
                    <Image
                      src={image27}
                      height={100}
                      priority={true}
                      alt="icon"
                      className="w-full h-auto"
                    />
                  </figure>
                </div>
              </div>
            </div>
            <div className="w-full lg:hidden flex justify-center   mt-[44px]">
              <figure className="w-full  h-auto md:px-20 px-3  flex justify-center">
                <Image
                  src={textaspas}
                  height={100}
                  priority={true}
                  alt="icon"
                />
              </figure>
            </div>
            <div className="w-full hidden lg:flex justify-center  mt-[44px]">
              <figure className="w-[1122px]  h-auto px-20 flex justify-center">
                <Image
                  src={textaspas2}
                  height={100}
                  priority={true}
                  alt="icon"
                />
              </figure>
            </div>

            <div className="w-full mt-[50px]  lg:mt-[100px] mx-auto flex justify-center">
              <p className="text-[24px] text-white">
                Fisioterapeuta graduado pela Unidade Universidade Tiradentes,
                pós-graduado em traumatologia e ortopedia pela Universidade Gama
                Filho <br></br>(Rio de Janeiro, RJ), especializado em Pilates,
                fisioterapia em Salvador, Bahia.<br></br> <br></br>{" "}
                Coproprietário do Centro Rejuvenescer, mentor em cursos de
                tratamento de obesidade e reposição hormonal.
              </p>
            </div>
          </div>
        </div>
        <div className=" mt-[44px]">
          <div className="grid  grid-cols-2 lg:grid-cols-4 gap-2">
            {MOCK_FOTOS.map((item) => (
              <div key={item.id} className="rounded-xl overflow-hidden">
                <figure className="w-full">
                  <Image
                    src={item.photo}
                    width={500}
                    height={600}
                    priority={true}
                    alt="icon"
                  />
                </figure>
              </div>
            ))}
          </div>
        </div>
        <div className="h-full w-full  bg-[#0d0d0d]">
          <div className="h-full lg:px-[24px]  lg:w-[85%] mx-auto bg-[#0D0D0D]  xl:px-0 py-[100px] ">
            <div className="flex w-full px-4 relative   lg:justify-between mb-20 lg:items-end flex-col sm:flex-row">
              <div className="flex w-[350px] md:mr-4 lg:mr-0 md:w-full  lg:w-full  flex-col mb-6 sm:mb-0">
                <p className="text-[#F4C91D]">ESTEJA BEM INFORMADO</p>
                <h1 className="text-white xl:text-[48px] text-[25px] lg:text-[32px]  font-bold">
                  ME ACOMPANHE NAS <br className="md:hidden"></br> REDES SOCIAIS
                </h1>
              </div>
              <div className="flex gap-2 max-w-[400px] sm:mt-8 h-[64px]  justify-between lg:gap-8 lg:flex">
                <a
                  href="https://www.instagram.com/drdarciopinheiro/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 lg:p-4 w-[170px] h-[64px]  bg-[#181818] rounded-lg flex items-center justify-center hover:bg-yellow-500 hover:border-gray-500 border border-transparent group"
                >
                  <button className="flex items-center justify-center w-full h-full gap-2 lg:gap-4">
                    <RiInstagramFill className="text-white  font-bold w-[32px] h-[32px]  group-hover:text-black" />
                    <p className="text-white text-[14px] lg:text-[20px] group-hover:text-black">
                      Instagram
                    </p>
                  </button>
                </a>

                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 lg:p-4 w-[170px] md:w-[200px] h-[64px]  bg-[#181818] rounded-lg flex items-center justify-center hover:bg-yellow-500 hover:border-gray-500 border border-transparent group"
                >
                  <button className="flex items-center justify-center w-full h-full gap-2 lg:gap-4">
                    <PiLinkedinLogoFill className="text-white  font-bold w-[32px] h-[32px]  group-hover:text-black" />
                    <p className="text-white text-[14px] lg:text-[20px] group-hover:text-black">
                      Linkedin
                    </p>
                  </button>
                </a>
              </div>
            </div>
            <div className="grid  grid-cols-2 lg:grid-cols-4 gap-2">
              {MOCK_FOTOS2.map((item) => (
                <div key={item.id} className="">
                  <figure className="w-full">
                    <Image
                      src={item.photo}
                      width={403}
                      priority={true}
                      alt="icon"
                    />
                  </figure>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Page;

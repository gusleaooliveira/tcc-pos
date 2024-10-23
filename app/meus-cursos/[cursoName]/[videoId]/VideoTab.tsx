"use client";
import React, { useEffect, useState } from "react";
import { FaXmark } from "react-icons/fa6";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import ProgressBar from "@/components/ProgressBar";
import Image from "next/image";
import Ellipse from "@/public/Ellipse4.svg";

import VideoTabFooter from "@/components/VideoTab/VideoTabFooter";
import { EStatus, ILesson, IModule } from "@/interfaces/product";
import { FaCheckCircle, FaPlayCircle } from "react-icons/fa";
import { MdOutlinePauseCircleFilled } from "react-icons/md";
import { PiKeyholeFill } from "react-icons/pi";
import { fetchModules, fetchModulesToLessons } from "@/services/hooks/modules";
import { useSession } from "next-auth/react";
import { useParams } from "next/navigation";
import { generateSlug } from "@/services/utils/cleanSlug";
import Link from "next/link";

// function iconsFunction(status: EStatus) {
//   switch (status) {
//     case EStatus.completed:
//       return (
//         <div className="flex items-center justify-center bg-[#222222] rounded-md gap-2 p-2 mr-2">
//           <FaCheckCircle color="#39C15F" className="w-[24px] h-[24px] " />
//           <p>Concluído</p>
//         </div>
//       );
//     case EStatus.started:
//       return (
//         <div className="flex items-center justify-center bg-[#222222] rounded-md gap-2 p-2 mr-2">
//           <FaPlayCircle color="#DA750F" className="w-[24px] h-[24px]" />
//           <p>Assistido</p>
//         </div>
//       );
//     case EStatus.NotStarted:
//       return (
//         <div className="flex items-center justify-center bg-[#222222] rounded-md gap-2 p-2 mr-2">
//           <MdOutlinePauseCircleFilled className="w-[24px] h-[24px] text-[#9B9B9B]" />
//           <p>Não iniciado</p>
//         </div>
//       );
//     default:
//       return (
//         <div className="flex items-center justify-center bg-[#222222] rounded-md gap-2 p-2 mr-2">
//           <PiKeyholeFill className="w-[24px] h-[24px] text-[#9B9B9B]" />
//           <p>Não iniciado</p>
//         </div>
//       );
//   }
// }

const VideoTab = ({ onClose, module }: any) => { 


  // const module = modules.find(
  //   (module) => generateSlug(module.title || "") === cursoName
  // );

 

if(!module){
  return <div>Carregando...</div>
}

const formatVideoTime = (seconds: number): string => {
  const minutes = Math.floor(seconds / 60)
    .toString()
    .padStart(2, '0');
  const remainingSeconds = (seconds % 60).toString().padStart(2, '0');
  return `${minutes}:${remainingSeconds}`;
};

  return (
    <div className="h-full flex justify-center w-full text-white">
      <div className="w-full flex h-full flex-col items-center">
        <div className="w-full h-[208px] bg-[#0D0D0D] rounded-lg px-[24px] xl:px-[24px] flex flex-col p-[24px] justify-between">
          <div className="flex flex-row justify-between">
            <div className="flex mb-[12px] flex-col justify-center">
              <div className="w-[150px] flex gap-1 justify-between">
                <p className="text-[#FFFFFF] text-opacity-50">
                  {module?.number_of_lessons+ " aulas"}
                  
                </p>
              </div>
              <h1 className="text-[20px] uppercase">{module?.title}</h1>
            </div>

            <button
              onClick={onClose}
              className="w-[40px] h-[40px] xl:hidden flex items-center justify-center rounded-lg bg-[#1C1C1C]"
            >
              <FaXmark color="white" className="w-[24px] h-[24px]" />
            </button>
          </div>

          <ProgressBar />
        </div>
        <div className=" w-full px-[24px] xl:px-[24px] h-[52px] flex justify-between items-center mt-[24px]">
          <button className=" w-[278px] h-[52px] rounded-l-lg flex items-center hover:bg-[#FFFFFF50] group">
            <div className="h-[33px]">
              <IoIosArrowBack className="size-8 mr-[12px] group-hover:text-yellow-500" />
            </div>
            <p className="text-[12px] xl:text-[14px]">Aula anterior</p>
          </button>
          <div className="w-[1px] h-[52px] opacity-50 bg-white"></div>
          <button className="w-[278px] h-[52px] rounded-r-lg justify-end flex items-center hover:bg-[#FFFFFF50] group">
            <div className="flex items-center">
              <p className="text-[12px] xl:text-[14px]">Próxima aula</p>
              <div className="h-[33px] group-hover:text-yellow-500">
                <IoIosArrowForward className="size-8 ml-[12px] group-hover:text-yellow-500" />
              </div>
            </div>
          </button>
        </div>
        <div className="cursor-pointer mt-[24px] px-[24px] xl:px-0 flex flex-col items-center w-full h-full">
          {!!module && module?.lessons.map((lesson: ILesson, index: number) => (
            <Link
              href={`/meus-cursos/${generateSlug(module.title)}/${generateSlug(lesson.title)}&videoId=${lesson.id}`}
              key={index}
              className="relative hover:outline hover:outline-2 hover:outline-[#F4C91D] transition-all duration-900  w-full min-h-[152px] flex p-[16px] xl:p-[24px] mb-[16px] items-center bg-[#0E0E0E] overflow-hidden rounded-xl "
            >
              <figure className="right-[-20px] bottom-[-50px] absolute object-fill">
                <Image
                  src={Ellipse}
                  height={200}
                  width={200}
                  priority={true}
                  alt="icon"
                />
              </figure>

              <figure className="relative min-w-[120px] min-h-[120px] xl:w-[137px] xl:h-[127px] mr-4">
                <Image
                  /* @ts-ignore */
                  src={lesson?.miniature?.url}
                  fill
                  priority={true}
                  alt="icon"
                />
              </figure>

              <div className="h-full justify-between flex flex-col">
                <div className="">
                  <p className="text-[14px] flex text-[#FFFFFF] opacity-50">
                    Aula {lesson.order + 1}
                  </p>

                  <h1 className="text-[14px] uppercase text-left xl:text-[16px] flex font-bold text-[#FFFFFF]">
                    {lesson.title}
                  </h1>
                </div>

                <div className="flex flex-col justify-between">
                  <div className="flex flex-col sm:flex-row">
                    <div className="flex items-center justify-center bg-[#222222] rounded-md gap-2 p-2 mr-2">
                      <FaCheckCircle
                        color="#39C15F"
                        className="w-[24px] h-[24px] "
                      />
                      <p>Concluído</p>
                    </div>

                    <div className="flex items-center">
                      <p className="text-[14px] mr-1 sm:mr-3 text-[#FFFFFF] opacity-50">
                        {formatVideoTime(lesson.time)}
                      </p>

                      <p className="text-[14px] text-[#FFFFFF] opacity-50">
                        {lesson?.time_read?.percentage_completed + " % "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}

          <div className="w-full hidden xl:block border-t border-dashed border-white opacity-50 mb-[24px]"></div>
          <VideoTabFooter />
        </div>
      </div>
    </div>
  );
};

export default VideoTab;

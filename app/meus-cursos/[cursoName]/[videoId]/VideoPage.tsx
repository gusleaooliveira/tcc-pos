"use client";
import { IoIosArrowBack } from "react-icons/io";
import LikeButton from "@/components/Buttons/LikeButton";
import DrawerVideoPage from "@/components/Drawer/DrawerVideoPage";
import TabsVideoPage from "@/components/Tabs/TabsVideoPage";
import { useParams } from "next/navigation";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { ILesson } from "@/interfaces/product";
import { fetchLessons, fetchLessonsByModuleId } from "@/services/hooks/lessons";
import { socket } from "@/services/hooks/socket";

const VideoPage = ({ lesson,  cursoName, user_id }: { lesson: ILesson, cursoName: string, user_id: string }) => {
 
  console.log("🚀 ~ videoId:", lesson);
  console.log("🚀 ~ cursoName:", cursoName);
  const [videoTime, setVideoTime] = useState(0);

  if(!lesson){
    return <div>Carregando...</div>
  }


  useEffect(() => {
    socket.on('connect', () => {
      console.log('Conectado ao servidor');
    });

    socket.on('updateLessonProgressResponse', (data) => {
      console.log(data);
    });

    return () => {
      socket.off('updateLessonProgressResponse');
      socket.off('connect');
    };
  }, [socket]);

  useEffect(() => {
    if (videoTime > 0) {
      socket.emit('updateLessonProgress', {
        user_id: user_id,
        lesson_id: lesson.id,
        time: videoTime,
      });
    }
  }, [videoTime, lesson, user_id]);


  return (
    <div className="w-full  h-full xl:mr-[25px]">
      <div className="px-[24px] xl:px-0 flex w-full items-center justify-center xl:hidden">
        <div className="flex w-full flex-col">
          <a
            href="/meus-cursos"
            className="w-[190px] h-[52px] rounded-l-lg flex items-center hover:bg-[#FFFFFF50] group"
          >
            <div className="h-[33px]">
              <IoIosArrowBack className="size-8 mr-[12px] group-hover:text-yellow-500" />
            </div>
            <p>Voltar</p>
          </a>
          <div className="flex w-full justify-center">
            <div className="flex  w-full">
              <div className="w-full h-[120px] flex  justify-between rounded-md mb-[32px] ">
                <div className="">
                  <div className="flex flex-row  space-x-2">
                    <p className="text-[14px] text-[#F4C91D]">MÓDULO 1</p>
                    <p>•</p>
                    <p className="text-[14px] text-[#ffffff50]">8 aulas</p>
                  </div>
                  <h1 className="text-[20px] text-[white] font-bold">
                    EMAGRECIMENTO SUSTENTÁVEL
                  </h1>
                </div>
                <DrawerVideoPage />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full mb-[42px]">
        <div className="xl:relative w-full h-full rounded-lg">
          <div className="w-full ">
            {lesson?.video?.url ? (
              <video
                className="w-full"
                id="videoPlayer"
                width="640"
                controls
                controlsList="nodownload"
                poster="https://cdn.discordapp.com/attachments/1038582122165829724/1268572153918394418/thumb1.png?ex=66cf3062&is=66cddee2&hm=76cd98a68f73672aa5974e294af22647a4dee7b195376f77632cba1f0ce49e1f&"
                onTimeUpdate={(e) => {
                  const videoElement = e.target as HTMLVideoElement;
                  setVideoTime(videoElement.currentTime);  
                }}
              >
                <source src={lesson?.video?.url} type="video/mp4"

                ></source>
              </video>
            ) : null}
          </div>
        </div>
      </div>

      <div className="px-[24px] xl:px-0 w-full flex flex-col justify-center mb-10 md:h-auto">
        <div className="flex justify-between">
          <div className="flex flex-col md:flex-row md:items-center md:w-full">
            <div className="flex">
              <p className="text-lg uppercase text-yellow-400 mr-2">
                {lesson.title} 
              </p>
              <p className="text-lg text-gray-400">•</p>
            </div>
            <div className="flex items-center mt-2 md:mt-0 md:ml-2">
              <div className="w-[120px] justify-center h-8 bg-yellow-200/20 rounded-sm flex items-center mr-2 2xl:justify-center">
                <p className="text-lg text-white">
                  Aula 
                  {" " + lesson?.order + " "}
                  de  
                  {lesson?.module.number_of_lessons}
                </p>
              </div>
              <p className="text-lg text-gray-400">•</p>
              <p className="text-sm text-gray-400 ml-2">Publicado em </p>
              {lesson?.created_at?.toString() || ""}
            </div>
          </div>
          <LikeButton />
        </div>
        <h1 className="text-4xl font-bold mt-2 uppercase md:mt-0">
          {lesson?.title}
        </h1>
      </div>
      <TabsVideoPage lesson={lesson} cursoName={cursoName} moduleIdFromLesson={lesson?.module.id} />
    </div>
  );
};

export default VideoPage;

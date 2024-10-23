'use client'
import VideoTab from "./VideoTab";
import VideoPage from "./VideoPage";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useParams } from "next/navigation";
import { useEffect,   useState } from "react";
import { fetchLessonsByModuleId } from "@/services/hooks/lessons";
import { ILesson, IModule } from "@/interfaces/product";
import { useSession } from "next-auth/react";
import { fetchModulesToLessons } from "@/services/hooks/modules";

const page = ({ onClose }: any) => {
  const params = useParams();
  const { videoId, cursoName } = params; 
  const { data: session, status } = useSession();
  const [lesson, setLessons] = useState<ILesson | null>(null);
  const [module, setModule] = useState<IModule | null>(null); 

  useEffect(() => {
    console.log("🚀 ~ params.videoId:", videoId.toString().split("%3D")[1]);
  }, [params]);
  
  useEffect(() => {
    const loadModules = async () => {
      if (status === "authenticated" && !!session?.user?.access_token) {
        try {
          const response = await fetchLessonsByModuleId({
            id: videoId.toString().split("%3D")[1],
            user_id: session?.user?.user?.id,
            access_token: session?.user?.access_token,
          }); 
          console.log("🚀 ~ response.data:", typeof response); 
          setLessons(response.lesson);
          setModule(response.module);
        } catch (err) {
          console.log("🚀 ~ err:", err);
        }
      } 
       
    };
    loadModules();
  }, [status, session]);


  console.log("🚀 ~ lessons:", lesson);
  console.log("🚀 ~ module:", module);
  console.log("🚀 ~ module.lessons:", module?.lessons);

  if(!lesson || !module){
    return <div>Carregando...</div>
  }

  return (
    <>
      <Header />
      <div className="pt-[80px] md:pt-[100px] flex xl:px-[48px] justify-between bg-[#000] text-white">
        {!!lesson && <VideoPage lesson={lesson}  cursoName={cursoName.toString()} user_id={session?.user?.user?.id || ""} />}
        <div className="hidden xl:flex">
          {!!module && <VideoTab module={module} />}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;

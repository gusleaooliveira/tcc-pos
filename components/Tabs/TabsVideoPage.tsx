"use client";
import React, { useEffect, useRef, useState } from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PiDownloadSimpleFill } from "react-icons/pi";
import Image from "next/image";
import { VscSend } from "react-icons/vsc";
import avatarComentario from "@/public/avatarComentario.svg";
import marceloSouza from "@/public/marceloSouza.svg";
import { MOCK_LESSONS } from "@/mock/product";
import { MOCK_DOCUMENTS } from "@/mock/product";
import { MOCK_COMMENTS } from "@/mock/product";
import { ILesson } from "@/interfaces/product";
import { donloadFile } from "@/services/hooks/complementary_materials";
import { useSession } from "next-auth/react";
import { saveAs } from 'file-saver';

interface TabsVideoPageProps {
  lesson: ILesson | undefined;
  cursoName: string | undefined;
  moduleIdFromLesson: string | undefined;
}

const TabsVideoPage: React.FC<TabsVideoPageProps> = ({ lesson, cursoName, moduleIdFromLesson }) => {
  console.log("Lesson data:", lesson);
  console.log("Curso Name:", cursoName);
  console.log("Module ID from Lesson:", moduleIdFromLesson);
  const [value, setValue] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  useEffect(() => {
    const timer = setTimeout(() => {}, 50); // Delay to ensure class change is recognized
    return () => clearTimeout(timer);
  }, [value]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (scrollContainerRef.current) {
      setIsDragging(true);
      setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
      setScrollLeft(scrollContainerRef.current.scrollLeft);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // The multiplier can be adjusted for faster/slower scrolling
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  useEffect(() => {
    const handleMouseLeave = () => setIsDragging(false);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.addEventListener(
        "mouseleave",
        handleMouseLeave
      );
    }
    return () => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.removeEventListener(
          "mouseleave",
          handleMouseLeave
        );
      }
    };
  }, []);


  const { data: session, status } = useSession();

  const downloadDocument = async (id: string, doc: any) => {
    const response = await donloadFile({ id, access_token: session?.user?.access_token });
      
    console.log(response);
    
    saveAs(response, `${doc.document_description}.${doc.extension}`);
    
    console.log('baixando!');
    
  }

  const [selectedTab, setSelectedTab] = useState("description");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };
  return (
    <div>
      <Tabs defaultValue="description" className="w-full">
        <TabsList
          ref={scrollContainerRef}
          className="flex overflow-x-auto overflow-y-hidden cursor-pointer select-none"
          style={{ cursor: isDragging ? "grabbing" : "grab" }}
        >
          <TabsTrigger
            className={`border-b-2 ${
              selectedTab === "description"
                ? "border-yellow-400"
                : "border-transparent"
            }`}
            value="description"
            onClick={() => setSelectedTab("description")}
          >
            DESCRIÇÃO DA AULA
          </TabsTrigger>
          <TabsTrigger
            className={`border-b-2 ${
              selectedTab === "material"
                ? "border-yellow-400"
                : "border-transparent"
            }`}
            value="material"
            onClick={() => setSelectedTab("material")}
          >
            MATERIAIS COMPLEMENTARES
          </TabsTrigger>
          <TabsTrigger
            className={`border-b-2 ${
              selectedTab === "coments"
                ? "border-yellow-400"
                : "border-transparent"
            }`}
            value="coments"
            onClick={() => setSelectedTab("coments")}
          >
            COMENTÁRIOS
          </TabsTrigger>
        </TabsList>
        <TabsContent
          value="description"
          className="w-full transition-opacity duration-900 ease-in-out"
        >
          <div className="mt-8 px-[24px] font-light text-[16px] xl:px-0 w-full  ">
            {lesson?.full_description
              ? lesson.full_description.toString()
              : "Nenhuma descrição disponível."}
            {/* {MOCK_LESSONS[0].description} */}
          </div>
        </TabsContent>
        <TabsContent value="material">
          <div className="px-[24px] xl:px-0 mt-8 ">
            {lesson?.complementary_materials.map((document, index) => (
              <div className="w-full h-[120px] mb-4 flex justify-between px-6 items-center h-30 bg-gray-900 border border-gray-800 rounded-md">
                <div className="flex flex-col">
                  <p className="text-yellow-400">
                    {document?.type_document
                      ? document?.type_document
                      : "Título não disponível"}
                    {/* {MOCK_DOCUMENTS[0].title} */}
                  </p>
                  <p className="text-lg"> 
                    {document?.document_description ||
                      "Título não disponível"}
                    {/* {MOCK_DOCUMENTS[0].type} */}
                  </p>
                </div>
                <div className="flex items-center justify-center">
                  <p className="text-sm text-white/50">
                    {document?.size
                      ? `${(document?.size / 1_048_576).toFixed(2)} MB`
                      : "Tamanho não disponível"}
                  </p>

                  <button className="w-12 h-10 ml-5 border border-yellow-400 flex items-center justify-center rounded-2xl hover:bg-yellow-400 group"
                    onClick={() => { 
                      downloadDocument(document.id, document)
                    }}
                  >
                    <PiDownloadSimpleFill className="w-6 h-6 text-yellow-400 group-hover:text-black" />
                  </button>
                </div>
              </div>
            ))}
            {/* <div className="w-full h-[120px] flex justify-between px-6 items-center h-30 bg-gray-900 border border-gray-800 rounded-md">
              <div className="flex flex-col">
                <p className="text-yellow-400">{MOCK_DOCUMENTS[1].title}</p>
                <p className="text-lg">{MOCK_DOCUMENTS[1].type}</p>
              </div>
              <div className="flex items-center justify-center">
                <p className="text-sm text-white/50">
                  {MOCK_DOCUMENTS[1].size}
                </p>
                <button className="w-12 h-10 ml-5 border border-yellow-400 flex items-center justify-center rounded-2xl hover:bg-yellow-400 group">
                  <PiDownloadSimpleFill className="w-6 h-6 text-yellow-400 group-hover:text-black" />
                </button>
              </div>
            </div> */}
          </div>
        </TabsContent>
        <TabsContent value="coments">
          <div className="px-[24px] xl:px-0 flex flex-col mt-8 ">
            <div className="relative w-full mb-8 group">
              <div className="relative w-full h-20 flex justify-center items-center">
                <div className="absolute left-0 px-6">
                  <Image
                    src={avatarComentario}
                    height={48}
                    width={48}
                    priority
                    alt="icon"
                    className="rounded-full"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Digite seu comentário"
                  className="w-full h-full pl-20 pr-12 outline-none rounded-lg text-white bg-black hover:bg-gray-700 group-hover:text-yellow-400 border border-white/50"
                />
                <button className="absolute right-6 p-2">
                  <VscSend className="w-8 h-8 mb-1 text-white/50 group-hover:text-yellow-400 -rotate-45" />
                </button>
              </div>
            </div>
            <p className="mb-8">2 comentários</p>
            <div className="flex">
              <div className="mr-3">
                <Image
                  src={marceloSouza}
                  height={48}
                  width={48}
                  priority
                  alt="icon"
                  className="rounded-full"
                />
              </div>
              <div className="w-full p-4 bg-gray-900 rounded-md">
                <p className="text-sm text-white/50 mb-1">Marcelo Souza</p>
                <p className="text-lg text-gray-300">
                  {MOCK_COMMENTS[0].message}
                </p>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TabsVideoPage;

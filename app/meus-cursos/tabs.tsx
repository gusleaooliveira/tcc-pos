"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  isHLSProvider,
  MediaCanPlayDetail,
  MediaCanPlayEvent,
  MediaProviderAdapter,
  MediaProviderChangeEvent,
} from "@vidstack/react";
import Image from "next/image";
import { AiOutlineLike, AiTwotoneLike } from "react-icons/ai";
import avatarComentario from "@/public/avatarComentario.svg";
import marceloSouza from "@/public/marceloSouza.svg";
import { PiDownloadSimpleFill } from "react-icons/pi";
import { VscSend } from "react-icons/vsc";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import "@vidstack/react/player/styles/base.css";
import { DrawerContent, DrawerTrigger, Drawer } from "@/components/ui/drawer";
import VideoTab from "./[cursoName]/[videoId]/VideoTab";

const TabsOne = () => {
  // Movi todos os hooks para dentro do componente funcional
  const [value, setValue] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [selectedTab, setSelectedTab] = useState("description");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {}, 50); // Delay to ensure class change is recognized
    return () => clearTimeout(timer);
  }, [value]);

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

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

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

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  function onProviderChange(
    provider: MediaProviderAdapter | null,
    nativeEvent: MediaProviderChangeEvent
  ) {
    // We can configure provider's here.
    if (isHLSProvider(provider)) {
      provider.config = {};
    }
  }

  function onCanPlay(
    detail: MediaCanPlayDetail,
    nativeEvent: MediaCanPlayEvent
  ) {
    // ...
  }

  const handleClick = () => {
    setIsLiked(!isLiked);
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
          <div className="mt-8 px-[24px] font-light text-[16px] xl:px-0 w-full">
            Nossa metodologia de emagrecimento sustentável se baseia na adoção
            de hábitos saudáveis e equilibrados, combinando uma alimentação
            adequada com a prática regular de exercícios físicos. Acreditamos
            que a chave para o sucesso está em manter a motivação ao longo do
            processo e buscar o suporte de profissionais especializados, como
            nutricionistas e educadores físicos. Em nosso curso, enfatizamos a
            importância de promover mudanças positivas no estilo de vida,
            visando benefícios duradouros para a saúde a longo prazo.
            <br />
            <br />
            Perder peso de forma sustentável é um desafio para muitas pessoas,
            mas é possível alcançar esse objetivo com determinação e foco. A
            chave para um emagrecimento saudável e duradouro está em adotar
            hábitos alimentares equilibrados, praticar atividades físicas
            regularmente e manter a motivação ao longo do processo. Além disso,
            buscar o apoio de profissionais, como nutricionistas e educadores
            físicos, pode ser fundamental para alcançar os objetivos de forma
            saudável e sustentável.
            <br />
            <br />
            Lembre-se, emagrecer não se trata apenas de perder peso rapidamente,
            mas sim de promover mudanças positivas no estilo de vida que irão
            beneficiar sua saúde a longo prazo.
          </div>
        </TabsContent>
        <TabsContent value="material">
          <div className="px-[24px] xl:px-0 mt-8">
            <div className="w-full h-[120px] mb-4 flex justify-between px-6 items-center bg-gray-900 border border-gray-800 rounded-md">
              <div className="flex flex-col">
                <p className="text-yellow-400">E-BOOK</p>
                <p className="text-lg">
                  Metodologia do emagrecimento sustentável
                </p>
              </div>
              <div className="flex items-center justify-center">
                <p className="text-sm text-white/50">2mb</p>
                <button className="w-12 h-10 ml-5 border border-yellow-400 flex items-center justify-center rounded-2xl hover:bg-yellow-400 group">
                  <PiDownloadSimpleFill className="w-6 h-6 text-yellow-400 group-hover:text-black" />
                </button>
              </div>
            </div>
            <div className="w-full h-[120px] flex justify-between px-6 items-center bg-gray-900 border border-gray-800 rounded-md">
              <div className="flex flex-col">
                <p className="text-yellow-400">AUDIOBOOK</p>
                <p className="text-lg">
                  Metodologia do emagrecimento sustentável
                </p>
              </div>
              <div className="flex items-center justify-center">
                <p className="text-sm text-white/50">5mb</p>
                <button className="w-12 h-10 ml-5 border border-yellow-400 flex items-center justify-center rounded-2xl hover:bg-yellow-400 group">
                  <PiDownloadSimpleFill className="w-6 h-6 text-yellow-400 group-hover:text-black" />
                </button>
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="coments">
          <div className="px-[24px] xl:px-0 flex flex-col mt-8">
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
                  placeholder="Digite seu comentário..."
                  className="w-full h-20 bg-[#212121] border border-[#333333] rounded-md text-[14px] font-light px-[80px] focus:outline-none"
                />
                <div className="absolute right-0 h-full flex justify-center items-center pr-6">
                  <VscSend className="h-8 w-8 fill-[#333333] cursor-pointer hover:fill-yellow-400" />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-8">
              <div className="flex w-full gap-4">
                <Image
                  src={marceloSouza}
                  height={40}
                  width={40}
                  priority
                  alt="icon"
                  className="rounded-full"
                />
                <div className="w-full">
                  <div className="flex justify-between items-center">
                    <p className="text-yellow-400 text-base font-medium">
                      Marcelo Souza
                    </p>
                    <button
                      className="flex items-center gap-1"
                      onClick={handleClick}
                    >
                      {isLiked ? (
                        <AiTwotoneLike className="h-6 w-6 fill-yellow-400" />
                      ) : (
                        <AiOutlineLike className="h-6 w-6 fill-yellow-400" />
                      )}
                    </button>
                  </div>
                  <p className="text-[14px] text-[#ffffff]/50 mt-2">
                    Estou gostando bastante dos conteúdos. As aulas são
                    completas e estão me ajudando muito a alcançar meus
                    objetivos de emagrecimento de forma sustentável. Recomendo
                    para todos que querem melhorar a saúde e o bem-estar.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TabsOne;

"use client";
import React, { useState } from "react";
import { PiCertificateFill, PiDownloadSimpleFill } from "react-icons/pi";
import "@vidstack/react/player/styles/base.css";
import {
  DrawerContent,
  DrawerOverlay,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Drawer } from "@/components/ui/drawer";
import { useMediaQuery } from "react-responsive";
import delete_element from "@/public/img/x.svg";
import my_certificates from "@/public/img/MyCertificates.svg";
import locked from "@/public/img/locked.svg";
import certificate from "@/public/img/Certificate.png";
import Image from "next/image";

interface IProps {
  isMyCertificatesOpen: boolean;
  setIsMyCertificatesOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MyCertificates: React.FC<IProps> = ({
  isMyCertificatesOpen,
  setIsMyCertificatesOpen,
}) => {
  const [isLocked, setIsLocked] = useState(true);
  const isLgScreen = useMediaQuery({ minWidth: 1024 });

  return (
    <>
      <Drawer
        open={isMyCertificatesOpen}
        onOpenChange={setIsMyCertificatesOpen}
        handleOnly
        direction={isLgScreen ? "right" : "bottom"}
      >
        <DrawerOverlay />
        <DrawerTrigger className="h-full w-full justify-start items-center flex">
          <div className="flex w-full justify-start items-center gap-4 pl-1">
            <PiCertificateFill size={32} color="#FFFFFF80" />
            <DrawerTitle className="w-full justify-start flex font-normal text-sm text-white">
              Meus certificados
            </DrawerTitle>
          </div>
        </DrawerTrigger>
        <DrawerContent className="mt-[56px] h-full w-full lg:w-[556px] flex items-center border-none bg-black right-0 px-6">
          <div className="flex w-full justify-end items-center">
            <button
              className="h-8 w-8 bg-[#1C1C1C] rounded-lg items-center justify-center flex"
              onClick={() => setIsMyCertificatesOpen(false)}
            >
              <Image src={delete_element} alt="fechar" width={15} height={15} />
            </button>
          </div>
          <div className="flex flex-col justify-center items-center w-full mt-6">
            <Image
              src={my_certificates}
              alt="Certificado"
              height={114}
              width={114}
            />
            <span className="text-2xl font-normal text-white mt-2">
              Certificados
            </span>
            <span className="text-sm font-light text-[#FFFFFF80]">
              Dr. Dárcio Pinheiro
            </span>
          </div>
          <div className="flex flex-col bg-[#0B0B0B] h-fit p-5 gap-4 w-full max-w-[400px] rounded-3xl mt-12">
            <div className="relative">
              <div className={`${isLocked ? "blur-[2px]" : "blur-none"}`}>
                <Image
                  src={certificate}
                  alt="Certificado"
                  height={257}
                  width={350}
                  className="h-full w-full relative"
                />
              </div>
              {isLocked ? (
                <Image
                  src={locked}
                  alt="fechado"
                  width={75}
                  height={75}
                  className="h-[75px] w-[75px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
                />
              ) : null}
            </div>
            <div className="flex w-full justify-between items-center">
              <div className="flex flex-col">
                <span className="text-sm font-normal text-[#F4C91D]">
                  Certificado de conclusão
                </span>
                <span className="text-xl font-normal text-white">
                  Emagrecimento sustentável
                </span>
              </div>
              <button
                className={`flex h-12 w-12 border-2 ${isLocked ? "border-[#222222]" : "border-[#F4C91D]"} rounded-xl justify-center items-center`}
              >
                <PiDownloadSimpleFill
                  size={18}
                  color={`${isLocked ? "#222222" : "#F4C91D"}`}
                  className="h-[24px] w-[24px]"
                />
              </button>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MyCertificates;

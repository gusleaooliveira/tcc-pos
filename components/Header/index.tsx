"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo_dr_mobile from "@/public/img/logo_dr_mobile.svg";
import {
  PiBellFill,
  PiCaretCircleDownFill,
  PiMonitorPlayFill,
  PiSignOutFill,
  PiSlidersHorizontalFill,
  PiUserRectangleFill,
} from "react-icons/pi";
import Modal from "../Modal";
import { usePathname } from "next/navigation";
import MyData from "./MyData";
import MyCertificates from "./MyCertificates";
import { signOut, useSession } from "next-auth/react";
import "./style.css";
import Avatar from "../Avatar";
import MentoriaVip from "./mentoriaVip";
import MentoriaVipMobile from "./mentoriaVipMobile";

const Header = () => {
  const { data: session } = useSession();
  const [showModal, setShowModal] = useState(false);
  const [activeLink, setActiveLink] = useState(null);
  const [isMyDataOpen, setIsMyDataOpen] = useState(false);
  const [isMyCertificatesOpen, setIsMyCertificatesOpen] = useState(false);
  const pathname = usePathname();
  const isPathname = pathname.replace("/", "");
  const user = session?.user?.user;
  const emailUser = user?.email || "";
  const nameUser = user?.name || "";

  const handleMouseEnter = (index: any) => {
    setActiveLink(index);
  };

  const handleMouseLeave = () => {
    setActiveLink(null);
  };

  return (
    <div className="flex fixed z-50 px-6 md:px-16 lg:px-16 h-[92px] w-full bg-[#0101011b] backdrop-blur-md">
      <div className="flex h-[92px] w-full justify-start items-center gap-20">
        <Image
          src={logo_dr_mobile}
          alt="Logo Dr. Darci Pinheiro"
          height={48}
          width={101}
          priority
          className="h-[48px] w-[101px]"
        />
        <div className="hidden lg:flex gap-8 ">
          <a
            href="/meus-cursos"
            className={`text-white text-base font-normal pb-1 border-b-2 transition whitespace-nowrap ${
              activeLink === 0 || isPathname === "meus-cursos"
                ? "border-[#F4C91D]"
                : "border-transparent"
            }`}
            onMouseEnter={() => handleMouseEnter(0)}
            onMouseLeave={handleMouseLeave}
          >
            MEUS CURSOS
          </a>
          <a
            href="/conheca-o-profissional"
            className={`text-white text-base font-normal border-b-2 transition whitespace-nowrap ${
              activeLink === 1 || isPathname === "conheca-o-profissional"
                ? "border-[#F4C91D]"
                : "border-transparent"
            }`}
            onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={handleMouseLeave}
          >
            CONHEÇA O PROFISSIONAL
          </a>
        </div>
      </div>
      <div className="flex w-full justify-end items-center gap-5">
        <div className="hidden lg:flex">
          <MentoriaVip />
        </div>
        <MentoriaVipMobile />
        <button className="relative h-fit w-fit">
          <PiBellFill size={28} color="#FFFFFF80" />
          <div className="absolute right-[-8px] top-[-15px] flex h-[18px] w-[20px] bg-[#F4C91D] rounded-[20px] justify-center items-center text-xs font-normal">
            +9
          </div>
        </button>
        <button
          onClick={() => setShowModal(true)}
          type="button"
          className="relative"
        >
          <Avatar />
          <div className="absolute right-[-8px] top-4 flex justify-center items-center h-[18px] w-[18px] rounded-full bg-[#000000]">
            <PiCaretCircleDownFill size={30} color="#FFFFFF" />
          </div>
        </button>
        {showModal && (
          <Modal open={showModal} onClose={() => setShowModal(false)}>
            <div className="flex flex-col h-full w-full delay-150 duration-500 ease-in">
              <div className="flex gap-4">
                <Avatar />
                <div className="flex flex-col justify-start">
                  <span className="font-normal text-base text-white">
                    {nameUser || "N/A"}
                  </span>
                  <span className="font-light text-sm text-[#FFFFFF80] ml-[2px]">
                    {emailUser || "N/A"}
                  </span>
                </div>
              </div>
              <div className="flex flex-col my-3 py-3 border-y-[1px] border-[#131313] lg:hidden">
                <a
                  href="/meus-cursos"
                  type="button"
                  className="flex h-12 w-full gap-4 px-3 justify-start items-center rounded-xl hover:bg-[#181818]"
                >
                  <PiMonitorPlayFill size={32} color="#FFFFFF" />
                  <span className="font-normal text-sm text-white">
                    Meus cursos
                  </span>
                </a>
                <a
                  href="/conheca-o-profissional"
                  type="button"
                  className="flex h-12 w-full gap-4 px-3 justify-start items-center rounded-xl hover:bg-[#181818]"
                >
                  <PiUserRectangleFill size={32} color="#FFFFFF80" />
                  <span className="font-normal text-sm text-white">
                    Conheça o profissional
                  </span>
                </a>
              </div>
              <div className="flex flex-col lg:mt-3">
                {/* <button
                  type="button"
                  className="flex h-12 w-full gap-4 px-3 justify-start items-center rounded-xl hover:bg-[#181818]"
                >
                  <PiShoppingBagOpenFill size={32} color="#FFFFFF80" />
                  <span className="font-normal text-sm text-white">
                    Minhas compras
                  </span>
                </button> */}
                <button
                  type="button"
                  onClick={() => setIsMyDataOpen(true)}
                  className="flex h-12 w-full gap-4 px-3 justify-start items-center rounded-xl hover:bg-[#181818]"
                >
                  <PiSlidersHorizontalFill size={32} color="#FFFFFF80" />
                  <span className="font-normal text-sm text-white">
                    Meus dados
                  </span>
                </button>
                {isMyDataOpen ? (
                  <MyData
                    isMyDataOpen={isMyDataOpen}
                    setIsMyDataOpen={setIsMyDataOpen}
                  />
                ) : null}
                <div className="flex h-12 w-full gap-4 px-3 justify-start items-center rounded-xl hover:bg-[#181818]">
                  <MyCertificates
                    isMyCertificatesOpen={isMyCertificatesOpen}
                    setIsMyCertificatesOpen={setIsMyCertificatesOpen}
                  />
                </div>
              </div>
              <div className="flex flex-col mt-3 pt-3 border-t-[1px] border-[#131313]">
                <button
                  type="button"
                  onClick={() => signOut({ callbackUrl: "/" })}
                  className="flex h-12 w-full gap-4 px-3 justify-start items-center rounded-xl hover:bg-[#181818]"
                >
                  <PiSignOutFill size={32} color="#FFFFFF80" />
                  <span className="font-normal text-sm text-white">Sair</span>
                </button>
              </div>
            </div>
          </Modal>
        )}
      </div>
    </div>
  );
};

export default Header;

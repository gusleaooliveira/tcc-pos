"use client";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { useState } from "react";
import button from "@/public/button.svg";
import Image from "next/image";
import React from "react";
import VideoTab from "@/app/meus-cursos/[cursoName]/[videoId]/VideoTab";

const DrawerVideoPage = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };
  return (
    <div>
      <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
        <DrawerTrigger>
          <div className="mb-12">
            <figure className="">
              <Image
                src={button}
                height={40}
                width={40}
                priority={true}
                alt="icon"
              />
            </figure>
          </div>
        </DrawerTrigger>
        <DrawerContent className="h-full w-full flex items-center border-none inset-x-0 lg:right-0">
          <div className="flex bg-black h-full w-full justify-center items-center overflow-y-scroll ">
            <VideoTab onClose={handleDrawerClose} />
          </div>
          <div></div>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default DrawerVideoPage;

"use client";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide, SwiperProps } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import ModalAssinante from "@/app/_pagina-inicial/modalAssinante";
import { FaPlayCircle } from "react-icons/fa";
import Image from "next/image";

import { MOCK_IMAGES } from "@/mock/product";
import { ILesson } from "@/interfaces/product";
interface AppProps {
  images: { id: number; src: string; width: number; height: number }[];
}

const getSlidesPerView = () => {
  if (typeof window === "undefined") return 3.5;
  const width = window.innerWidth;
  if (width >= 1536) {
    return 3.5;
  } else if (width >= 1280) {
    return 3;
  } else if (width >= 1024) {
    return 2.5;
  } else if (width >= 768) {
    return 2;
  } else if (width >= 375) {
    return 1.5;
  } else {
    return 1.5;
  }
};

interface IProps {
  lessons: ILesson[];
  color: string;
}

const App = ({ lessons, color }: IProps) => {
  const [slidesPerView, setSlidesPerView] = useState(getSlidesPerView());
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setSlidesPerView(getSlidesPerView());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const config: SwiperProps = {
    slidesPerView,
    spaceBetween: 30,
    pagination: {
      clickable: true,
    },
    className: "mySwiper",
  };
  return (
    <>
      <Swiper {...config}>
        {lessons.map((lesson, index) => (
          <SwiperSlide
            key={lesson.id}
            className="swiper-slide relative"
            onClick={openModal}
            style={{ cursor: "pointer" }}
          >
            <Image
              src={lesson?.thumbnail?.url || lesson?.thumbnail?.url}
              alt="icon"
              height={290}
              width={505}
              priority={true}
              className="w-[505px] max-h-[290px]"
            />

            <button
              onClick={openModal}
              className="lg:w-[104px] lg:h-[104px] w-[56px] h-[56px] flex items-center justify-center bg-[#F4C91D] rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              style={{ backgroundColor: color }}
            >
              <div className="w-[32px] h-[32px] lg:w-[60px] lg:h-[60px] flex items-center justify-center">
                <FaPlayCircle size={60} />
              </div>
            </button>
          </SwiperSlide>
        ))}
      </Swiper>

      <ModalAssinante isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default App;

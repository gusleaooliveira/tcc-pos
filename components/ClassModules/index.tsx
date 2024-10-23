"use client";
import React, { useEffect, useRef, useState } from "react";
import { CardProgress } from "../CardProgress";
import DoubleButtons from "../DoubleButtons";
import { Swiper, SwiperProps, SwiperRef, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";
import { fetchModules } from "@/services/hooks/modules";
import { useSession } from "next-auth/react";
import { IModule } from "@/interfaces/product";
import released from "@/public/img/released.svg";
import notReleased from "@/public/img/notReleased.svg";
import "../ClassModules/style.css";
import badge_gold from "@/public/img/badge_gold.svg";
import { generateSlug } from "@/services/utils/cleanSlug";
import { url } from "inspector";
import { api } from "@/lib/axios";

interface IProps {
  vip?: boolean;
  selectLessons: string;
}

const ClassModules = ({ vip = false, selectLessons }: IProps) => {
  console.log("🚀 ~ selectLessons:", selectLessons);

  const swiperRef = useRef<SwiperRef>(null);
  const { data: session, status } = useSession();
  const [modules, setModules] = useState<IModule[]>([{}] as IModule[]);
  const [isReleased, setIsReleased] = useState(true);

  useEffect(() => {
    const loadModules = async () => {
      if (status === "authenticated" && !!session?.user?.access_token) {
        try {
          const response = await fetchModules({
            access_token: session?.user?.access_token,
            // selectLessons,
          });

          setModules(response.data);
        } catch (err) {
          console.log("🚀 ~ err:", err);
        }
      }
    };
    loadModules();
  }, [status, session, selectLessons]);

  const config: SwiperProps = {
    slidesPerView: "auto",
    centeredSlides: false,
    pagination: {
      clickable: true,
    },
    className: "mySwiper",
    spaceBetween: 20,
  };

  const goToNextSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const goToPrevSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  return !!modules
    ? modules.map((module, index) => {
        return module?.lessons && module?.lessons?.length > 0 ? (
          <div
            className="flex flex-col lg:flex-row items-center lg:justify-start lg:items-start lg:mt-4 overflow-x-hidden"
            key={`${index}+${module.id}`}
          >
            <div className="flex flex-col w-full lg:max-w-[440px] mx-6 md:mx-16">
              <div className="mx-6 md:mx-16 lg:mx-0">
                <CardProgress module={module} />
              </div>
              <div className="hidden lg:block">
                <DoubleButtons
                  titleButton="Voltar"
                  titleSecondButton="Avançar"
                  onPrev={goToPrevSlide}
                  onNext={goToNextSlide}
                />
              </div>
            </div>
            <div className="ml-3 md:ml-[54px] lg:ml-0">
              <Swiper
                {...config}
                ref={swiperRef}
                style={{
                  justifyContent: "start",
                  height: "425px",
                  paddingLeft: "12px",
                }}
              >
                {module.lessons.map((lesson, index) => (
                  <SwiperSlide
                    key={index}
                    style={{
                      width: "auto",
                      alignItems: "start",
                      justifyItems: "start",
                    }}
                  >
                    <Link
                      href={`/meus-cursos/${generateSlug(module.title)}/${generateSlug(lesson.title)}&videoId=${lesson.id}`}
                      className="relative mt-6 lg:mt-0 lg:ml-0 flex justify-center items-end "
                    >
                      <Image
                        src={lesson.thumbnail.url}
                        alt={`card ${lesson.title}`}
                        height={425}
                        width={350}
                        priority
                        className={`h-[322px] w-[250px] lg:h-[425px] lg:w-[330px] rounded-lg object-cover ${
                          !isReleased ? "grayscale" : ""
                        }`}
                      />
                      <Image
                        src={isReleased ? released : notReleased}
                        alt="check"
                        height={36}
                        width={36}
                        priority
                        className="absolute right-2 top-2"
                      />
                      <div
                        className={`h-fit w-[100%] p-3 gap-2 flex flex-col justify-center items-center text-center rounded-xl absolute`}
                      >
                        <div
                          className={`h-fit w-[100%] p-3 gap-2 flex flex-col justify-center items-center bg-[#13131333] backdrop-blur-md text-center rounded-xl`}
                        >
                          <span
                            className={`font-black  ${vip ? "textVip font-bebasNeue text-[44px] leading-10" : "text-[#FFFFFFCC] text-2xl"} break-words`}
                          >
                            {lesson.title}
                          </span>
                          <div className="h-fit w-fit py-1 px-2 flex items-center justify-center bg-[#EBEBEB1A] rounded ">
                            <span className="text-white">Aula {index + 1}</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        ) : null;
      })
    : null;
};

export default ClassModules;

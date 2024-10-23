import Image from "next/image";
import image32 from "@/public/image32.svg";
import image33 from "@/public/image33.svg";
import image30 from "@/public/image30.svg";
import image31 from "@/public/image31.svg";
import image28 from "@/public/image28.svg";
import image29 from "@/public/image29.svg";
import image40 from "@/public/image40.svg";
import image41 from "@/public/image41.svg";
import { FaCheckCircle } from "react-icons/fa";
import { FaPlayCircle } from "react-icons/fa";
import { MdOutlinePauseCircleFilled } from "react-icons/md";
import { PiKeyholeFill } from "react-icons/pi";
import Avatar1 from "@/public/Avatar1.svg";
import Avatar2 from "@/public/Avatar2.svg";
import Avatar3 from "@/public/Avatar3.svg";
import Avatar4 from "@/public/Avatar4.svg";
import playPlayer from "@/public/playPlayer.svg";
import pausePlayer from "@/public/pausePlayer.svg";
import swiper1 from "@/public/imgSwiper/1.svg";
import swiper2 from "@/public/imgSwiper/2.svg";
import swiper3 from "@/public/imgSwiper/3.svg";
import swiper4 from "@/public/imgSwiper/4.svg";

const MOCK_FOTOS = [
  {
    id: 1,
    photo: image30,
  },
  {
    id: 2,
    photo: image31,
  },
  {
    id: 3,
    photo: image32,
  },
  {
    id: 4,
    photo: image33,
  },
];

const MOCK_FOTOS2 = [
  {
    id: 1,
    photo: image28,
  },
  {
    id: 1,
    photo: image29,
  },
  {
    id: 1,
    photo: image40,
  },
  {
    id: 1,
    photo: image41,
  },
];

const MOCK_VIDEOTAB = [
  {
    id: 1,
    photo: Avatar1,
    player: playPlayer,
    title: "Aula 1",
    name: "O QUE É EMAGRECIMENTO SUSTENTÁVEL?",
    icon: <FaCheckCircle color="#39C15F" className="w-[24px] h-[24px] " />,
    stats: "Concluído",
    time: "12:05",
  },

  {
    id: 2,
    photo: Avatar2,
    player: pausePlayer,
    title: "Aula 2",
    name: "METODOLOGIA",
    icon: <FaPlayCircle color="#DA750F" className="w-[24px] h-[24px]" />,
    stats: "Assistido",
    time: "12:05",
    point: "•",
    percentage: "82% concluído",
  },
  {
    id: 3,
    photo: Avatar3,
    player: playPlayer,
    title: "Aula 3",
    name: "COMO CHEGAR AOS OBJETIVOS?",
    icon: (
      <MdOutlinePauseCircleFilled className="w-[24px] h-[24px] text-[#9B9B9B]" />
    ),
    stats: "Não iniciado",
    time: "08:21",
  },
  {
    id: 4,
    photo: Avatar4,
    player: playPlayer,
    title: "Aula 4",
    name: "3 PASSOS PRÁTICOS PARA O EMAGRECIMENTO",
    icon: <PiKeyholeFill className="w-[24px] h-[24px] text-[#9B9B9B]" />,
    stats: "Em breve",
    time: "16/07/2024 - 18:00",
  },
  {
    id: 5,
    photo: Avatar4,
    player: playPlayer,
    title: "Aula 5",
    name: "PRINCIPAIS ALIMENTOS SUSTENTÁVEIS",
    icon: <PiKeyholeFill className="w-[24px] h-[24px] text-[#9B9B9B]" />,
    stats: "Em breve",
    time: "18/07/2024 - 18:00",
  },
  {
    id: 6,
    photo: Avatar4,
    player: playPlayer,
    title: "Aula 6",
    name: "7 DICAS PARA SE MANTER FOCADO",
    icon: <PiKeyholeFill className="w-[24px] h-[24px] text-[#9B9B9B]" />,
    stats: "Em breve",
    time: "24/07/2024 - 18:00",
  },
  {
    id: 7,
    photo: Avatar4,
    player: playPlayer,
    title: "Aula 7",
    name: "CRIANDO MINHA ROTINA SAUDÁVEL",
    icon: <PiKeyholeFill className="w-[24px] h-[24px] text-[#9B9B9B]" />,
    stats: "Em breve",
    time: "26/07/2024 - 18:00",
  },
  {
    id: 8,
    photo: Avatar4,
    player: playPlayer,
    title: "Aula 8",
    name: "COMO PROGREDIR OS RESULTADOS",
    icon: <PiKeyholeFill className="w-[24px] h-[24px] text-[#9B9B9B]" />,
    stats: "Em breve",
    time: "31/07/2024 - 18:00",
  },
];

const MOCK_SWIPER = [
  {
    id: 0,
    src: swiper1,
    width: 505,
    height: 290,
  },
  {
    id: 1,
    src: swiper2,
    width: 505,
    height: 290,
  },
  {
    id: 2,
    src: swiper3,
    width: 505,
    height: 290,
  },
  {
    id: 3,
    src: swiper4,
    width: 505,
    height: 290,
  },
];

export { MOCK_FOTOS, MOCK_FOTOS2, MOCK_VIDEOTAB, MOCK_SWIPER };

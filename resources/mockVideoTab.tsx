import Image from "next/image";
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

const MOCK_VIDEOTAB = [
  {
    id: 1,
    photo: Avatar1,
    title: "Aula 1",
    name: "O QUE É EMAGRECIMENTO SUSTENTÁVEL?",
    icon: <FaCheckCircle color="#39C15F" className="w-[24px] h-[24px] " />,
    stats: "Concluído",
    time: "12:05",
  },

  {
    id: 2,
    photo: Avatar2,
    player: (
      <Image
        src={pausePlayer}
        height={56}
        width={56}
        priority={true}
        alt="icon"
      />
    ),
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
    player: (
      <Image
        src={playPlayer}
        height={56}
        width={56}
        priority={true}
        alt="icon"
      />
    ),
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
    player: <Image src={playPlayer} fill priority={true} alt="icon" />,
    title: "Aula 4",
    name: "3 PASSOS PRÁTICOS PARA O EMAGRECIMENTO",
    icon: <PiKeyholeFill className="w-[24px] h-[24px] text-[#9B9B9B]" />,
    stats: "Em breve",
    time: "16/07/2024 - 18:00",
  },
  {
    id: 5,
    photo: Avatar4,
    player: <Image src={playPlayer} fill priority={true} alt="icon" />,
    title: "Aula 5",
    name: "PRINCIPAIS ALIMENTOS SUSTENTÁVEIS",
    icon: <PiKeyholeFill className="w-[24px] h-[24px] text-[#9B9B9B]" />,
    stats: "Em breve",
    time: "18/07/2024 - 18:00",
  },
  {
    id: 6,
    photo: Avatar4,
    player: <Image src={playPlayer} fill priority={true} alt="icon" />,
    title: "Aula 6",
    name: "7 DICAS PARA SE MANTER FOCADO",
    icon: <PiKeyholeFill className="w-[24px] h-[24px] text-[#9B9B9B]" />,
    stats: "Em breve",
    time: "24/07/2024 - 18:00",
  },
  {
    id: 7,
    photo: Avatar4,
    player: <Image src={playPlayer} fill priority={true} alt="icon" />,
    title: "Aula 7",
    name: "CRIANDO MINHA ROTINA SAUDÁVEL",
    icon: <PiKeyholeFill className="w-[24px] h-[24px] text-[#9B9B9B]" />,
    stats: "Em breve",
    time: "26/07/2024 - 18:00",
  },
  {
    id: 8,
    photo: Avatar4,
    player: <Image src={playPlayer} fill priority={true} alt="icon" />,
    title: "Aula 8",
    name: "COMO PROGREDIR OS RESULTADOS",
    icon: <PiKeyholeFill className="w-[24px] h-[24px] text-[#9B9B9B]" />,
    stats: "Em breve",
    time: "31/07/2024 - 18:00",
  },
];

export default MOCK_VIDEOTAB;

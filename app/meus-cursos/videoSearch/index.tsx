"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import { PiMagnifyingGlass } from "react-icons/pi";
import arrow_left from "@/public/img/arrow_left.svg";
import MOCK_VIDEOTAB from "@/resources/mockVideoTab";
import player from "@/public/img/player.svg";
import ellipse from "@/public/img/ellipse.svg";

const VideoSearch = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocusInput = () => {
    inputRef.current?.focus();
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredVideos = MOCK_VIDEOTAB.filter(
    (item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="flex h-14 w-14 hover:border hover:border-[#F4C91D40] justify-center items-center rounded-xl bg-[#0B0B0B] xl:hidden"
      >
        <PiMagnifyingGlass size={24} color="#9D9D9D" />
      </button>

      <div
        className={`fixed top-0 right-0 z-50 w-full h-full bg-[#0A0A0A] transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-start gap-5 px-7 py-7 h-20 w-full border-b-[1px] border-[#131313]">
          <button onClick={() => setIsOpen(false)}>
            <Image
              src={arrow_left}
              alt="Icone de flecha para a esquerda"
              height={24}
              width={24}
              priority
              className="h-5 w-5"
            />
          </button>
          <div
            className="
            p-4
            gap-3
            bg-[#131313]
            flex items-center
            rounded-xl 
            w-full
            h-[52px]
            hover:border hover:border-[#F4C91D40]
            "
            onClick={handleFocusInput}
          >
            <input
              ref={inputRef}
              placeholder="Pesquise por aula ou palavra-chave"
              value={searchTerm}
              onChange={handleSearchChange}
              className="
              flex-grow
              bg-[#131313]
              placeholder:text-sm
              placeholder:font-normal
              placeholder:text-[#838383]
              font-medium
              text-[#FFFFFF]
              outline-none
              "
            />
            <div>
              <PiMagnifyingGlass size={24} color="#9D9D9D" />
            </div>
          </div>
        </div>
        <div className="flex flex-col h-full w-full px-6">
          <div className="flex gap-[5px] pt-4">
            <span className="font-bold text-sm text-[#B7B7B7]">Sugestões</span>
            <span className="font-normal text-sm text-[#B7B7B7]">
              para você
            </span>
          </div>
          {filteredVideos.map((item, index) => {
            const max3 = index < 3;
            return max3 ? (
              <div
                key={index}
                className="relative mb-3 mt-3 flex h-[107px] w-full gap-3 justify-start items-center px-3 rounded-xl overflow-hidden bg-[#0E0E0E]"
              >
                <Image
                  src={item.photo}
                  alt={item.title}
                  height={75}
                  width={75}
                  priority
                  className="h-[75px] w-[75px] rounded-lg"
                />
                <div className="h-[62px] w-full flex flex-col gap-1 justify-center items-start">
                  <p className="font-light text-[13px] text-[#FFFFFF80]">
                    {item.title}
                  </p>
                  <p className="font-extrabold text-sm text-[#FFFFFF]">
                    {item.name}
                  </p>
                </div>
                <Image
                  src={player}
                  alt="Logo Player"
                  height={36}
                  width={36}
                  priority
                  className="h-[36px] w-[36px] mr-2"
                />
                <figure className="right-[-25px] bottom-[-1px] absolute object-fill">
                  <Image
                    src={ellipse}
                    height={212}
                    width={212}
                    priority
                    alt="h-[212px] w-[212px] icon rounded-xl"
                  />
                </figure>
              </div>
            ) : null;
          })}
        </div>
      </div>
    </div>
  );
};

export default VideoSearch;

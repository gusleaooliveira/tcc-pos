import { IModule } from "@/interfaces/product";
import Image from "next/image";

import "./style.css";
import { BadgeRanking } from "../BadgeRanking";
interface IProps {
  module: IModule;
  vip?: boolean;
}
export const CardProgress = ({ module, vip = true }: IProps) => {
  const { number_of_lessons, title, percent } = module;

  return (
    <div
      className={`${vip ? "cardVip" : "bg-[#151515]"} flex justify-between items-center p-4 lg:p-8 gap-5 h-fit w-full rounded-xl`}
    >
      <div className="flex flex-col gap-3">
        <div className="flex justify-start items-center gap-[6px]">
          {vip ? (
            <>
              <span className="uppercase text-sm font-semibold text-[#0B0B0B]">
                Conteúdo exclusivo
              </span>
              <span className="rounded-full border-black border-[2px]" />
            </>
          ) : null}
          <p
            className={`${vip ? "text-[#0B0B0B]" : "text-[#FFFFFF80]"} uppercase font-normal text-xs md:text-sm whitespace-nowrap`}
          >
            {number_of_lessons} {number_of_lessons > 1 ? "aulas" : "aula"}
          </p>
        </div>
        <p
          className={`font-extrabold text-base md:text-lg xl:text-[28px] ${vip ? "text-[#0B0B0B]" : "text-white"} leading-8 uppercase`}
        >
          {title}
        </p>
      </div>
      <BadgeRanking percent={60} vip={true} />
    </div>
  );
};

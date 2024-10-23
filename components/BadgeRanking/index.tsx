import React from "react";
import badge_vazio from "@/public/img/badge.svg";
import badge_bronze from "@/public/img/badge_bronze.svg";
import badge_prata from "@/public/img/badge_prata.svg";
import badge_ouro from "@/public/img/badge_ouro.svg";
import badge_vip from "@/public/img/badge_vip.svg";
import Image from "next/image";

interface IProps {
  percent: number;
  vip?: boolean;
}

export const BadgeRanking = ({ percent, vip }: IProps) => {
  const badge = () => {
    if (vip) {
      if (percent >= 100) return badge_vip;
      if (percent >= 60) return badge_vip;
      if (percent >= 30) return badge_vip;
      return badge_vip;
    } else {
      if (percent >= 100) return badge_ouro;
      if (percent >= 60) return badge_prata;
      if (percent >= 30) return badge_bronze;
      return badge_vazio;
    }
  };

  return (
    <div className="h-fit flex flex-col items-center bg-[#0F0F0F] rounded-xl p-4 gap-[4px]">
      <Image src={badge()} alt="Distintivo" height={37} width={37} priority />
      <span className="flex text-white text-sm font-normal">{percent}%</span>
      <div className="h-1 w-full bg-[#222222] rounded-[20px]">
        <div
          className="h-full bg-[#169A3B] rounded-2xl"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
};

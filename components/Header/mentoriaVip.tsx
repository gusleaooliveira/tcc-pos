"use client";
import Image from "next/image";
import React from "react";
import vip from "@/public/vip.svg";
import "./style.css";
import Link from "next/link";

const MentoriaVip = () => {
  return (
    <div>
      <Link href="/vip" passHref>
        <button className="button flex justify-center items-center gap-2">
          <Image src={vip} alt="vip" height={28} width={28} />
          <div>
            <span className="font-normal text-lg">MENTORIA</span>
            <span className="font-bold text-lg ml-[2px]">VIP</span>
          </div>
        </button>
      </Link>
    </div>
  );
};

export default MentoriaVip;

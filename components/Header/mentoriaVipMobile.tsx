"use client";
import React from "react";
import "./style.css";
import Link from "next/link";

const MentoriaVipMobile = () => {
  return (
    <div>
      <Link href="/vip" passHref>
        <button className="button h-[40px] w-[42px] flex justify-center items-center lg:hidden">
          <span className="flex justify-center items-center mt-[3px] font-bebasNeue text-[24px]">
            VIP
          </span>
        </button>
      </Link>
    </div>
  );
};

export default MentoriaVipMobile;

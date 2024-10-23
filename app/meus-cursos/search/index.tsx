import React from "react";
import { PiMagnifyingGlass } from "react-icons/pi";

export const Search = () => {
  return (
    <div className="hidden p-4 gap-3 bg-[#0B0B0B] lg:flex items-center rounded-xl w-full max-w-[400px] h-fit border border-transparent hover:border hover:border-[#F4C91D40] transition-all hover:transition-all">
      <input
        placeholder="Pesquisar"
        className="flex-grow bg-[#0B0B0B] placeholder:text-sm placeholder:font-normal placeholder:text-[#838383] font-medium text-[#FFFFFF] outline-none w-full max-w-[400px]"
      />
      <div>
        <PiMagnifyingGlass size={24} color="#9D9D9D" />
      </div>
    </div>
  );
};

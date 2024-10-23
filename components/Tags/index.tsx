import React from "react";
interface IProps {
  title: string;
}

export const Tags: React.FC<IProps> = ({ title }) => {
  return (
    <button className="flex bg-[#0C0C0C] hover:bg-[#181818] h-fit w-fit whitespace-nowrap justify-center items-center p-4 rounded-[50px] text-sm text-white font-light">
      {title}
    </button>
  );
};

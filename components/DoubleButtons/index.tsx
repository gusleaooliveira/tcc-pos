import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface IProps {
  titleButton: string;
  titleSecondButton: string;
  onPrev?: () => void;
  onNext?:() => void;
}

const DoubleButtons = (props: IProps) => {
  const { titleButton, titleSecondButton, onNext, onPrev } = props;
  return (
    <div className=" w-full h-[52px] flex justify-between items-center mt-[24px]">
      <button onClick={onPrev} className=" w-[278px] h-[52px] rounded-l-lg flex items-center hover:bg-[#FFFFFF50] group">
        <div className="h-[33px]">
          <IoIosArrowBack className="size-7 text-white mr-[12px] group-hover:text-[#C09D11]" />
        </div>
        <p className="text-[12px] lg:text-[14px] text-white">{titleButton}</p>
      </button>
      <div className="w-[1px] h-[52px] opacity-50 bg-white"></div>
      <button onClick={onNext} className="w-[278px] h-[52px] rounded-r-lg justify-end flex items-center hover:bg-[#FFFFFF50] group">
        <div className="flex items-center">
          <p className="text-[12px] xl:text-[14px] text-white">
            {titleSecondButton}
          </p>
          <div className="h-[33px] group-hover:text-yellow-500">
            <IoIosArrowForward className="size-7 ml-[12px] text-white group-hover:text-[#C09D11]" />
          </div>
        </div>
      </button>
    </div>
  );
};

export default DoubleButtons;

import React from "react";
import { PiCaretCircleUpFill } from "react-icons/pi";

interface IProps {
  open: boolean;
  onClose: (e: boolean) => void;
  children: React.ReactNode;
}

const Modal = (props: IProps) => {
  const { open, onClose, children } = props;
  return (
    <div
      className={`
        fixed inset-0 flex justify-end items-start
        ${open ? "visible bg-black/55" : "opacity-0 invisible"}
      `}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`
          transition-opacity duration-700 ease-in-out relative bg-[#0E0E0E] rounded-b-xl rounded-t-none shadow p-6 h-fit w-[350px] ml-6 flex justify-start items-center
          ${open ? "!scale-100 !opacity-100" : "scale-50 opacity-0"}
        `}
      >
        {children}
        <div
          className="absolute right-4 top-4 flex items-center justify-center cursor-pointer"
          onClick={() => onClose(!open)}
        >
          <PiCaretCircleUpFill size={30} color="#8F8F8F" />
        </div>
      </div>
    </div>
  );
};

export default Modal;

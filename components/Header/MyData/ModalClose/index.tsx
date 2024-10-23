import React from "react";
import { InfoCircle } from "iconsax-react";
import Button from "@/components/Button";

interface IProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const ModalClose = (props: IProps) => {
  const { open, onClose, onConfirm } = props;

  const onSubmit = () => {
    onConfirm?.();
    handleClose();
  };

  const handleClose = () => {
    onClose?.();
  };

  return (
    <div
      className={`
        fixed inset-0 flex justify-center items-center transition-colors z-50
        ${open ? "visible bg-black/20" : "invisible"}
      `}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`
          bg-black rounded-xl shadow p-6 transition-all duration-300 w-[350px] h-[393px] flex flex-col justify-center items-center 
          ${open ? "scale-100 opacity-100" : "scale-50 opacity-0"}
        `}
      >
        <div className="flex flex-col justify-center items-center">
          <div className="h-[114px] w-[114px] rounded-full border-[1px] border-[#D9D9D933] bg-[#0B0B0B] justify-center items-center flex">
            <InfoCircle size="40" color="#f4c91d" variant="TwoTone" />
          </div>
          <div className="gap-3 mt-6 justify-center items-center flex flex-col">
            <span className="text-white text-[28px] font-normal">Atenção!</span>
            <p className="text-[#FFFFFF80] text-[16px] font-light justify-center items-center text-center">
              Deseja mesmo sair? todas as alterações feitas no perfil não serão
              salvas.
            </p>
          </div>
          <div className="mt-6 flex w-full justify-between items-center gap-2">
            <Button
              text="Voltar"
              icon={false}
              color="yellow"
              variant="filled"
              onClick={handleClose}
            />
            <Button
              text="Sair"
              icon={false}
              color="red"
              variant="outline"
              onClick={onSubmit}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalClose;

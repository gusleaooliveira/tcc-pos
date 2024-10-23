"use client";
import { useState, Dispatch, SetStateAction, FC } from "react";
import { PiSlidersHorizontalFill } from "react-icons/pi";
import "@vidstack/react/player/styles/base.css";
import {
  DrawerContent,
  DrawerFooter,
  DrawerOverlay,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Drawer } from "@/components/ui/drawer";
import Image from "next/image";
import pencil from "@/public/img/pencil.svg";
import barra_88 from "@/public/img/barra_88.svg";
import badge_ouro from "@/public/img/badge_ouro.svg";
import Button from "@/components/Button";
import { useMediaQuery } from "react-responsive";
import delete_element from "@/public/img/x.svg";
import ModalClose from "./ModalClose";
import ChangePassword from "./ChangePassword";
import { FormProvider, useForm } from "react-hook-form";
import { IMyDataSchema, myDataSchema } from "@/schemas/myDataSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormTabs } from "@/components/Tabs";
import { useSession } from "next-auth/react";
import Avatar from "@/components/Avatar";
import { useRef } from "react";
import { api } from "@/lib/axios";

interface IProps {
  isMyDataOpen: boolean;
  setIsMyDataOpen: Dispatch<SetStateAction<boolean>>;
}

const MyData: FC<IProps> = ({ isMyDataOpen, setIsMyDataOpen }) => {
  const [changePasswordOpen, setChangePasswordOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const { data: session, update } = useSession();

  console.log("🚀 ~ session:", session);

  const isLgScreen = useMediaQuery({ minWidth: 1024 });
  const user = session?.user?.user;
  const emailUser = user?.email || "";
  const nameUser = user?.name || "";

  const inputFileRef = useRef<HTMLInputElement | null>(null);
  const [profileImage, setProfileImage] = useState<string | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  const handleProfileClick = () => {
    if (inputFileRef.current) {
      inputFileRef.current.click();
    }
  };

  const methods = useForm<IMyDataSchema>({
    mode: "onSubmit",
    resolver: zodResolver(myDataSchema),
    defaultValues: {
      name: user?.name || "",
      last_name: user?.last_name || "",
      cpf: user?.cpf || "",
      phone: user?.phone || "",
      description: user?.description || "",
      gender: user?.gender || "",
      social_media: {
        instagram: user?.social_media?.instagram || "",
        facebook: user?.social_media?.facebook || "",
        twitter: user?.social_media?.twitter || "",
        linkedin: user?.social_media?.linkedin || "",
        tiktok: user?.social_media?.tiktok || "",
        youtube: user?.social_media?.youtube || "",
      },
      address: {
        name: user?.address?.name || "",
        cep: user?.address?.cep || "",
        country: user?.address?.country || "",
        state: user?.address?.state || "",
        city: user?.address?.city || "",
        neighborhood: user?.address?.neighborhood || "",
        street: user?.address?.street || "",
        number: user?.address?.number || "",
        complement: user?.address?.complement || "",
      },
    },
  });

  const {
    handleSubmit,
    formState: { isDirty },
  } = methods;

  const handleClose = () => {
    setOpen(false);
    setIsMyDataOpen(false);
  };

  const onSubmit = async (dataForm: IMyDataSchema) => {
    try {
      const response = await api.put(`/user/${user?.id}`, {
        ...dataForm,
        id: user?.id,
      });
      await update({ user: response.data });
      console.log("🚀 ~ response:", response);
    } catch (error) {
      console.log("🚀 ~ error:", error);
    }
  };
  return (
    <>
      <Drawer
        open={isMyDataOpen}
        onOpenChange={setIsMyDataOpen}
        handleOnly
        direction={isLgScreen ? "right" : "bottom"}
      >
        <DrawerOverlay />
        <DrawerTrigger className="display-none">
          <DrawerTitle>display none</DrawerTitle>
        </DrawerTrigger>
        <FormProvider {...methods}>
          <DrawerContent className="mt-[56px] h-screen w-full lg:w-[556px] flex items-center border-none bg-black right-0 px-6">
            <div className="flex w-full justify-between items-center">
              <span className="font-normal text-[22px] text-white">
                Meus Dados
              </span>
              <button
                className="h-8 w-8 bg-[#1C1C1C] rounded-lg items-center justify-center flex"
                onClick={() =>
                  isDirty ? setOpen(true) : setIsMyDataOpen(false)
                }
              >
                <Image
                  src={delete_element}
                  alt="fechar"
                  width={15}
                  height={15}
                />
              </button>
            </div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col items-center overflow-y-scroll h-full w-full px-2 mb-[104px] mt-10"
            >
              <div
                onClick={handleProfileClick}
                className="relative cursor-pointer"
              >
                <Avatar big />
                <div className="h-6 w-6 flex justify-center items-center bg-[#222222] border-2 border-[#000000] rounded-full absolute bottom-[2px] right-[5px]">
                  <Image src={pencil} alt="lápis" height={12} width={12} />
                </div>
              </div>
              <input
                type="file"
                ref={inputFileRef}
                style={{ display: "none" }}
                onChange={handleImageChange}
              />
              <span className="text-[#FFFFFF] font-normal text-2xl mt-2">
                {nameUser || "N/A"}
              </span>
              <span className="text-[#FFFFFF80] font-light text-sm mb-6">
                {emailUser || "N/A"}
              </span>
              <div className="w-full">
                <Button
                  text="Alterar senha"
                  color="yellow"
                  variant="filled"
                  onClick={() => setChangePasswordOpen(true)}
                />
              </div>
              <div className="flex justify-between h-[98px] w-full bg-[#171717] rounded-xl p-4 gap-4 mt-4">
                <div className="flex flex-col items-start">
                  <span className="text-[#FFFFFF] font-semibold text-base">
                    Seu progresso até aqui.
                  </span>
                  <div className="flex justify-start items-center mt-2">
                    <span className="text-[#FFFFFF] font-normal text-base">
                      88%
                    </span>
                    <Image
                      src={barra_88}
                      alt="barra"
                      height={9}
                      width={232}
                      className="h-[9px] w-[232px] ml-2"
                    />
                  </div>
                </div>
                <div>
                  <Image
                    src={badge_ouro}
                    alt="badge ouro"
                    height={66}
                    width={56}
                    className="h-[68px] w-[76px]"
                  />
                </div>
              </div>
              <FormTabs />
            </form>
            <DrawerFooter className="fixed bottom-0 w-full p-4 bg-black h-fit">
              <Button
                onClick={handleSubmit(onSubmit)}
                text="Salvar alterações"
                color="yellow"
                variant="filled"
                disabled={!isDirty}
              />
            </DrawerFooter>
            <ModalClose
              open={open}
              onClose={() => setOpen(false)}
              onConfirm={handleClose}
            />
            {changePasswordOpen ? (
              <ChangePassword
                open={changePasswordOpen}
                onClose={() => setChangePasswordOpen(false)}
              />
            ) : null}
          </DrawerContent>
        </FormProvider>
      </Drawer>
    </>
  );
};

export default MyData;

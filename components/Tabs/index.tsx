"use client";
import React, { useState, useEffect, useRef } from "react";
import Input from "../Input";
import TextArea from "../TextArea";
import { Controller, useFormContext } from "react-hook-form";
import { IMyDataSchema } from "@/schemas/myDataSchemas";
import { InputMaskComponent } from "../InputMask";
import { fetchAddressByCEP } from "@/services/hooks/address";
import { SelectGender } from "../Header/MyData/SelectGender";

export const FormTabs = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [selectedTab, setSelectedTab] = useState("dadosPessoais");
  const { control, setValue, setError } = useFormContext<IMyDataSchema>();

  useEffect(() => {
    const handleMouseLeave = () => setIsDragging(false);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.addEventListener(
        "mouseleave",
        handleMouseLeave
      );
    }
    return () => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.removeEventListener(
          "mouseleave",
          handleMouseLeave
        );
      }
    };
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (scrollContainerRef.current) {
      setIsDragging(true);
      setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
      setScrollLeft(scrollContainerRef.current.scrollLeft);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleCepChange = async (
    value: string,
    onChange: (value: string) => void,
    setValue: any
  ) => {
    onChange(value);

    if (value.length === 9) {
      try {
        const address = await fetchAddressByCEP(value);

        if (!!address) {
          setValue("address.street", address.street);
          setValue("address.neighborhood", address.neighborhood);
          setValue("address.city", address.city);
          setValue("address.state", address.state);
          setValue("address.country", address.country);

          setValue("address.name", "");
          setValue("address.complement", "");
          setValue("address.number", "");
        }
      } catch {
        setError("address.cep", { message: "CEP inválido" });
        setValue("address.street", "");
        setValue("address.neighborhood", "");
        setValue("address.city", "");
        setValue("address.state", "");
        setValue("address.country", "");
        setValue("address.name", "");
        setValue("address.complement", "");
        setValue("address.number", "");
      }
    }
  };

  return (
    <div className="flex flex-col w-full h-full py-4">
      <div
        ref={scrollContainerRef}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        style={{ cursor: isDragging ? "grabbing" : "grab" }}
        className="flex cursor-pointer select-none w-full min-h-[36px] z-50"
      >
        <button
          className={`border-b-[1px] w-full text-sm font-normal text-white ${
            selectedTab === "dadosPessoais"
              ? "border-yellow-400"
              : "border-transparent"
          }`}
          onClick={() => setSelectedTab("dadosPessoais")}
        >
          DADOS PESSOAIS
        </button>
        <button
          className={`border-b-[1px] ml-5 w-full text-sm font-normal text-white ${
            selectedTab === "redesSociais"
              ? "border-yellow-400"
              : "border-transparent"
          }`}
          onClick={() => setSelectedTab("redesSociais")}
        >
          REDES SOCIAIS
        </button>
        <button
          className={`border-b-[1px] ml-5 w-full text-sm font-normal text-white ${
            selectedTab === "endereco"
              ? "border-yellow-400"
              : "border-transparent"
          }`}
          onClick={() => setSelectedTab("endereco")}
        >
          ENDEREÇO
        </button>
      </div>
      <div className="w-full transition-opacity duration-900 ease-in-out pt-6">
        {selectedTab === "dadosPessoais" && (
          <div className="flex flex-col h-fit">
            <div className="">
              <Controller
                name="name"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <Input
                    placeholder="Digite seu nome"
                    label="Nome"
                    error={!!error?.message ? error.message : ""}
                    {...field}
                  />
                )}
              />
            </div>
            <div className="mt-6">
              <Controller
                name="last_name"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <Input
                    placeholder="Digite seu sobrenome"
                    label="Sobrenome"
                    error={!!error?.message ? error.message : ""}
                    {...field}
                  />
                )}
              />
            </div>
            <div className="mt-6">
              <Controller
                name="phone"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <InputMaskComponent
                    placeholder="Digite seu número de contato"
                    label="Número de contato"
                    mask="(99) 99999-9999"
                    error={!!error?.message ? error.message : ""}
                    {...field}
                  />
                )}
              />
            </div>
            <div className="mt-6">
              <Controller
                name="description"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <TextArea
                    placeholder="Digite sua descrição"
                    label="Descrição"
                    error={!!error?.message ? error.message : ""}
                    {...field}
                  />
                )}
              />
            </div>
            <div className="mt-6">
              <Controller
                name="cpf"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <InputMaskComponent
                    placeholder="Digite seu CPF"
                    label="CPF"
                    mask="999.999.999-99"
                    error={!!error?.message ? error.message : ""}
                    {...field}
                  />
                )}
              />
            </div>
            <div className="mt-6 mb-1">
              <Controller
                name="gender"
                control={control}
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <SelectGender
                    error={!!error?.message ? error.message : ""}
                    onChange={onChange}
                    value={value}
                  />
                )}
              />
            </div>
          </div>
        )}
        {selectedTab === "redesSociais" && (
          <div className="flex flex-col h-fit">
            <div className="">
              <Controller
                name="social_media.instagram"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <Input
                    placeholder="Digite seu instagram"
                    label="Instagram"
                    error={!!error?.message ? error.message : ""}
                    {...field}
                  />
                )}
              />
            </div>
            <div className="mt-6">
              <Controller
                name="social_media.facebook"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <Input
                    placeholder="Digite seu facebook"
                    label="Facebook"
                    error={!!error?.message ? error.message : ""}
                    {...field}
                  />
                )}
              />
            </div>
            <div className="mt-6">
              <Controller
                name="social_media.twitter"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <Input
                    placeholder="Digite seu x"
                    label="Digite seu x"
                    error={!!error?.message ? error.message : ""}
                    {...field}
                  />
                )}
              />
            </div>
            <div className="mt-6">
              <Controller
                name="social_media.linkedin"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <Input
                    placeholder="Digite seu linkedin"
                    label="Linkedin"
                    error={!!error?.message ? error.message : ""}
                    {...field}
                  />
                )}
              />
            </div>
            <div className="mt-6">
              <Controller
                name="social_media.tiktok"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <Input
                    placeholder="Digite seu tiktok"
                    label="Tiktok"
                    error={!!error?.message ? error.message : ""}
                    {...field}
                  />
                )}
              />
            </div>
            <div className="mt-6">
              <Controller
                name="social_media.youtube"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <Input
                    placeholder="Digite seu youtube"
                    label="Youtube"
                    error={!!error?.message ? error.message : ""}
                    {...field}
                  />
                )}
              />
            </div>
          </div>
        )}
        {selectedTab === "endereco" && (
          <div className="flex flex-col h-fit">
            <div className="">
              <Controller
                name="address.name"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <Input
                    placeholder="Casa ou trabalho"
                    label="Nome do endereço"
                    error={!!error?.message ? error.message : ""}
                    {...field}
                  />
                )}
              />
            </div>
            <div className="mt-6">
              <Controller
                name="address.cep"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <InputMaskComponent
                    placeholder="Digite seu CEP"
                    error={!!error?.message ? error.message : ""}
                    label="CEP"
                    mask="99999-999"
                    {...field}
                    onChange={(e) =>
                      handleCepChange(e.target.value, field.onChange, setValue)
                    }
                  />
                )}
              />
            </div>
            <div className="mt-6">
              <Controller
                name="address.country"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <Input
                    placeholder="Digite seu país"
                    label="País"
                    disabled={true}
                    error={!!error?.message ? error.message : ""}
                    {...field}
                  />
                )}
              />
            </div>
            <div className="mt-6">
              <Controller
                name="address.state"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <Input
                    placeholder="Digite seu estado"
                    label="Estado"
                    disabled={true}
                    error={!!error?.message ? error.message : ""}
                    {...field}
                  />
                )}
              />
            </div>
            <div className="mt-6">
              <Controller
                name="address.city"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <Input
                    placeholder="Digite seu cidade"
                    label="Cidade"
                    disabled={true}
                    error={!!error?.message ? error.message : ""}
                    {...field}
                  />
                )}
              />
            </div>
            <div className="mt-6">
              <Controller
                name="address.neighborhood"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <Input
                    placeholder="Digite seu bairro"
                    label="Bairro"
                    disabled={true}
                    error={!!error?.message ? error.message : ""}
                    {...field}
                  />
                )}
              />
            </div>
            <div className="mt-6">
              <Controller
                name="address.street"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <Input
                    placeholder="Digite sua rua"
                    label="Rua"
                    error={!!error?.message ? error.message : ""}
                    {...field}
                  />
                )}
              />
            </div>
            <div className="mt-6">
              <Controller
                name="address.number"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <Input
                    placeholder="Digite o número"
                    label="Número"
                    error={!!error?.message ? error.message : ""}
                    {...field}
                  />
                )}
              />
            </div>
            <div className="mt-6">
              <Controller
                name="address.complement"
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <Input
                    placeholder="Digite o complemento"
                    label="Complemento"
                    error={!!error?.message ? error.message : ""}
                    {...field}
                  />
                )}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

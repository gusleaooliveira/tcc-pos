"use client";
import React, { useState } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
interface IProps {
  error: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
export function SelectGender({ onChange, error, value }: IProps) {
  const MOCK_GENDER = ["Masculino", "Feminino", "Outro"];

  return (
    <div className="flex w-full relative flex-col">
      <div className="flex w-full justify-between mb-[1px]">
        <label
          htmlFor="input"
          className={`
          h-5 
          font-light
          text-sm
          text-[#FFFFFF80]
          `}
        >
          Gênero
        </label>
      </div>
      <Select
        value={value || "select"}
        onValueChange={(values: any) => onChange(values)}
        defaultValue={"select"}
      >
        <SelectTrigger className="w-full min-w-[240px]">
          <SelectValue placeholder="Selecione..." />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value={"select"}>Selecione...</SelectItem>
          {MOCK_GENDER.map((gender, index) => {
            return (
              <SelectItem key={index} value={gender}>
                {gender}
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
      {!!error ? (
        <p className={`absolute top-[59px] left-0 text-sm ${"text-red-600"}`}>
          {error}
        </p>
      ) : null}
    </div>
  );
}

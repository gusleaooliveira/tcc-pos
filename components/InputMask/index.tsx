"use client";

import React, { ReactElement, useState, forwardRef } from "react";
import InputMask from "react-input-mask";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  label: string;
  assistiveLabel?: string;
  error?: string;
  disabled?: boolean;
  value?: string;
  name?: string;
  type?: string;
  mask?: string;
  requiredField?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputMaskComponent = forwardRef<InputMask, InputProps>(
  (
    {
      placeholder,
      label,
      error,
      disabled = false,
      onBlur,
      onChange,
      name,
      value,
      requiredField,
      type = "text",
      mask,
    },
    ref
  ) => {
    return (
      <fieldset className="h-102 w-full">
        <div className="flex w-full justify-between mb-[1px]">
          <label
            htmlFor="input"
            className={`
            h-5 
            font-light
            text-sm
            text-[#FFFFFF80]
            ${!!error ? "text-red-600" : ""}
            ${disabled ? "text-[#D4D6D9]" : ""}
            `}
          >
            {label}
          </label>
          {requiredField && (
            <span className="text-red-600 text-sm font-light">*</span>
          )}
        </div>
        <div className="flex gap-1 w-full relative">
          <div
            className={`
            p-4
            gap-3
            bg-[#0B0B0B]
            flex items-center
            border rounded-xl 
            w-full
            ${
              !!error
                ? "border border-red-600 focus-within:border-red-600 hover:border-red-600"
                : "border-transparent focus-within:border-[#DAB31940] hover:border-[#DAB31940]"
            }
            ${
              disabled
                ? "border-[#D4D6D9] cursor-not-allowed"
                : "border-transparent focus-within:border-[#DAB31940] hover:border-[#DAB31940]"
            }
            h-[52px]
            sm:h-14 
            transition-all 
            hover:transition-all 
          `}
          >
            <InputMask
              ref={ref}
              className={`
              flex-grow
              bg-transparent
              placeholder:text-base
              placeholder:font-light
              font-medium
              w-full
              text-[#FFFFFF]
              placeholder:text-[#FFFFFF80]
              ${!!error ? "placeholder-red-600 text-red-600" : ""}
              ${disabled ? "placeholder-[#FFFFFF80] cursor-not-allowed" : ""}
            `}
              type={type}
              placeholder={placeholder}
              disabled={disabled}
              name={name}
              value={value}
              mask={mask || ""}
              onChange={onChange}
              onBlur={onBlur}
              style={{ outline: "none" }}
            />
          </div>
          {!!error ? (
            <p
              className={`absolute top-[59px] left-0 text-sm ${"text-red-600"}`}
            >
              {error}
            </p>
          ) : null}
        </div>
      </fieldset>
    );
  }
);

InputMaskComponent.displayName = "InputMaskComponent";

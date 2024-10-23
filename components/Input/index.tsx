"use client";

import React, { ReactElement, useState, useRef, forwardRef } from "react";

interface InputProps {
  placeholder: string;
  label: string;
  error?: string;
  disabled?: boolean;
  leftIcon?: ReactElement;
  rightIcon?: ReactElement;
  value?: string;
  name?: string;
  type?: string;
  requiredField?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      placeholder,
      label,
      error,
      disabled = false,
      leftIcon,
      rightIcon,
      onBlur,
      onChange,
      name,
      value,
      requiredField,
      type = "text",
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [inputType, setInputType] = useState(type);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleFocus = () => {
      setIsFocused(true);
    };

    const handleBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
      setIsFocused(false);
      onBlur(e);
    };

    const handleMouseEnter = () => {
      setIsHovered(true);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    const focusInput = () => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    };

    const isFilled = value && value.length > 0;

    const toggleInputType = () => {
      setInputType((prevType) =>
        prevType === "password" ? "text" : "password"
      );
    };

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
          {leftIcon && (
            <div
              className={`flex h-[52px] w-16 sm:w-[76px] sm:h-[56px] bg-[#0B0B0B] rounded-xl justify-center items-center ${
                !!error
                  ? "bg-[#230404]"
                  : isFilled || isHovered || isFocused
                    ? "bg-[#DAB31940]"
                    : "#0B0B0B"
              }`}
            >
              <figure
                className={`${
                  disabled ? "cursor-not-allowed " : "cursor-auto"
                }`}
              >
                {React.cloneElement(leftIcon, {
                  color: !!error
                    ? "#dc2626"
                    : disabled
                      ? "#D4D6D9"
                      : isFocused || isHovered || isFilled
                        ? "#F4C91D"
                        : "#FFFFFF80",
                })}
              </figure>
            </div>
          )}
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
            onClick={focusInput}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <input
              ref={ref as React.Ref<HTMLInputElement>}
              className={`
              flex-grow
              bg-transparent
              placeholder:text-base
              placeholder:font-light
              font-medium
              w-full
              text-[#FFFFFF]
              placeholder:text-[#FFFFFF80]
              ${!!error ? "placeholder-red-600" : ""}
              ${disabled ? "placeholder-[#FFFFFF80] cursor-not-allowed" : ""}
            `}
              type={inputType}
              placeholder={placeholder}
              style={{ outline: "none" }}
              disabled={disabled}
              name={name}
              value={value}
              onChange={onChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
            <div className="">
              {!!rightIcon && (
                <button
                  type="button"
                  onClick={toggleInputType}
                  className={`${
                    disabled ? "cursor-not-allowed " : "cursor-pointer"
                  }`}
                >
                  {React.cloneElement(rightIcon, {
                    color: disabled ? "#D4D6D9" : "#2A2B2B",
                  })}
                </button>
              )}
            </div>
          </div>
          {!!error && (
            <p
              className={`absolute top-[59px] left-0 text-sm ${"text-red-600"}`}
            >
              {error}
            </p>
          )}
        </div>
      </fieldset>
    );
  }
);

Input.displayName = "Input";

export default Input;

"use client";

import React, { ReactElement } from "react";

interface TextAreaProps {
  placeholder: string;
  label: string;
  error?: string;
  disabled?: boolean;
  leftIcon?: ReactElement;
  rightIcon?: ReactElement;
  value?: string;
  name?: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextArea: React.FC<TextAreaProps> = ({
  placeholder,
  label,
  error,
  disabled,
  rightIcon,
  onBlur,
  onChange,
  name,
  value,
}) => {
  const textAreaRef = React.createRef<HTMLTextAreaElement>();

  const focusTextArea = () => {
    if (textAreaRef.current) {
      textAreaRef.current.focus();
    }
  };

  return (
    <fieldset className="h-102 w-full relative">
      <label
        htmlFor="textArea"
        className={`
        h-5 
        text-sm
        text-[#666769]
        ${!!error ? "text-[red]" : ""}
        ${disabled ? "text-[#D4D6D9]" : ""}
        `}
      >
        {label}
      </label>
      <div
        className={`
          p-4
          gap-3
        bg-[#0B0B0B]
          flex items-center
          border rounded-xl 
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
          min-h-[56px]
          transition-all 
          hover:transition-all 
        `}
        onClick={focusTextArea}
      >
        <textarea
          ref={textAreaRef}
          className={`
          flex-grow
          font-clash
          min-h-[56px]
          h-full
        bg-[#0B0B0B]
          placeholder:text-base
          placeholder:font-light
          placeholder:text-[#FFFFFF80]
          font-medium
          ${!!error ? "placeholder-red-600 text-red-600" : ""}
              ${disabled ? "placeholder-[#FFFFFF80] cursor-not-allowed" : ""}
          `}
          placeholder={placeholder}
          style={{ outline: "none", color: "white" }}
          disabled={disabled}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
        {!!rightIcon ? (
          <figure
            className={`${disabled ? "cursor-not-allowed " : "cursor-auto"}`}
          >
            {React.cloneElement(rightIcon, {
              color: !!error ? "#FF0000" : disabled ? "#D4D6D9" : "#2A2B2B",
            })}
          </figure>
        ) : null}
      </div>
      {!!error ? (
        <p className={`absolute bottom left-0 text-sm ${"text-red-600"}`}>
          {error}
        </p>
      ) : null}
    </fieldset>
  );
};

export default TextArea;

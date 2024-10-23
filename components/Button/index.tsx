import { Login } from "iconsax-react";
import React from "react";

type Color = "yellow" | "red";
type Variant = "filled" | "outline";

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: boolean;
  text?: string;
  color: Color;
  variant: Variant;
}

const ButtonStyles = (
  variant: Variant,
  color: Color,
  disabled: boolean
): string => {
  const baseStyles = `h-16 w-full overflow-hidden rounded-xl`;

  const colorStyles: Record<Variant, Record<Color, string>> = {
    filled: {
      yellow:
        "relative transition-all before:absolute before:left-[-190px] before:top-0 before:h-16 before:w-[150px] before:translate-x-44 before:rotate-0 before:opacity-100 before:duration-700 before:filter before:blur-xl bg-[#F4C91D] before:bg-[#FFE41A] hover:before:translate-x-[700px]",
      red: "bg-[#000000] text-[#D63131] border border-[#D63131]",
    },
    outline: {
      red: "bg-[#000000] text-[#D63131] border border-[#D63131]",
      yellow:
        "relative transition-all before:absolute before:left-[-190px] before:top-0 before:h-16 before:w-[150px] before:translate-x-44 before:rotate-0 before:opacity-100 before:duration-700 before:filter before:blur-xl bg-[#F4C91D] before:bg-[#FFE41A] hover:before:translate-x-[700px]",
    },
  };

  if (!(variant in colorStyles) || !(color in colorStyles[variant])) {
    return baseStyles;
  }

  if (disabled) {
    return `${baseStyles} bg-[#0F0F0F] cursor-not-allowed text-[#97999A] font-light flex items-center justify-center gap-2 text-base`;
  }

  return `${baseStyles} ${colorStyles[variant][color]}`;
};

const Button: React.FC<IProps> = ({ icon, text, color, variant, ...props }) => {
  return (
    <button
      className={ButtonStyles(variant, color, !!props.disabled)}
      {...props}
    >
      <span className="relative z-10 text-xl flex items-center justify-center gap-2">
        {icon && (
          <Login
            size="32"
            color={!!props.disabled ? "#D9D9D9" : "#000000"}
            variant="TwoTone"
          />
        )}
        {text}
      </span>
    </button>
  );
};

export default Button;

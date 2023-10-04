import React, { MouseEventHandler, PropsWithChildren } from "react";

interface ButtonProps extends PropsWithChildren {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  variant?: "primary" | "secondary";
}

export const Button: React.FC<ButtonProps> = ({
  className,
  onClick,
  children,
  variant,
}) => {
  switch (variant) {
    case "primary":
      return (
        <div>
          <button
            className={`border-none bg-yellow-500 text-black pt-3 pb-2 px-6 font-futura-bold font-bold  cursor-pointer rounded-md md:text-lg text-base whitespace-nowrap ${className}`}
            onClick={onClick}
            type="submit"
          >
            {children}
          </button>
        </div>
      );
    case "secondary":
      return (
        <button
          className={`border border-yellow-500 bg-none text-white pt-3 pb-2 px-6 font-futura-bold font-bold  cursor-pointer rounded-md md:text-lg text-base whitespace-nowrap ${className}`}
          onClick={onClick}
          type="submit"
        >
          {children}
        </button>
      );
    default:
      return (
        <button
          className={`border-none bg-yellow-500 text-black pt-3 pb-2 px-6 font-futura-bold font-bold cursor-pointer rounded-md md:text-lg text-base whitespace-nowrap ${className}`}
          onClick={onClick}
          type="submit"
        >
          {children}
        </button>
      );
  }
};

import React, { FC } from "react";

interface IconProps {
  size: number;
}

export const Menu: FC<IconProps> = ({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="square"
    >
      <path d="M21 9.5H3M21 4.5H3M21 14.5H3M21 19.5H3" />
    </svg>
  );
};

import React, { FC } from "react";

interface IconProps {
  size: number;
}

export const Checkmark: FC<IconProps> = ({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#F8C425"
      strokeWidth="1.5"
      strokeLinecap="square"
    >
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  );
};

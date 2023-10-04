import React, { FC } from "react";

interface IconProps {
  size: number;
}

export const Minus: FC<IconProps> = ({ size }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 17 3"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="17" height="3" fill="white" />
    </svg>
  );
};

import React, { FC } from "react";

interface IconProps {
  size: number;
}

export const Plus: FC<IconProps> = ({ size }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.93457 9.59961V6.875H7.37988V0.546875H10.0898V6.875H16.5352V9.59961H10.0898V15.9277H7.37988V9.59961H0.93457Z"
        fill="white"
      />
    </svg>
  );
};

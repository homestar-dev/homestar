import React, { FC } from "react";

interface IconProps {
  size: number;
}

export const Listen: FC<IconProps> = ({ size }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="50"
        cy="50"
        r="48"
        fill="#051250"
        stroke="white"
        strokeWidth="4"
      />
      <path
        d="M76.5 54.25H66.8333C65.7288 54.25 64.8333 55.1454 64.8333 56.25V69.75C64.8333 70.8546 65.7288 71.75 66.8333 71.75H74.5C75.6046 71.75 76.5 70.8546 76.5 69.75V54.25C76.5 39.7525 64.7475 28 50.25 28C35.7525 28 24 39.7525 24 54.25V69.75C24 70.8546 24.8954 71.75 26 71.75H33.6667C34.7712 71.75 35.6667 70.8546 35.6667 69.75V56.25C35.6667 55.1454 34.7712 54.25 33.6667 54.25H24"
        stroke="white"
      />
    </svg>
  );
};

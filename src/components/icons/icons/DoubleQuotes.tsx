import React, { FC } from "react";

interface IconProps {
  size: number;
}

export const DoubleQuotes: FC<IconProps> = ({ size }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M28.6094 30.9531L19.1875 27.2969L32.5469 0.484375L39.6719 3.39062L28.6094 30.9531ZM9.85938 30.9531L0.4375 27.2969L13.7969 0.484375L20.9219 3.39062L9.85938 30.9531Z"
        fill="white"
      />
    </svg>
  );
};

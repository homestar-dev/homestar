import React, { FC } from "react";

interface IconProps {
  size: number;
}

export const DotOutlined: FC<IconProps> = ({ size }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 11 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle opacity="0.7" cx="5.5" cy="5.5" r="5" stroke="#051250" />
    </svg>
  );
};

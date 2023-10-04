import React, { FC } from "react";

interface IconProps {
  size: number;
}

export const ScrollDownIndicator: FC<IconProps> = ({ size }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 29 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.851746"
        y="14"
        width="19.1756"
        height="1.2798"
        rx="0.6399"
        transform="rotate(41.7227 0.851746 14)"
        fill="white"
      />
      <rect
        x="13.5077"
        y="26.8804"
        width="19.1557"
        height="1.12065"
        rx="0.560323"
        transform="rotate(-41.945 13.5077 26.8804)"
        fill="white"
      />
      <rect
        x="0.851746"
        width="19.1756"
        height="1.2798"
        rx="0.6399"
        transform="rotate(41.7227 0.851746 0)"
        fill="white"
      />
      <rect
        x="13.5077"
        y="12.8804"
        width="19.1557"
        height="1.12065"
        rx="0.560323"
        transform="rotate(-41.945 13.5077 12.8804)"
        fill="white"
      />
    </svg>
  );
};

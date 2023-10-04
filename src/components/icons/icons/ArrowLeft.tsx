import React, { FC } from "react";

interface IconProps {
  size: number;
}

export const ArrowLeft: FC<IconProps> = ({ size }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 27 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_i_23_1703)">
        <path d="M0 14.5L20.25 27.0574V1.94263L0 14.5Z" fill="#F4F5F7" />
      </g>
      <defs>
        <filter
          id="filter0_i_23_1703"
          x="0"
          y="0"
          width="27"
          height="33"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_23_1703"
          />
        </filter>
      </defs>
    </svg>
  );
};

import React, { FC } from "react";

interface IconProps {
  size: number;
}

export const YellowArrowRight: FC<IconProps> = ({ size }) => {
  return (
    <svg
      width="78"
      height="38"
      viewBox="0 0 78 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_370_200)">
        <path
          d="M74 15L49 0.566243V29.4338L74 15ZM4 17.5H51.5V12.5H4V17.5Z"
          fill="#F8C425"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_370_200"
          x="0"
          y="0.566284"
          width="78"
          height="36.8674"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_370_200"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_370_200"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

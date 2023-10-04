import React from "react";
import Image from "next/image";
import dark from "@/public/svg/hexagonDarkBlue.svg";
import medium from "@/public/svg/hexagonMediumBlue.svg";
import light from "@/public/svg/hexagonLightBlue.svg";

interface ActivitiesCardProps {
  title: string;
  text: string;
  color: "dark" | "medium" | "light";
}

export const ActivitiesCard: React.FC<ActivitiesCardProps> = ({
  title,
  text,
  color,
}) => {
  return (
    <div className="flip w-[326px] h-[326px] cursor-pointer tracking-widest">
      <div className="flip-content">
        <div className="flip-front">
          <div className="relative">
            <Image
              src={
                (color === "dark" && dark) ||
                (color === "medium" && medium) ||
                (color === "light" && light)
              }
              alt="hexagon dark blue"
            />
            <div className="absolute inset-0 -left-2 flex items-center justify-center">
              <div className="text-white  text-[26px] whitespace-normal h-max font-futura-medium ">
                {title}
              </div>
            </div>
          </div>
        </div>
        <div className="flip-back">
          <div className="relative">
            <Image
              src={
                (color === "dark" && dark) ||
                (color === "medium" && medium) ||
                (color === "light" && light)
              }
              alt="hexagon dark blue"
            />
            <div className="absolute inset-0 -left-4 top-4 flex items-center justify-center md:p-16">
              <div className="text-white  text-sm w-max font-futura-medium text-wrap md:px-0 px-12">
                {text}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

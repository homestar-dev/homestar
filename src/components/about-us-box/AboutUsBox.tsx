import React from "react";
import { Icon, IconEnum } from "../icons/Icon";

interface AboutUsBoxProps {
  title: string;
  text: string;
  onArrowClick?: () => void;
  className?: string;
  isArrowHidden?: boolean;
}

export const AboutUsBox: React.FC<AboutUsBoxProps> = ({
  title,
  text,
  onArrowClick,
  className,
  isArrowHidden,
}) => {
  return (
    <div
      className={`mt-12 relative flex justify-between sm:flex-row flex-wrap ${className}`}
    >
      <div className="border-4 border-blue-900 rounded-lg p-2 text-center sm:w-[250px] w-[165px] sm:h-[388px] grow mx-2">
        <div className="flex justify-center">
          <div className="absolute -top-10">
            <Icon icon={IconEnum.Listen} size={96} />
          </div>
          <div
            className="absolute top-40 xl:block hidden -right-[25%] z-10 cursor-pointer "
            onClick={onArrowClick}
          >
            <Icon
              icon={IconEnum.YellowArrowRight}
              size={96}
              className={`${isArrowHidden && "hidden"}`}
            />
          </div>
        </div>
        <div className="grid md:grid-rows-[120px] content-start">
          <div className="pt-14 text-grey-1000 tracking-widest md:text-[26px] text-xl leading-snug font-futura-bold">
            {title}
          </div>
          <div className=" pt-6 pb-4 font-futura-medium md:text-[22px] text-lg leading-relaxed">
            {text}
          </div>
        </div>
      </div>
    </div>
  );
};

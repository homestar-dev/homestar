import React from "react";
import Image, { StaticImageData } from "next/image";

interface EmployeeCardProps {
  name: string;
  position: string;
  email?: string;
  phoneNumbers?: string[];
  imageSrc: StaticImageData;
  alt: string;
}

export const EmployeeCard: React.FC<EmployeeCardProps> = ({
  name,
  position,
  email,
  phoneNumbers,
  imageSrc,
  alt,
}) => {
  return (
    <div className="flip w-[326px] h-[326px] cursor-pointer tracking-widest">
      <div className="flip-content">
        <div className="flip-front">
          <div className="relative">
            <Image
              src={imageSrc}
              className="rounded-sm object-cover  w-full h-[450px]"
              alt={alt}
            />
          </div>
        </div>
        <div className="flip-back">
          <div className="relative">
            <div className="absolute inset-0 text-center bg-white h-[450px] w-full rounded-sm">
              <div className="text-grey-1000 text-center font-futura-bold font-bold whitespace-nowrap text-2xl mt-20 text-wrap  px-8">
                {name}
              </div>
              <div className="text-grey-1000 md:text-2xl my-12 text-base font-futura-italic text-wrap md:px-0 px-8">
                {position}
              </div>
              <div className="flex flex-col">
                <div className="text-grey-1000 md:text-lg text-base font-futura-medium text-wrap md:px-0 px-8">
                  {email}
                </div>
                <div className="text-grey-1000 md:text-lg text-base font-futura-medium text-wrap md:px-0 px-8">
                  {phoneNumbers?.map((number, index) => (
                    <div
                      className="flex justify-center"
                      key={`${number} ${index}`}
                    >
                      {number}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

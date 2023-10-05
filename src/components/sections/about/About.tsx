import React from "react";
import Image from "next/image";
import Analytics from "@/public/svg/about/analytics.svg";
import { ScrollToId } from "@/constants/enums/scroll-to-ids";

interface AboutProps {}

export const About: React.FC<AboutProps> = () => {
  return (
    <div
      className="xl:pt-14 z-50 grid gap-y-8 bg-grey-100 xl:pb-12 md:px-32"
      id={ScrollToId.About}
    >
      <div className="flex xl:mx-16 mb-8 place-content-center md:text-right text-center">
        <Image
          className=" xl:block hidden mt-16"
          src={Analytics}
          alt="ingatlankiadás budapest"
          width={418}
          height={391}
        />
        <div className="flex flex-col gap-y-4 xl:pt-12 pt-4 xl:text-right text-center md:px-0 px-4">
          <div className="md:text-[36px] text-2xl md:py-0 py-4 font-futura-bold font-bold tracking-widest text-grey-1000 leading-relaxed">
            Mi az a HomeStar?
          </div>
          <div className="md:text-[30px] text-lg font-futura-medium leading-relaxed sm:ml-12">
            Egy holisztikus szolgáltatás azoknak, akik az ingatlankezelésre
            valódi befektetésként tekintenek. Szakértő csapatunk ahhoz járul
            hozzá, hogy professzionális vendéglátást nyújthass vendégeid
            számára, miközben a bevételed is maximalizálod. Ehhez pedig nincs
            szükség arra, hogy naponta órákat foglalkozz az ingatlanoddal.
          </div>
        </div>
      </div>
    </div>
  );
};

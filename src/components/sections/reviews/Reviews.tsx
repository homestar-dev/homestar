import React from "react";
import { LogoCarousel, ReviewStepper } from "@/components";

export const Reviews: React.FC = () => {
  return (
    <div>
      <div className="bg-grey-100 grid xl:grid-cols-2 justify-items-center items-center xl:pt-12 xl:px-48 px-4 ">
        <div className="col-span-2 justify-items-center items-center flex md:flex-nowrap flex-wrap-reverse">
          <div className="mb-8 sm:m-4">
            <ReviewStepper />
          </div>
          <div className="md:text-2xl text-xl md:w-3/4 sm:mx-20 text-center leading-relaxed tracking-widest font-semibold italic pb-4 font-futura-italic py-8">
            Kíváncsi vagy, milyen lesz velünk dolgozni? Beszéljenek helyettünk
            eddigi ügyfeleink véleményei!
          </div>
        </div>

        <div className="col-span-2 text-center mt-10 mb-4 md:text-4xl text-2xl font-futura-medium ">
          Hirdess ott, ahol a vendégeid keresnek!
        </div>
        <div className="col-span-2 md:text-xl text-lg xl:w-[544px] text-center mx-4 leading-relaxed font-futura-medium">
          Profilod és ingatlanod alapján a legrelevánsabb felületeket javasoljuk
          számodra.
        </div>
      </div>
      <div className="col-span-2 mt-12 pb-12 mx-12">
        <LogoCarousel />
      </div>
    </div>
  );
};

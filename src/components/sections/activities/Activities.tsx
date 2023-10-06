import React from "react";
import { ActivitiesCard } from "@/components";
import Image from "next/image";
import LogoWhite from "@/public/svg/logoWhite.svg";

interface ActivitiesProps {}

export const Activities: React.FC<ActivitiesProps> = () => {
  return (
    <div className="sm:pt-20 pt-8 grid bg-blue-300  relative xl:px-48 px-4">
      <div className="flex flex-wrap md:gap-4 md:text-5xl text-4xl md:text-left md:justify-start justify-center text-center font-futura-medium md:pl-20 pb-8">
        <div className="text-white">A HomeStar több,</div>
        <div className="text-blue-900">mint egy ingatlankezelő</div>
      </div>
      <div className="text-white md:text-right md:ml-auto text-center md:text-3xl text-xl md:w-3/4 md:pr-20 font-futura-medium font-bold">
        Szolgáltatásaink listáját úgy állítottuk össze, hogy te tényleg
        hátradőlhess. A további extrákban is kérheted a segítségünket:
      </div>
      <div className="flex flex-col justify-around mt-12  justify-self-center">
        <div className="flex justify-center sm:-mb-20">
          <ActivitiesCard
            color="dark"
            title="Ingatlan kivitelezés"
            text="Partnereink segítségével segítünk a nulláról egy tökéletes ingatlant létrehozni, melybe tolonganak majd a vendégek a kezdetektől."
          />
        </div>
        <div className="flex flex-wrap md:justify-around justify-center ">
          <ActivitiesCard
            color="light"
            title="IFA bevallás"
            text="Ha nem szeretnél foglalkozni a papírmunkával, bízd ránk: szívesen intézzük az ingatlannal kapcsolatos IFA bevallásodat is."
          />
          <div className="pt-12 md:block hidden">
            <Image src={LogoWhite} alt="homestar" />
          </div>
          <ActivitiesCard
            color="light"
            title="Engedélyeztetés"
            text="Tudjuk, mert már csináltuk: képben vagyunk az aktuális szabályokkal és segítünk eligazodni a bürokrácia útvesztőiben."
          />
        </div>
        <div className="flex flex-wrap justify-around">
          <ActivitiesCard
            color="medium"
            title="Ingatlanvásárlás"
            text="Hol és mennyiért érdemes ingatlanba fektetni? Szakértő csapatunk tudja a választ! Te csak add meg az összeget és hogy mit szeretnél elérni, mi pedig bemutatjuk a lehetőségeidet."
          />
          <ActivitiesCard
            color="medium"
            title="Home Staging"
            text="Szeretnéd még hívogatóbbá tenni a lakásod, esetleg teljes berendezést keresel, de nem tudod, hogyan vágj bele? Ehhez is jó szemünk van! Intézzük a terveket és a tárgyak elrendezését is."
          />
        </div>
      </div>
    </div>
  );
};

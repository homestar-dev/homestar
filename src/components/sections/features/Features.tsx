import React from "react";
import { BoxStepper, FadeInOnScroll, Icon, IconEnum } from "@/components";

export const Features: React.FC = () => {
  const boxData = [
    {
      title: "Magasabb bevétel",
      text: "Rendszerünknek köszönhetően képesek vagyunk arra, hogy mindig a lehető legmagasabb áron adjuk ki ingatlanod",
    },
    {
      title: "Biztonságos",
      text: "Lekövethető, átlátható és számodra is elérhető adatokkal dolgozunk.",
    },
    {
      title: "Kényelmes",
      text: "Napi több órányi munkát veszünk át tőled, hogy te kizárólag a profitra koncentrálhass.",
    },
    {
      title: "Fenntartható",
      text: "Folyamatosan figyelünk a lakásod állagára, hogy ne veszítsen az értékéből.",
    },
  ];
  return (
    <div className="z-50 grid gap-y-8 bg-grey-100 xl:pb-12 md:px-32">
      <div className="sm:pb-12">
        <div className="md:text-[36px] text-2xl text-center leading-relaxed font-futura-bold tracking-widest text-grey-1000 sm:px-0 px-2">
          A vendéglátás a mi szakmánk, a haszon a tiéd.
        </div>
        <div className="lg:flex hidden md:flex-nowrap flex-wrap justify-center  md:mt-12">
          <BoxStepper />
        </div>
        <div className="lg:hidden flex flex-col mt-4 mx-6">
          {boxData.map((boxData, index) => (
            <FadeInOnScroll
              key={index}
              threshold={1}
              children={
                <div className="flex gap-4">
                  <Icon icon={IconEnum.Checkmark} size={46} />
                  <div>
                    <div className="text-grey-1000 tracking-widest md:text-[26px] text-xl leading-snug font-futura-bold">
                      {boxData.title}
                    </div>
                    <div className=" pb-4 font-futura-medium md:text-[22px] text-lg leading-relaxed">
                      {boxData.text}
                    </div>
                  </div>
                </div>
              }
            />
          ))}
        </div>
      </div>
      <div className="xl:mx-32 mx-4 pb-12">
        <div className="xl:text-[34px] text-2xl font-futura-bold tracking-widest text-grey-1000 pb-6">
          Miben vagyunk mások?
        </div>
        <div className="xl:text-[30px] font-futura-medium text-lg leading-relaxed">
          Mesterséges intelligenciával ellátott programmal monitorozzuk a
          piacot, hogy mely platformokon, mikor és milyen árakon jelenjen meg a
          hirdetésed. Folyamatosan figyeljük a hirdetéseket, így mindig
          naprakész információval optimalizálunk.
        </div>
      </div>
    </div>
  );
};

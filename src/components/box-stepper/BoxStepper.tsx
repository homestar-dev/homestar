import React, { useState } from "react";
import { AboutUsBox } from "@/components";

export const BoxStepper: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(2);

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

  const slideLeft = () => {
    setCurrentIndex((currentIndex - 1 + boxData.length) % boxData.length);
  };

  const slideRight = () => {
    setCurrentIndex((currentIndex + 1) % boxData.length);
  };

  return (
    <div className="flex flex-wrap justify-center md:gap-x-14 select-none">
      <AboutUsBox
        title={boxData[(currentIndex + 2) % boxData.length].title}
        text={boxData[(currentIndex + 2) % boxData.length].text}
        onArrowClick={slideRight}
      />
      <AboutUsBox
        title={boxData[currentIndex].title}
        text={boxData[currentIndex].text}
      />
      <AboutUsBox
        title={boxData[(currentIndex + 3) % boxData.length].title}
        text={boxData[(currentIndex + 3) % boxData.length].text}
        onArrowClick={slideLeft}
      />
      <AboutUsBox
        title={boxData[(currentIndex + 1) % boxData.length].title}
        text={boxData[(currentIndex + 1) % boxData.length].text}
        onArrowClick={slideRight}
        isArrowHidden
      />
    </div>
  );
};

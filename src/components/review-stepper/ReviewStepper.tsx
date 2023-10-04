import React, { useEffect, useState } from "react";
import { Icon, IconEnum } from "../icons/Icon";

export const ReviewStepper: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isTimerActive, setIsTimerActive] = useState<boolean>(true);

  const handleNext = () => {
    setIsTimerActive(false);
    setActiveStep((prevStep) => (prevStep + 1) % reviews.length);
  };

  const handlePrevious = () => {
    setIsTimerActive(false);
    setActiveStep(
      (prevStep) => (prevStep - 1 + reviews.length) % reviews.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTimerActive) {
        return;
      }

      setActiveStep((prevStep) => (prevStep + 1) % reviews.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [isTimerActive]);

  const reviews = [
    {
      reviewBy: "Balogh Erika",
      text: "Fárasztó fel- és leutazgatás helyett egy teljes csapat intézi, amikkel korábban fél napokat töltöttem el, amíg vidékről Pestre értem. Nekem ez a legfontosabb.",
    },
    {
      reviewBy: "Szilágyi István",
      text: "Nem szerettem az állandó telefonálgatást, nem nekem való a vendégekkel történő ügyes-bajos intézkedés. Szerencsére a HomeStarral nem is kell.",
    },
    {
      reviewBy: "Horváth Tibor",
      text: "Még sosem dolgoztam olyan ingatlankezelővel, aki mesterséges intelligenciával dolgozik. Először furcsálltam, de abszolút bejött.",
    },
    {
      reviewBy: "Farkas Tünde",
      text: "Odafigyeltek rám, meghallgatták, mi fontos számomra. Egy olyan csomagot raktak össze, amivel én és a férjem is elégedett.",
    },
  ];

  return (
    <div className="relative bg-blue-900 h-[334px] sm:w-[581px] w-[324px] text-grey-100 flex items-center p-4 rounded-md select-none md:m-0 m-4">
      <div onClick={handlePrevious} className="cursor-pointer">
        <Icon icon={IconEnum.ArrowLeft} size={29} />
      </div>
      <div className="grid gap-8 text-left md:p-8 p-2">
        <div className="absolute top-10 left-10 justify-self-start">
          <Icon icon={IconEnum.DoubleQuotes} size={45}></Icon>
        </div>
        {reviews.map((review, index) => (
          <div
            key={index}
            className={`absolute sm:top-28 top-24 left-14 right-14 transition-opacity ${
              index === activeStep
                ? "opacity-100 duration-700 ease-in-out"
                : "opacity-0"
            }`}
          >
            <div className="font-futura-medium leading-relaxed md:text-[22px] text-[16px]">
              {review.text}
            </div>
            <div className="font-medium sm:pt-8 sm:text-xl text-base py-2">
              {review.reviewBy}
            </div>
          </div>
        ))}
      </div>
      <div onClick={handleNext} className="absolute right-5 cursor-pointer">
        <Icon icon={IconEnum.ArrowRight} size={29} />
      </div>
    </div>
  );
};

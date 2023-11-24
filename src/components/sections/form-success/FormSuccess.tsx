import React from "react";
import { Button, Icon, IconEnum } from "@/components";
import VideoBg from "../../../public/videos/hero.mp4";
import { useRouter } from "next/router";

export const FormSuccess: React.FC = () => {
  const router = useRouter();

  return (
    <div className="bg-blue-900 relative flex items-center justify-center sm:h-screen overflow-hidden  text-white">
      <div className="relative z-30 my-12 grid text-center font-futura-bold ">
        <div className="xl:text-[50px] xl:mt-2 xl:pt-0 font-bold text-4xl text-center mt-16 mb-8 tracking-widest xl:leading-relaxed">
          Köszönjük érdeklődését!
        </div>
        <div className="xl:text-4xl text-2xl leading-10">
          Üzenetét sikeresen fogadtuk, 24 órán belül visszajelzünk!
        </div>
        <div>
          <Button
            className="mt-12"
            variant="secondary"
            onClick={() => router.push("/")}
          >
            <div className="flex items-center gap-2">
              <Icon icon={IconEnum.ArrowLeft} />
              <div>Vissza a főoldalra</div>
            </div>
          </Button>
        </div>
      </div>
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className={`absolute z-10 w-full h-full object-cover opacity-60`}
      >
        <source src={VideoBg} type="video/mp4" />
      </video>
    </div>
  );
};

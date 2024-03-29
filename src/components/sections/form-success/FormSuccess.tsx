import React from "react";
import { Button, Icon, IconEnum } from "@/components";
import { useRouter } from "next/router";
import { logEvent } from "@/utils";
import HeroImage from "../../../public/heroImage.png";
import Image from "next/image";

export const FormSuccess: React.FC = () => {
  const router = useRouter();

  const onBack = (): void => {
    logEvent({
      action: "back-to-home",
      params: {
        click_event: "Navigate back home from contact or evaluation success",
      },
    });
    router.push("/");
  };

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
          <Button className="mt-12" variant="secondary" onClick={onBack}>
            <div className="flex items-center gap-2">
              <Icon icon={IconEnum.ArrowLeft} />
              <div>Vissza a főoldalra</div>
            </div>
          </Button>
        </div>
      </div>
      <Image
        src={HeroImage}
        alt="chain bridge"
        className={`absolute z-10 w-full h-full object-cover opacity-60`}
      />
    </div>
  );
};

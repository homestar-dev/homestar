import React from "react";
import { Icon, IconEnum } from "../../icons/Icon";
import { ScrollLink } from "@/components";
import { ScrollToId } from "@/constants/enums/scroll-to-ids";

export const EvalutaionFormSuccess: React.FC = () => {
  return (
    <div className="my-12 grid text-center  font-futura-bold ">
      <div className="xl:text-[50px] xl:mt-2 xl:pt-0 font-bold text-4xl text-center mt-16 mb-8 tracking-widest xl:leading-relaxed">
        Köszönjük érdeklődését!
      </div>
      <div className="text-white xl:text-4xl text-2xl leading-10">
        Üzenetét sikeresen fogadtuk, 24 órán belül visszajelzünk!
      </div>
      <div className="">
        <ScrollLink to={ScrollToId.About}>
          <Icon
            icon={IconEnum.ScrollDownIndicator}
            size={28}
            className="mt-32 animate-pulse"
          />
        </ScrollLink>
      </div>
    </div>
  );
};

import React from "react";
import Image from "next/image";
import LogoWhite from "@/public/svg/logoWhite.svg";
import { Button, QuestionContainer, ScrollLink } from "@/components";
import { ScrollToId } from "@/constants/enums/scroll-to-ids";
import { logEvent } from "@/utils";

interface FaQuProps {}

export const FaQu: React.FC<FaQuProps> = () => {
  return (
    <div className="bg-blue-900 py-12 flex justify-around gap-x-12 items-center md:px-48 px-4">
      <div className="xl:block hidden">
        <Image src={LogoWhite} alt="homestar" width={440} />
      </div>
      <div className="w-full grid grid-cols-1">
        <div className="text-white text-2xl font-semibold md:text-right text-center pb-6 font-futura-medium tracking-widest">
          Kérdésed merült fel? Segítünk!
        </div>
        <QuestionContainer
          question="Engedélyek beszerzése"
          answerPt1="Nehéz lehet eligazodni az engedélyeztetés bürokratikus útvesztőiben. Ehhez nyújt segítséget az alábbi kisokos, itt minden szükséges információt megtalálsz:"
          link="https://mtu.gov.hu/dokumentumok/kisokos_20220805_v1.pdf"
        />
        <QuestionContainer
          question="Rálátásom van a foglalásokra?"
          answerPt1="Igen, ügyfeleink hozzáférést kapnak az ingatlan profiljaihoz központi rendszereinken keresztül, hogy mindig tájékozódhassanak az aktuális történésekről."
        />
        <QuestionContainer
          question="Használhatom az ingatlant a szerződés alatt?"
          answerPt1="Természetesen igen, központi rendszerünkön keresztül ügyfeleink le tudják zárni a naptárat saját maguk részére, hogyha a szükség úgy kívánja, Ők is tudják az ingatlant használni."
        />
        <QuestionContainer
          question="Mi történik, ha a vendég kárt okoz?"
          answerPt1="Az együttműködés kezdetekor egy lakásátvételt végzünk, ezt képekkel és videókkal egészítjük ki, hogy dokumentálva legyen a lakás eredeti állapota; amennyiben károkozás történik jelezzük a platform ügyfélszolgálatának a kicsekkolást követően. Ezt követően a kiadó platformok megkezdik a kártérítési eljárást."
        />
        <QuestionContainer
          question="Kinek kell végeznie a karbantartást, javításokat?"
          answerPt1="Csapatunk elvégzi a javítási és karbantartási munkákat, hogy ügyfeleinknek ne kelljen emiatt értékes órákat utazásra és javításokra fordítani."
        />
        <div className="md:justify-self-end justify-self-center mt-4">
          <a href="mailto:info@home-star.hu">
            <Button
              onClick={() =>
                logEvent({
                  action: "ask-question-button",
                  params: { click_event: "Ask question by mail" },
                })
              }
            >
              Tedd fel kérdésed közvetlenül nekünk
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

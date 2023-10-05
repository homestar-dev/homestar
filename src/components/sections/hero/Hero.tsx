import React, { useState } from "react";
import {
  AdressAutocomplete,
  Button,
  EvalutationForm,
  Icon,
  IconEnum,
  ScrollLink,
} from "@/components";
import VideoBg from "../../../public/videos/hero.mp4";
import { ScrollToId } from "@/constants/enums/scroll-to-ids";
import { GooglePlacesResultType } from "@/utils";

interface HeroProps {}

export const Hero: React.FC<HeroProps> = () => {
  const defaultBackgorundOpacity = "opacity-80";
  const [showEvaluationPage, setShowEvaluationPage] = useState<boolean>(false);
  const [address, setAddress] = useState<string>("");
  const [location, setLocation] = useState<{
    lat: number;
    lng: number;
  } | null>(null);
  const [addressError, setAddressError] = useState<string | null>(null);
  const [backgorundOpacity, setBackgroundOpacity] = useState<string>(
    defaultBackgorundOpacity
  );

  const onAddressSelect = (place: any | GooglePlacesResultType): void => {
    if (!place.geometry) {
      return;
    }

    const latLng = {
      lat: place.geometry.location.lat(),
      lng: place.geometry.location.lng(),
    };

    setLocation(latLng);

    setAddress(place.formatted_address);
    if (address !== "") {
      setAddressError(null);
    }
  };

  const onEvaluationOpen = (): void => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    if (address === "") {
      setAddressError("Kérlek add meg az ingatlan elhelyezkedését");
      return;
    }
    setBackgroundOpacity("opacity-60");
    setAddressError(null);
    setShowEvaluationPage(true);
  };

  const obEvaluationClose = (): void => {
    setBackgroundOpacity(defaultBackgorundOpacity);
    setShowEvaluationPage(false);
  };

  return (
    <header className="bg-blue-900 relative flex items-center justify-center sm:h-screen overflow-hidden">
      <div className="relative z-30">
        {showEvaluationPage ? (
          <EvalutationForm
            address={address}
            location={location}
            closeForm={obEvaluationClose}
          />
        ) : (
          <div className="z-30 text-grey-100 flex flex-col items-center xl:gap-y-5 ">
            <div className="xl:text-[50px] xl:w-2/3 xl:mt-2 xl:pt-0 pt-12 text-4xl text-center mt-24 mb-4  font-futura-bold tracking-widest xl:leading-relaxed">
              Maximalizáld bevételeid: Ingatlankezelés új szintre emelve
            </div>
            <div className="xl:text-[26px] mt-8 text-2xl font-futura-bold  tracking-widest pb-4 text-center mx-2 md:w-3/4 leading-normal">
              Kérj személyre szabott bevételbecslést - Vagy keress minket a
              következő telefonszámon{" "}
              <a
                href="tel:+36202704086"
                className="xl:text-[26px] mt-8 text-lg font-futura-bold text-yellow-500 tracking-widest text-center cursor-pointer"
              >
                +36 20 2704086
              </a>
            </div>

            <div className="flex md:w-1/2 sm:mx-0 mx-12 md:flex-nowrap flex-wrap gap-4 justify-around items-center pb-8">
              <AdressAutocomplete
                onSelect={onAddressSelect}
                placeholder="Az ingatlan elhelyezkedése"
                errorMessage={addressError}
                value={address}
              />
              <Button onClick={onEvaluationOpen}>Belevágok!</Button>
            </div>
            <ScrollLink to={ScrollToId.About}>
              <Icon
                icon={IconEnum.ScrollDownIndicator}
                size={28}
                className="md:my-8 mb-12  animate-pulse"
              />
            </ScrollLink>
          </div>
        )}
      </div>
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className={`absolute z-10 w-full h-full object-cover ${backgorundOpacity}`}
      >
        <source src={VideoBg} type="video/mp4" />
      </video>
    </header>
  );
};

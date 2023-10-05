import { useState } from "react";
import Image from "next/image";
import BookingLogo from "@/public/svg/reviews/logos/booking.svg";
import AirbnbLogo from "@/public/svg/reviews/logos/aribnb.svg";
import HomeAwayLogo from "@/public/svg/reviews/logos/homeaway.svg";
import TripadvisorLogo from "@/public/svg/reviews/logos/tripadvisor.svg";
import VrboLogo from "@/public/svg/reviews/logos/vrbo.svg";
import Wimdu from "@/public/svg/reviews/logos/wimdu.svg";
import GoogleLogo from "@/public/svg/googleLogo.svg";

export const LogoCarousel: React.FC = () => {
  const logos = [
    { src: HomeAwayLogo, alt: "HomeAway" },
    { src: AirbnbLogo, alt: "airbnb" },
    { src: VrboLogo, alt: "vrbo" },
    { src: TripadvisorLogo, alt: "tripadvisor" },
    { src: GoogleLogo, alt: "google" },
    { src: BookingLogo, alt: "Booking" },
    { src: Wimdu, alt: "wimdu" },
  ];

  return (
    <>
      <div className="flex md:flex-row flex-wrap justify-around md:gap-x-12 gap-x-6 select-none gap-y-4 md:mb-0 mb-8">
        {logos.map((logo, index) => (
          <Image
            key={index}
            src={logo.src}
            alt={logo.alt}
            className="md:w-[175px] w-[120px]"
          />
        ))}
      </div>
    </>
  );
};

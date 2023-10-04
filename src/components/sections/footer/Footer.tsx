import Link from "next/link";
import React from "react";

interface FooterProps {}

export const Footer: React.FC<FooterProps> = () => {
  return (
    <div className="bg-blue-900  py-24 xl:px-48 px-4 font-futura-medium tracking-widest">
      <div className="flex border-t-2 border-t-white sm:flex-row flex-col gap-y-6 justify-between pt-6">
        <div className="flex flex-col text-white">
          <div className="font-semibold">HomeStar Properties Kft.</div>
          <div>1037 Budapest</div>
          <div> Toboz utca 11. 2.em/12</div>
          <a href="mailto:info@home-star.hu">
            <div>info@home-star.hu</div>
          </a>
          <a href="tel:+36202704086">
            <div>+36 20 27 04 086</div>
          </a>
        </div>
        <div className="flex flex-col gap-y-2">
          <div className="font-semibold text-white">Kövess bennünket</div>
          <a
            href="https://www.facebook.com/profile.php?id=100093078103869"
            className="text-yellow-500 font-semibold"
            target="_blanc"
          >
            Facebook
          </a>
        </div>
        <div className="flex flex-col gap-y-8">
          <div className="font-semibold text-white">
            © 2023 Minden jog fenntartva.
          </div>
          <Link
            href="/dataUsage.pdf"
            target="_blanc"
            className="text-yellow-500 font-semibold cursor-pointer px-1"
          >
            Adattájékoztató
          </Link>
        </div>
      </div>
    </div>
  );
};

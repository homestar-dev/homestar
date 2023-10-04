import { Button, ScrollLink, ServicesCard } from "@/components";
import { FC } from "react";
import Image from "next/image";
import Service1 from "@/public/svg/services/service1.svg";
import Service2 from "@/public/svg/services/service2.svg";
import Service3 from "@/public/svg/services/service3.svg";
import Service4 from "@/public/svg/services/service4.svg";
import { ScrollToId } from "@/constants/enums/scroll-to-ids";

export const Services: FC = () => {
  return (
    <div
      className="bg-blue-300 z-20  md:pt-0 md:pb-0 pt-4 px-4"
      id={ScrollToId.Services}
    >
      <div className="xl:mx-40 text-center md:py-12 md:pt-0 pt-12">
        <div className="md:text-[48px] text-2xl  max-w-[612px] leading-relaxed tracking-widest mx-auto  font-futura-bold font-bold text-grey-1000 pb-4 md:pt-12">
          Mutatjuk, hogyan működik!
        </div>
        <div className="md:text-[32px] md:leading-loose font-futura-medium text-lg  md:pb-3 pb-4">
          Budapesti ingatlanok rövidtávú kiadására specializálódtunk és mindent
          bevetünk: felkészítjük az ingatlanod, profi hirdetést készítünk, a
          legmodernebb eszközökkel monitorozzuk előbbieket, ráadásul intézzük a
          vendégfogadást is, így akár vidéki otthonodból is intézheted
          ingatlanod kiadását - pár kattintással.
        </div>
      </div>
      <div className="flex flex-col font-futura-medium">
        <div className="flex xl:flex-row flex-col justify-center items-center">
          <div className="relative">
            <Image src={Service1} alt="ingatlanüzemeltetés" />
            <div className="absolute sm:top-20 top-10 flex flex-col">
              <div className="sm:text-3xl text-2xl sm:pl-32 pl-20 sm:mb-10 mb-6">
                Szerződés
              </div>
              <div className="sm:text-xl text-sm sm:px-12 px-2">
                Alaposan átbeszéljük veled, mik a céljaid és mit érdemes tudni
                az ingatlanodról. Meghatározzuk, mit tudunk neked nyújtani és
                apróbetűs rész nélküli szerződést kötünk.
              </div>
            </div>
          </div>
          <div className="relative text-white">
            <Image src={Service2} alt="rövidtávú lakáskiadás" />
            <div className="absolute sm:top-20 top-10 flex flex-col">
              <div className="sm:text-3xl text-2xl sm:pl-32 pl-20 sm:mb-10 mb-6">
                Átvesszük az ingatlant
              </div>
              <div className="sm:text-xl text-sm sm:px-12 px-2">
                Miután megkaptuk a kulcsokat, professzionális csapatunkkal
                kitakarítjuk és felkészítjük a vendégek érkezésére az
                ingatlanod. Ezután jön az izgalmas rész! Készítünk egy látványos
                galériát a lakásról/házról, és átadjuk őket a hirdető csapatnak.
              </div>
            </div>
          </div>
        </div>
        <div className="flex xl:flex-row flex-col justify-center items-center xl:-mt-11 ">
          <div className="relative text-white">
            <Image src={Service3} alt="ingatlanmanagement" />
            <div className="absolute sm:top-20 top-10 flex flex-col">
              <div className="sm:text-3xl text-2xl sm:pl-32 pl-20 sm:mb-10 mb-6">
                Elkészítjük a hirdetéseket
              </div>
              <div className="sm:text-xl text-sm sm:px-12 px-2">
                Megalkotjuk az ingatlan profilját, kiválasztjuk a számodra
                legrelevánsabb platformokat és segítünk az árazásban. Szakértő
                csapatunk ezután feltölti a képeket és megírja a szövegeket -
                célközönségre és elhelyezésre szabva.
              </div>
            </div>
          </div>
          <div className="relative text-white">
            <Image src={Service4} alt="airbnb booking" />
            <div className="absolute sm:top-20 top-10 flex flex-col">
              <div className="sm:text-3xl text-2xl sm:pl-32 pl-20 sm:mb-10 mb-6">
                Maximalizáljuk a profitot
              </div>
              <div className="sm:text-xl text-sm sm:px-12 px-2">
                Odafigyelés, monitorozás, optimalizálás - ezzel a hármassal
                dolgozunk a profitmaximalizálásért. Ezenkívül mi intézzük a
                vendégekkel történő kommunikációt és az érkeztetést is. Segítünk
                a számlázásban, és az IFA adatokat is átadjuk.
              </div>
            </div>
          </div>
        </div>
        <div className="text-center md:py-12 py-8">
          <ScrollLink to={ScrollToId.Contact}>
            <Button className="!text-2xl !px-8 !py-3">Belevágok!</Button>
          </ScrollLink>
        </div>
      </div>
    </div>
  );
};

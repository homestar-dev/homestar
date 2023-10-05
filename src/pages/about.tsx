import {
  Button,
  EmployeeCard,
  FadeInOnScroll,
  Footer,
  NavLink,
  ScrollLink,
} from "@/components";
import Image from "next/image";
import team from "@/public/png/team.jpeg";
import Employee1 from "@/public/png/employees/employee1.jpeg";
import Employee2 from "@/public/png/employees/employee2.jpeg";
import Employee3 from "@/public/png/employees/employee3.jpeg";
import Employee4 from "@/public/png/employees/employee4.jpeg";
import LogoWhite from "@/public/png/logo_szurke-kek.png";
import CustomerSatisfaction from "@/public/svg/about/customerSatisfaction.svg";
import Support from "@/public/svg/about/support.svg";
import ManagedHomes from "@/public/svg/about/managedHomes.svg";
import { useRouter } from "next/router";
import { PageUrl } from "@/constants/enums/page-urls";
import { ScrollToId } from "@/constants/enums/scroll-to-ids";
import { useEffect, useState } from "react";

export default function About() {
  const router = useRouter();
  const { pathname } = router;

  const [isSection1Visible, setIsSection1Visible] = useState<boolean>(false);
  const [isSection2Visible, setIsSection2Visible] = useState<boolean>(false);
  const [isSection3Visible, setIsSection3Visible] = useState<boolean>(false);
  const [isSection4Visible, setIsSection4Visible] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setIsSection1Visible(true);
    }, 100);
    setTimeout(() => {
      setIsSection2Visible(true);
    }, 250);
    setTimeout(() => {
      setIsSection3Visible(true);
    }, 400);
    setTimeout(() => {
      setIsSection4Visible(true);
    }, 550);
  }, []);

  return (
    <>
      <div className="pt-16">
        <FadeInOnScroll
          threshold={0.1}
          children={
            <>
              <div className="bg-blue-900 py-12">
                <div className="flex flex-wrap justify-between max-w-[1350px] mx-auto items-center">
                  <div className="sm:text-start text-center">
                    <div className="text-blue-300 text-5xl font-futura-bold font-bold tracking-widest  leading-relaxed pb-2">
                      HomeStar
                    </div>
                    <div className="text-white text-4xl font-futura-bold font-bold tracking-widest">
                      Ingatlankezelés, mesterfokon.
                    </div>
                  </div>
                  <Image
                    src={LogoWhite}
                    alt="homestar ingatlan kezelés"
                    className="sm:block hidden"
                    priority={true}
                  />
                </div>
              </div>
              <div className="mt-12 bg-grey-100 max-w-[1350px] mx-auto">
                <div className="grid sm:justify-items-center sm:grid-cols-2">
                  <Image
                    priority={true}
                    src={team}
                    alt="homestar ingatlankezelés csapat"
                    className="w-full object-cover h-[92%] sm:block hidden"
                  />
                  <div className="flex flex-col gap-y-6 xl:text-[22px] font-futura-medium text-lg leading-normal px-6 mx-2">
                    <div className="msm:text-5xl text-4xl font-futura-medium">
                      Kik vagyunk mi?
                    </div>
                    <div
                      className={`transition-opacity duration-1000 ${
                        isSection1Visible ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      2007-ben indult a Valmoto Consulting - ezt követően a
                      világ egyik legnagyobb nemzetközi ingatlantanácsadó
                      vállalatának partnereként működtünk: nagy méretű, bevétel
                      termelő ingatlanok (irodaházak, bevásárlóközpontok, ipari
                      parkok, szállodák) értékesítésében, kivitelezésében
                      vettünk részt.
                    </div>
                    <div
                      className={`transition-opacity duration-1000 ${
                        isSection2Visible ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      Itt alapoztuk meg tudásunkat: cégünk ezután is a
                      befektetések területén maradt, de mára kizárólag budapesti
                      ingatlanokra koncentrálunk. Az ingatlanokat teljes körű
                      felújítást, kivitelezését követően eladásra kínáljuk
                      azoknak, akik befektetési lehetőségeket keresnek vagy új
                      otthonra vágynak.
                    </div>
                    <div
                      className={`transition-opacity duration-1000 ${
                        isSection3Visible ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      Az évek során fő irányvonalunk mellett számos
                      tevékenyéggel bővítettük a szolgáltatásaink listáját: így
                      alakult meg cégcsoportunk, melynek részeként jött létre a
                      Homestar Properties. Így már kiadással kapcsolatos rövid
                      és hosszú távú üzemeltetéssel, ingatlan közvetítéssel és
                      tanácsadással, vagy akár karbantartással is tudjuk
                      segíteni ügyfeleinket.
                    </div>
                    <div
                      className={`transition-opacity duration-1000 ${
                        isSection4Visible ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      Legnagyobb erősségünk az a{" "}
                      <strong className="font-futura-bold">
                        széleskörű tapasztalat, amelyet az elmúlt években
                        gyűjtöttünk. Ismerjük és értjük a piacot, emellett
                        felbecsülhetetlen értékű kapcsolatrendszert építettünk
                        ki. Azonban a legfontosabb: tudjuk, mire vágynak
                        ügyfeleink és hogy hogyan támogathatjuk őket céljaik
                        elérésben - tarts velünk!
                      </strong>
                    </div>
                    <div
                      className={`transition-opacity duration-1000 text-2xl font-signo ${
                        isSection4Visible ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      HomeStar Properties csapat
                    </div>
                  </div>
                  <Image
                    src={team}
                    alt="homestar ingatlankezelés csapat"
                    className="w-full object-cover h-[92%] sm:hidden block"
                  />
                </div>
              </div>
              <div className="container mx-auto flex flex-wrap gap-y-12 justify-evenly mb-16">
                <div className="flex flex-col gap-y-4 text-center">
                  <Image
                    src={CustomerSatisfaction}
                    alt="Ügyfélelégedettség"
                    width={183}
                  />
                  <div className="text-blue-900 text-4xl font-semibold">
                    99 %
                  </div>
                  <div className="text-blue-900 text-base font-semibold">
                    Ügyfélelégedettség
                  </div>
                </div>
                <div className="flex flex-col gap-y-4 text-center">
                  <Image src={Support} alt="appartement" width={146} />
                  <div className="text-blue-900 text-4xl font-semibold">
                    24/7
                  </div>
                  <div className="text-blue-900 text-base font-semibold">
                    Support
                  </div>
                </div>
                <div className="flex flex-col gap-y-4 text-center">
                  <Image src={ManagedHomes} alt="appartement" width={250} />
                  <div className="text-blue-900 text-4xl font-semibold">
                    40+
                  </div>
                  <div className="text-blue-900 text-base font-semibold">
                    Kezelt ingatlan
                  </div>
                </div>
              </div>

              <div className="font-futura-medium container mx-auto mt-24">
                <div className=" text-4xl  mt-8 mb-8 text-center">
                  Szakértő csapatunk
                </div>
                <div className="flex xl:gap-4 gap-32 sm:justify-evenly xl:flex-nowrap flex-wrap justify-center  items-center  mb-12">
                  <EmployeeCard
                    name="Sóvári Gergely"
                    position="Ügyvezető"
                    email="gergely.sovari@home-star.hu"
                    phoneNumbers={["+36 20 270 4086"]}
                    imageSrc={Employee1}
                    alt="Homestar ügyvezető"
                  />
                  <EmployeeCard
                    name="Katona Bence"
                    position="Lead Sales Representative"
                    imageSrc={Employee2}
                    alt="Homestar lead sales representative"
                  />
                  <EmployeeCard
                    name="Berényi Levente"
                    position="Product Owner"
                    imageSrc={Employee4}
                    alt="Homestar product owner"
                  />
                  <EmployeeCard
                    name="Windisch Kristóf"
                    position="Operations assistant"
                    imageSrc={Employee3}
                    alt="Homestar operations manager"
                  />
                </div>
              </div>
              <div className="mt-48 mb-24 flex flex-col items-center">
                <div className="text-center text-4xl">
                  Tedd fel kérdésed közvetlenül nekünk
                </div>
                <div className="text-xl text-center py-4  sm:w-1/3">
                  Maximalizáld ingatlanodból származó bevételt. Csatlakozz
                  hozzánk még ma és használd ki szolgáltatásunk előnyeit. Vedd
                  fel velünk a kapcsolatot és vágjunk bele még ma!
                </div>
                {pathname === PageUrl.About ? (
                  <NavLink to={`/#${ScrollToId.Contact}`}>
                    <div className="flex justify-center ">
                      <Button>Kapcsolat</Button>
                    </div>
                  </NavLink>
                ) : (
                  <ScrollLink to={ScrollToId.Contact}>
                    <div className="flex justify-center ">
                      <Button>Kapcsolat</Button>
                    </div>
                  </ScrollLink>
                )}
              </div>
            </>
          }
        />
      </div>
      <Footer />
    </>
  );
}

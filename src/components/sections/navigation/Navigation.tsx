import { FC, ReactNode, useEffect, useState } from "react";
import { Icon, IconEnum } from "../../icons/Icon";
import { PageUrl } from "@/constants/enums/page-urls";
import Image from "next/image";
import Logo from "@/public/svg/navigation/Logo.svg";
import { ScrollToId } from "@/constants/enums/scroll-to-ids";
import { useRouter } from "next/router";
import { ScrollLink, NavLink } from "@/components";
import useOutsideClickHandler from "@/utils/hooks/UseOutsideClickHandler";

interface INavigationProps {
  children: ReactNode;
}

export const Navigation: FC<INavigationProps> = ({ children }) => {
  const { visible, setVisible, ref } = useOutsideClickHandler(false);

  const router = useRouter();
  const { pathname } = router;

  return (
    <>
      <nav
        className="fixed top-0 z-50 left-0 right-0 bg-blue-900 font-white text-white"
        role="navigation"
      >
        <div className="flex sm:justify-around justify-between sm:mx-0 mx-2 items-center ">
          <div className="py-1">
            <NavLink to={PageUrl.Home}>
              <Image
                src={Logo}
                alt="homestar property management"
                height={60}
              />
            </NavLink>
          </div>
          <div className="sm:flex hidden md:gap-32 py-4">
            <div className="flex justify-around items-center md:gap-x-14 gap-x-4 md:text-xl text-base font-bold">
              <NavLink to={PageUrl.Home}>Kezdőoldal</NavLink>
              {pathname === PageUrl.About ? (
                <NavLink to={`/#${ScrollToId.Services}`} scroll={false}>
                  Szolgáltatásaink
                </NavLink>
              ) : (
                <ScrollLink to={ScrollToId.Services}>
                  Szolgáltatásaink
                </ScrollLink>
              )}
              <NavLink to={PageUrl.About}>Rólunk</NavLink>
            </div>
            <div className="flex justify-around gap-x-4 items-center pl-4">
              <a href="tel:+36202704086">
                <Icon
                  icon={IconEnum.Phone}
                  size={24}
                  className="cursor-pointer"
                />
              </a>
              <a href="mailto:info@home-star.hu">
                <Icon
                  icon={IconEnum.Email}
                  size={24}
                  className="cursor-pointer pt-1"
                />
              </a>
              {pathname === PageUrl.About ? (
                <NavLink to={`/#${ScrollToId.Contact}`} scroll={false}>
                  <Icon
                    icon={IconEnum.User}
                    size={32}
                    className="cursor-pointer"
                  />
                </NavLink>
              ) : (
                <ScrollLink to={ScrollToId.Contact}>
                  <Icon
                    icon={IconEnum.User}
                    size={32}
                    className="cursor-pointer"
                  />
                </ScrollLink>
              )}
            </div>
          </div>
          <div className="sm:hidden block" onClick={() => setVisible(!visible)}>
            <Icon icon={IconEnum.Menu} size={32} className="pt-2 mr-4" />
          </div>
        </div>
        <div
          ref={ref}
          className={`transition-opacity  ${
            visible ? "opacity-100 duration-300 ease-in-out" : "opacity-0"
          }  z-50 absolute flex items-center justify-center gap-4 left-0 right-0 text-right bg-blue-900 text-white font-futura-medium text-lg px-6 py-2`}
        >
          <div className="flex pt-1 gap-2">
            <NavLink to={PageUrl.Home}>Kezdőoldal</NavLink>
            {pathname === PageUrl.About ? (
              <NavLink to={`/#${ScrollToId.Services}`} scroll={false}>
                <div onClick={() => setVisible(false)}>Szolgáltatásaink</div>
              </NavLink>
            ) : (
              <ScrollLink to={ScrollToId.Services}>
                <div onClick={() => setVisible(false)}>Szolgáltatásaink</div>
              </ScrollLink>
            )}

            <div onClick={() => setVisible(false)}>
              <NavLink to={PageUrl.About}>Rólunk</NavLink>
            </div>
          </div>

          <div className="flex justify-end items-center gap-1 py-2">
            <a href="tel:+36202704086">
              <Icon
                icon={IconEnum.Phone}
                size={20}
                className="cursor-pointer"
              />
            </a>
            <a href="mailto:info@home-star.hu">
              <Icon
                icon={IconEnum.Email}
                size={20}
                className="cursor-pointer pt-1"
              />
            </a>
            {pathname === PageUrl.About ? (
              <NavLink
                to={`/#${ScrollToId.Contact}`}
                scroll={false}
                onClick={() => setVisible(false)}
              >
                <Icon
                  icon={IconEnum.User}
                  size={28}
                  className="cursor-pointer"
                />
              </NavLink>
            ) : (
              <ScrollLink to={ScrollToId.Contact}>
                <div onClick={() => setVisible(false)}>
                  <Icon
                    icon={IconEnum.User}
                    size={28}
                    className="cursor-pointer"
                  />
                </div>
              </ScrollLink>
            )}
          </div>
        </div>
      </nav>

      <>{children}</>
    </>
  );
};

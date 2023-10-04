import { ClnUtil } from "@/utils";
import Link from "next/link";
import { FC, PropsWithChildren } from "react";

interface NavLinkProps extends PropsWithChildren {
  to: string;
  className?: string;
  onClick?: () => void;
  scroll?: boolean;
}

export const NavLink: FC<NavLinkProps> = ({
  to,
  children,
  className,
  onClick,
  scroll,
}) => {
  return (
    <Link
      href={to}
      onClick={onClick}
      className={ClnUtil.format("cursor-pointer", className)}
      scroll={scroll}
    >
      {children}
    </Link>
  );
};

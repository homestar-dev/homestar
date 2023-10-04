import { ClnUtil } from "@/utils";
import { FC, PropsWithChildren } from "react";
import { Link } from "react-scroll";

interface ScrollLinkProps extends PropsWithChildren {
  to: string;
  className?: string;
}

export const ScrollLink: FC<ScrollLinkProps> = ({
  to,
  children,
  className,
}) => {
  const pageOffsetToFitContent = -63;
  return (
    <Link
      to={to}
      offset={pageOffsetToFitContent}
      smooth
      className={ClnUtil.format("cursor-pointer", className)}
    >
      {children}
    </Link>
  );
};

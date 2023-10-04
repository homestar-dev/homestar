import React, { FC } from "react";
import { Logo } from "./icons/Logo";
import { Phone } from "./icons/Phone";
import { Time } from "./icons/Time";
import { User } from "./icons/User";
import { Help } from "./icons/Help";
import { Listen } from "./icons/Listen";
import { ArrowLeft } from "./icons/ArrowLeft";
import { ArrowRight } from "./icons/ArrowRight";
import { DoubleQuotes } from "./icons/DoubleQuotes";
import { Plus } from "./icons/Plus";
import { Minus } from "./icons/Minus";
import { YellowArrowRight } from "./icons/YellowArrowRight";
import { ScrollDownIndicator } from "./icons/ScrollDownIndicator";
import { DotFilled } from "./icons/DotFilled";
import { DotOutlined } from "./icons/DotOutlined";
import { Email } from "./icons/Email";
import { Menu } from "./icons/Menu";
import { Checkmark } from "./icons/Checkmark";
import { Upload } from "./icons/Upload";
import { Close } from "./icons/Close";

export enum IconEnum {
  Phone,
  Logo,
  User,
  Time,
  Help,
  Listen,
  ArrowLeft,
  ArrowRight,
  DoubleQuotes,
  Plus,
  Minus,
  YellowArrowRight,
  ScrollDownIndicator,
  DotOutlined,
  DotFilled,
  Email,
  Menu,
  Checkmark,
  Upload,
  Close,
}

export interface IconProps {
  icon: IconEnum;
  size?: number;
  className?: string;
}

export const Icon: FC<IconProps> = ({ size, icon, className }) => {
  const defaultIconSize: number = 14;

  function IconHandler(): JSX.Element | null {
    switch (icon) {
      case IconEnum.Logo:
        return <Logo size={size ? size : defaultIconSize} />;
      case IconEnum.Phone:
        return <Phone size={size ? size : defaultIconSize} />;
      case IconEnum.User:
        return <User size={size ? size : defaultIconSize} />;
      case IconEnum.Time:
        return <Time size={size ? size : defaultIconSize} />;
      case IconEnum.Help:
        return <Help size={size ? size : defaultIconSize} />;
      case IconEnum.Listen:
        return <Listen size={size ? size : defaultIconSize} />;
      case IconEnum.ArrowLeft:
        return <ArrowLeft size={size ? size : defaultIconSize} />;
      case IconEnum.ArrowRight:
        return <ArrowRight size={size ? size : defaultIconSize} />;
      case IconEnum.DoubleQuotes:
        return <DoubleQuotes size={size ? size : defaultIconSize} />;
      case IconEnum.Plus:
        return <Plus size={size ? size : defaultIconSize} />;
      case IconEnum.Minus:
        return <Minus size={size ? size : defaultIconSize} />;
      case IconEnum.YellowArrowRight:
        return <YellowArrowRight size={size ? size : defaultIconSize} />;
      case IconEnum.ScrollDownIndicator:
        return <ScrollDownIndicator size={size ? size : defaultIconSize} />;
      case IconEnum.DotFilled:
        return <DotFilled size={size ? size : defaultIconSize} />;
      case IconEnum.DotOutlined:
        return <DotOutlined size={size ? size : defaultIconSize} />;
      case IconEnum.Email:
        return <Email size={size ? size : defaultIconSize} />;
      case IconEnum.Menu:
        return <Menu size={size ? size : defaultIconSize} />;
      case IconEnum.Checkmark:
        return <Checkmark size={size ? size : defaultIconSize} />;
      case IconEnum.Upload:
        return <Upload size={size ? size : defaultIconSize} />;
      case IconEnum.Close:
        return <Close size={size ? size : defaultIconSize} />;
      default:
        return null;
    }
  }

  return (
    <div className={`flex justify-center items-center ${className}`}>
      <IconHandler />
    </div>
  );
};

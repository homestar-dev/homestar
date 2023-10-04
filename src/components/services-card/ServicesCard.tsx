import { FC } from "react";

interface ServicesCardProps {
  title: string;
  text: string;
  align: "left" | "right";
}

export const ServicesCard: FC<ServicesCardProps> = ({ title, text, align }) => {
  return (
    <div
      className={`bg-white rounded-lg px-6 max-w-md mx-4 ${align === "left" && "text-left"} ${
        align === "right" && "text-right"
      }`}
    >
      <div className="font-medium text-3xl pt-16 pb-10">{title}</div>
      <div className="text-xl leading-relaxed pb-4">{text}</div>
    </div>
  );
};

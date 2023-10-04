import { FC, useState } from "react";
import { Icon, IconEnum } from "@/components";

interface QuestionContainerProps {
  question: string;
  answerPt1: string;
  answerPt2?: string;
  link?: string;
}

export const QuestionContainer: FC<QuestionContainerProps> = ({
  question,
  answerPt1,
  answerPt2,
  link,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="text-white border-2 border-white rounded-lg px-4 mb-4 font-futura-medium">
      <div className="w-full flex justify-between items-center grow">
        <div className="py-2 md:text-[20px] font-bold text[lg]">{question}</div>
        <div className="cursor-pointer" role="button" onClick={handleIsOpen}>
          <>
            {isOpen ? (
              <Icon icon={IconEnum.Minus} size={18} />
            ) : (
              <Icon icon={IconEnum.Plus} size={18} />
            )}
          </>
        </div>
      </div>
      <div
        className={`overflow-hidden transition-all duration-500 ${
          isOpen ? "max-h-screen " : "max-h-0"
        }`}
      >
        <div className="text-lg">
          <div>
            {answerPt1}
            <a
              href={link}
              target="_blanc"
              className="cursor-pointer px-1 text-yellow-500"
            >
              {link}
            </a>
          </div>
          <p className="pt-4 ">{answerPt2}</p>
        </div>
      </div>
    </div>
  );
};

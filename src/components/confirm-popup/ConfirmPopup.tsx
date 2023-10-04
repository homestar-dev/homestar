import { Button } from "@/components";
import Link from "next/link";

interface IConfirmPopupProps {
  onConfirm: () => void;
  isOpen: boolean;
}
export const ConfirmPopup: React.FC<IConfirmPopupProps> = ({
  onConfirm,
  isOpen,
}) => {
  return (
    <div
      className={`absolute z-50 bottom-0 right-0 flex flex-row items-center gap-4 px-4 p-2 bg-white rounded-sm text-grey-1000 font-futura-medium transition-opacity ${
        isOpen ? "opacity-100 duration-1500 ease-in-out" : "hidden"
      }`}
    >
      <div className="text-base">
        Az
        <Link
          href="/dataUsage.pdf"
          target="_blanc"
          className="text-yellow-500 cursor-pointer px-1"
        >
          adattájékoztatót
        </Link>
        elolvastam és elfogadom
      </div>
      <Button
        onClick={onConfirm}
        variant="secondary"
        className="!text-black !font-futura-medium !text-sm px-3 py-0"
      >
        Megerősítem
      </Button>
    </div>
  );
};

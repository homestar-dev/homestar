import { useEffect, useState } from "react";
import { ConfirmPopup } from "../confirm-popup/ConfirmPopup";

interface ConfirmDataUsageProps {
  children: React.ReactNode;
}

export const ConfirmDataUsage: React.FC<ConfirmDataUsageProps> = ({
  children,
}) => {
  const [openConfirmPopup, setOpenconfirmPopup] = useState<boolean>(false);

  const handleConfirmDataUsage = () => {
    localStorage.setItem("isDataUsageConfirmed", String(true));

    setOpenconfirmPopup(false);
  };

  useEffect(() => {
    const isDataUsageConfirmed = localStorage.getItem("isDataUsageConfirmed");

    if (isDataUsageConfirmed === "true") {
      setOpenconfirmPopup(false);
      return;
    }

    setOpenconfirmPopup(true);
  }, [openConfirmPopup]);

  return (
    <div>
      <div
        className={`${
          openConfirmPopup
            ? "opacity-80 h-screen overflow-hidden pointer-events-none"
            : "opacity-100"
        }  `}
      >
        {children}
      </div>
      <ConfirmPopup
        isOpen={openConfirmPopup}
        onConfirm={handleConfirmDataUsage}
      />
    </div>
  );
};

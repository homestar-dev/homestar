import { useEffect, useState } from "react";
import { Icon, IconEnum } from "..";

interface IToastMessageProps {
  message: string | null;
  duration?: number;
  onClose?: () => void;
}
export const ToastMessage: React.FC<IToastMessageProps> = ({
  message,
  duration = 7000,
  onClose,
}) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (message) {
      setShow(true);
    }

    const timer = setTimeout(() => {
      setShow(false);
    }, duration);

    return () => {
      clearTimeout(timer);
    };
  }, [duration, onClose, message]);

  const handleClose = () => {
    setShow(false);
    if (onClose) onClose();
  };

  return (
    <div
      className={`mt-8 w-full bg-yellow-500 text-black font-bold flex justify-between p-4 rounded-md transition-opacity  ${
        show ? "opacity-100 duration-1000 ease-in-out" : "opacity-0"
      }`}
    >
      <div>{message}</div>
      <div onClick={handleClose} className="cursor-pointer">
        <Icon icon={IconEnum.Close} size={24} />
      </div>
    </div>
  );
};

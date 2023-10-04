import React, { FC } from "react";
import { Icon, IconEnum } from "@/components";

interface TextInputProps {
  placeholder?: string;
  label?: string;
  errorMessage?: string;
  helpIcon?: boolean;
  value?: string;
  type?: string;
  id?: string;
  name?: string;
  onChange?: (e: any) => void;
}

export const TextInput: FC<TextInputProps> = ({
  placeholder,
  label,
  errorMessage,
  helpIcon,
  value,
  type,
  id,
  name,
  onChange,
}) => {
  return (
    <div className="flex flex-col w-full text-black outline-none font-futura-medium tracking-widest">
      <label
        aria-label="label"
        htmlFor={id}
        className="text-white  sm:text-xl text-lg"
      >
        {label}
      </label>
      <div className="flex justify-between border border-white sm:py-3 py-2 px-4 rounded-sm">
        <input
          aria-label="input"
          placeholder={placeholder}
          className="grow bg-transparent text-white outline-none tracking-widest"
          value={value}
          type={type}
          id={id}
          name={name}
          onChange={onChange}
        />
        {helpIcon && <Icon icon={IconEnum.Help} />}
      </div>

      {errorMessage && (
        <div aria-label="error" className="text-yellow-500 text-lg">
          {errorMessage}
        </div>
      )}
    </div>
  );
};

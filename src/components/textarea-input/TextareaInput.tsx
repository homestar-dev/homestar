/* eslint-disable react/display-name */
import React, { TextareaHTMLAttributes } from "react";
import { forwardRef } from "react";

interface TextAreaInputProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  placeholder?: string;
  label?: string;
  value?: string;
  id?: string;
  name?: string;
  errorMessage?: string;
}

export const TextAreaInput = forwardRef<
  HTMLTextAreaElement,
  TextAreaInputProps
>(({ placeholder, label, value, id, name, errorMessage, ...props }, ref) => {
  return (
    <div>
      <label
        aria-label="label"
        htmlFor={id}
        className="text-white text-xl font-futura-medium"
      >
        {label}
      </label>
      <textarea
        className="text-label text-white p-4 rounded-sm border border-white w-full outline-none bg-transparent"
        placeholder={placeholder}
        rows={2}
        cols={5}
        ref={ref}
        {...props}
        value={value}
        id={id}
        name={name}
      />
      {errorMessage && (
        <div aria-label="error" className="text-yellow-500 text-lg">
          {errorMessage}
        </div>
      )}
    </div>
  );
});

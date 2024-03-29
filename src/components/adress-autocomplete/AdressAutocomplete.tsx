import React, { FC } from "react";
import { Icon, IconEnum } from "@/components";
import PlacesAutocomplete from "react-google-autocomplete";
import { GooglePlacesResultType } from "@/utils";
interface AdressAutocompleteProps {
  placeholder?: string;
  label?: string;
  errorMessage?: string | null;
  helpIcon?: boolean;
  id?: string;
  value: string;
  onChange?: (e: any) => void;
  onBlur?: () => void;
  onSelect: (place: unknown | GooglePlacesResultType) => void; // Update the type of onSelect prop
}

export const AdressAutocomplete: FC<AdressAutocompleteProps> = ({
  placeholder,
  label,
  errorMessage,
  helpIcon,
  id,
  onChange,
  onBlur,
  onSelect,
  value,
}) => {
  const apiKey = process.env.NEXT_PUBLIC_PLACES_API_KEY;

  return (
    <div className="relative flex grow flex-col w-full text-black outline-none">
      <label
        aria-label="label"
        htmlFor={id}
        className="text-white pb-1 font-futura-medium text-xl"
      >
        {label}
      </label>
      <div className="flex grow justify-between bg-white py-3 px-4 rounded-sm">
        <PlacesAutocomplete
          apiKey={apiKey}
          onChange={onChange}
          onBlur={onBlur}
          onPlaceSelected={onSelect}
          options={{
            types: ["address"],
            componentRestrictions: { country: "hu" },
          }}
          className="grow bg-transparent outline-none"
          placeholder={placeholder}
          value={value}
        />
        {helpIcon && <Icon icon={IconEnum.Help} />}
      </div>
      {errorMessage && (
        <div
          aria-label="error"
          className="sm:absolute top-20 text-yellow-500 text-lg"
        >
          {errorMessage}
        </div>
      )}
    </div>
  );
};

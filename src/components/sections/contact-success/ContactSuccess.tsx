import React from "react";

export const ContactSuccess: React.FC = () => {
  return (
    <div className="my-12 grid">
      <div className="justify-self-center flex-wrap flex justify-center gap-x-2 text-center font-futura-medium tracking-widest font-semibold">
        <div className="text-white text-3xl leading-10">
          Köszönjük érdeklődését! Üzenetét sikeresen fogadtuk,
        </div>
        <div className="text-yellow-500 text-3xl leading-10">
          24 órán belül visszajelzünk!
        </div>
      </div>
    </div>
  );
};

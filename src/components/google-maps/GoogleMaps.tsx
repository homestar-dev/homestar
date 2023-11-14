import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "500px",
};

interface IGoogleMaps {
  location: { lat: number; lng: number } | null;
  address: string | null;
}

const GoogleMaps: React.FC<IGoogleMaps> = ({ location, address }) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_PLACES_API_KEY || "",
  });
  const centerOnBudapest = {
    lat: 47.497913,
    lng: 19.040236,
  };

  return (
    <div>
      <div className="mb-2 text-lg font-semibold">{address}</div>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={location || centerOnBudapest}
          zoom={17}
        >
          {location && <Marker position={location} />}
        </GoogleMap>
      ) : (
        <></>
      )}
    </div>
  );
};

export default React.memo(GoogleMaps);

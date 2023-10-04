import React from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "500px",
};

interface IGoogleMaps {
  location: { lat: number; lng: number } | null;
  address: string;
}

const GoogleMaps: React.FC<IGoogleMaps> = ({ location, address }) => {
  const [map, setMap] = React.useState(null);

  const centerOnBudapest = {
    lat: 47.497913,
    lng: 19.040236,
  };

  const onLoad = React.useCallback(function callback(map: any) {
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map: any) {
    setMap(null);
  }, []);

  return (
    <div>
      <div className="mb-2 text-lg font-semibold">{address}</div>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={location || centerOnBudapest}
        zoom={18}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        {location && <Marker position={location} />}
      </GoogleMap>
    </div>
  );
};

export default React.memo(GoogleMaps);

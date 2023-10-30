import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: "100%",
  height: "500px",
};

interface IGoogleMaps {
  location: { lat: number; lng: number } | null;
  address: string;
}

const GoogleMaps: React.FC<IGoogleMaps> = ({ location, address }) => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyBPgR5UfMvZOKRCpS6US6Hu0ZwCaAqHnx0"
  })
  const centerOnBudapest = {
    lat: 47.497913,
    lng: 19.040236,
  };

  const [map, setMap] = React.useState(null)





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
  ) : <></>}
    </div>
  );
};

export default React.memo(GoogleMaps);

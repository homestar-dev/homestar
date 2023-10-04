export type GooglePlacesResultType = {
  formatted_address: string;
  geometry: {
    location: {
      lat: () => void;
      lng: () => void;
    };
  };
  place_id: string;
};

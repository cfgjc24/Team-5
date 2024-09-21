import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { useState, useEffect } from "react";
import { getMarkers } from "../../config/config.tsx";

// Load API key from environment variable
const mapKey = import.meta.env.VITE_MAP_API_KEY;

const mapContainerStyle = {
  width: "600px",
  height: "400px",
};

const center = {
  lat: 40.719074,
  lng: -74.050552,
};

const locations = [
  { lat: 40.719074, lng: -74.050552 },
  { lat: 38.9, lng: -77.04 },
];

export default function Map() {
  const [markerList, setMarkerList] = useState([{}]);

  useEffect(() => {
    getMarkers().then((value: any[]) => {
      // console.log(value) ;
      setMarkerList(value);
    });
  }, []);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: mapKey,
  });

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading...</div>;

  return (
    <GoogleMap mapContainerStyle={mapContainerStyle} zoom={10} center={center}>
      <Marker position={center} />
      {markerList.map((marker) =>
        !("active" in marker) ? (
          <></>
        ) : (
          // <Marker key="a" position={marker} />
          <Marker
            key="a"
            position={{
              lat: marker.coordinates.latitude,
              lng: marker.coordinates.longitude,
            }}
          />
        )
      )}
    </GoogleMap>
  );
}

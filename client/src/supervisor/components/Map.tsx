import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { useState, useEffect } from "react";

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
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: mapKey,
  });

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading...</div>;

  return (
    <GoogleMap mapContainerStyle={mapContainerStyle} zoom={10} center={center}>
      <Marker position={center} />
      {locations.map((marker, index) => (
        <Marker key={index} position={marker} />
      ))}
    </GoogleMap>
  );
}

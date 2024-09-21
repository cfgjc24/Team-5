import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { useState, useEffect } from "react";
import { getMarkers } from "../../config/config.tsx";
import {Slider, SliderValue} from "@nextui-org/slider"

const mapKey = import.meta.env.VITE_MAP_API_KEY;

const mapContainerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: 40.719074,
  lng: -74.050552,
};

export default function Map() {
  const [selectedTime,setSelectedTime] = useState(720) ;
  const [selectedHour,setSelectedHour] = useState(12) ;
  const [selectedMin,setSelectedMin] = useState("00") ;
  const updateSlider = (value: SliderValue) => {
    setSelectedTime(Number(value))
    setSelectedHour(Math.floor(Number(value)%720) <= 120 ? 12 : Math.floor((Number(value)%720)/60))
    setSelectedMin(Number(value)%60 < 10 ? "0"+Number(value)%60 : ""+Number(value)%60)
  }
  const [markerList, setMarkerList] = useState([{}]);
  const [selectedMarker, setSelectedMarker] = useState<any | null>(null);

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
    <>
      <Slider onChange = {updateSlider} value = {selectedTime} maxValue = {1439}>
      </Slider>
      <h3 className="text-center bg-zinc-800">{selectedTime / 60 < 12 ? <>{selectedHour}:{selectedMin} AM</> : <>{selectedHour}:{selectedMin} PM</>}</h3>

      <GoogleMap mapContainerStyle={mapContainerStyle} zoom={10} center={center}>
        <Marker key="a" position={center} />
        {markerList.map((marker) =>
          (!("active" in marker) || (Boolean(marker.active) == false)) ? (
            <></>
          ) : (
            // <Marker key="a" position={marker} />

            <Marker
              key={marker.name}
              position={{
                lat: marker.coordinates.latitude,
                lng: marker.coordinates.longitude,
              }}
              onClick={() => setSelectedMarker(marker)}
            />
          )
        )}
        {selectedMarker && (
          <InfoWindow
            position={{
              lat: selectedMarker.coordinates.latitude,
              lng: selectedMarker.coordinates.longitude,
            }}
            onCloseClick={() => setSelectedMarker(null)} // Close info window
          >
            <div>
              <p>
                <strong>Name:</strong> {selectedMarker.name}
              </p>
              <p>
                <strong>Client:</strong> {selectedMarker.clientName}
              </p>
              <p>
                <strong>Time:</strong>
                {new Date(
                  selectedMarker.time.seconds * 1000
                ).toLocaleTimeString()}
              </p>
              <p>
                <strong>Location:</strong> {selectedMarker.coordinates.latitude},
                {selectedMarker.coordinates.longitude}
              </p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </>
  );



  
}

// import GoogleMap from "google-map-react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

export default function Map() {
  const key = "AIzaSyAUOeSfu385y_gDnH5F2o96OMmh7goaj2I";
  return (
    <LoadScript googleMapsApiKey={key}>
      <GoogleMap
        mapContainerStyle={{ width: "100%", height: "100%" }}
        center={{ lat: 37.502029716744964, lng: 127.01319349646504 }}
        zoom={16}
      />
    </LoadScript>
  );
}

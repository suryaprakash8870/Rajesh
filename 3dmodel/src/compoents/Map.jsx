import React from "react";
import L from "leaflet";
import { MapContainer, TileLayer, Marker, ZoomControl } from "react-leaflet";
import "leaflet/dist/leaflet.css";
const arrowIcon = new L.Icon({
  iconUrl:
    "https://cdn4.iconfinder.com/data/icons/iphone-calculator-shopping-report/256/up.png",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

const Map = () => {
  const position = [51.505, -0.09];

  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{
        width: "100%",
        height: "300px",
        borderRadius: "30px",
        border: "none",
        outline: "none",
      }}
      zoomControl={false}
      attributionControl={false}
      tabIndex={0}
    >
      <TileLayer url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png" />
      <Marker position={position} icon={arrowIcon} />
    </MapContainer>
  );
};

export default Map;

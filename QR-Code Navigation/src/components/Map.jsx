// src/components/Map.js
import React, { useState, useEffect } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  DirectionsRenderer,
} from "@react-google-maps/api";
import { QrScanner } from "@yudiel/react-qr-scanner";

const Map = ({ apiKey }) => {
  const [userLocation, setUserLocation] = useState(null);
  const [scanResult, setScanResult] = useState(null);
  const [directions, setDirections] = useState(null);

  const defaultCenter = {
    lat: 11.0168,
    lng: 76.9558,
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }, []);

  useEffect(() => {
    if (userLocation && scanResult) {
      const calculateDirections = () => {
        const directionsService = new window.google.maps.DirectionsService();

        const origin = new window.google.maps.LatLng({
          lat: parseFloat(userLocation.lat),
          lng: parseFloat(userLocation.lng),
        });

        const destination = new window.google.maps.LatLng({
          lat: parseFloat(scanResult[0]),
          lng: parseFloat(scanResult[1]),
        });

        directionsService.route(
          {
            origin: origin,
            destination: destination,
            travelMode: window.google.maps.TravelMode.DRIVING,
          },
          (result, status) => {
            if (status === window.google.maps.DirectionsStatus.OK) {
              setDirections(result);
            } else {
              console.error(`Error fetching directions: ${status}`);
            }
          }
        );
      };

      if (window.google && window.google.maps) {
        calculateDirections();
      } else {
        const script = document.createElement("script");
        script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
        script.async = true;
        script.defer = true;
        script.onload = calculateDirections;

        document.head.appendChild(script);
      }
    }
  }, [userLocation, apiKey, scanResult]);

  return (
    <LoadScript googleMapsApiKey={apiKey}>
      {scanResult ? (
        <>
          <h1>Navigate to {scanResult[2]}</h1>
          <MemoizedGoogleMap
            mapContainerStyle={{ height: "80vh", width: "100%" }}
            zoom={15}
            center={userLocation || defaultCenter}
          >
            {userLocation && (
              <Marker position={userLocation} label="You are here" />
            )}
            {scanResult && (
              <Marker
                position={{
                  lat: parseFloat(scanResult[0]),
                  lng: parseFloat(scanResult[1]),
                }}
                label="Destination"
              />
            )}

            {directions && (
              <DirectionsRenderer
                directions={directions}
                options={{ suppressMarkers: true }}
              />
            )}
          </MemoizedGoogleMap>
        </>
      ) : (
        <div style={{ width: "100%" }}>
          <h1 style={{ textAlign: "center" }}>Scan the QR code to locate</h1>
          <QrScanner
            onDecode={(result) => {
              setScanResult(result.split(","));
            }}
            onError={(error) => console.log(error?.message)}
          />
        </div>
      )}
    </LoadScript>
  );
};
// Memoize the GoogleMap component to prevent unnecessary re-renders
const MemoizedGoogleMap = React.memo(GoogleMap);
export default Map;

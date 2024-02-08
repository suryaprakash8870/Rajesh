import React from "react";
import Map from "./components/Map";
import "./App.css";
const App = () => {
  const apiKey = "AIzaSyBerwruBlt0BHEkBDd532LhJ86xKKmSc70";

  return (
    <div>
      <Map apiKey={apiKey} />
    </div>
  );
};

export default App;

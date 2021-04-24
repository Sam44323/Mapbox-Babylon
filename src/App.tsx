import React, { useState } from "react";
import ReactMapGl from "react-map-gl";
import "./App.css";

const App: React.FC = () => {
  const [viewport, setViewPort] = useState({
    latitude: 45.4211,
    longitude: -75.6903,
    zoom: 10,
    width: "100%",
    height: "100%",
  });
  return (
    <div className="mapbox_container">
      <ReactMapGl
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      >
        markers here
      </ReactMapGl>
    </div>
  );
};

export default App;

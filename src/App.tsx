import React, { useState } from "react";
import ReactMapGl, { Marker } from "react-map-gl";
import { Mapbox } from "./intefaces/mapbox-interface";
import "./App.css";

const App: React.FC = () => {
  const [viewport, setViewPort] = useState<Mapbox>({
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
        mapStyle="mapbox://styles/sudosdm/cknvrogsv1vt217jgicvef63y"
        onViewportChange={(viewport: Mapbox) => setViewPort(viewport)}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      ></ReactMapGl>
    </div>
  );
};

export default App;

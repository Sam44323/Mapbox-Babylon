import React, { useState } from "react";
import ReactMapGl, { Marker } from "react-map-gl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapPin } from "@fortawesome/free-solid-svg-icons";
import { Mapbox } from "../intefaces/mapbox-interface";

import styles from "./MapDisplay.module.css";

const App: React.FC = () => {
  const [viewport, setViewPort] = useState<Mapbox>({
    latitude: 45.4211,
    longitude: -75.6903,
    zoom: 10,
    width: "100%",
    height: "100%",
  });
  return (
    <div className={styles.mapbox_container}>
      <ReactMapGl
        {...viewport}
        mapStyle="mapbox://styles/sudosdm/cknvrogsv1vt217jgicvef63y"
        onViewportChange={(viewport: Mapbox) => setViewPort(viewport)}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      >
        <Marker latitude={45.4211} longitude={-75.6903}>
          <FontAwesomeIcon icon={faMapPin} size="3x" color="white" />
        </Marker>
      </ReactMapGl>
    </div>
  );
};

export default App;

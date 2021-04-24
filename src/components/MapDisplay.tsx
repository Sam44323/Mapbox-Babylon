import React, { useEffect, useState } from "react";
import ReactMapGl, { Marker } from "react-map-gl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapPin } from "@fortawesome/free-solid-svg-icons";
import { Mapbox, MapDisplayInterface } from "../intefaces/interface";

import styles from "./MapDisplay.module.css";

const App: React.FC<MapDisplayInterface> = (props) => {
  const [viewport, setViewPort] = useState<Mapbox>({
    latitude: 0,
    longitude: 0,
    zoom: 10,
    width: "100%",
    height: "100%",
  });

  useEffect(() => {
    setViewPort((prevState) => {
      return {
        ...prevState,
        latitude: props.lat,
        longitude: props.long,
      };
    });
  }, [props]);

  return (
    <div className={styles.mapbox_container}>
      <ReactMapGl
        {...viewport}
        mapStyle="mapbox://styles/sudosdm/cknvrogsv1vt217jgicvef63y"
        onViewportChange={(viewport: Mapbox) => setViewPort(viewport)}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      >
        <Marker latitude={props.lat} longitude={props.long}>
          <FontAwesomeIcon icon={faMapPin} size="3x" color="white" />
        </Marker>
      </ReactMapGl>
    </div>
  );
};

export default App;

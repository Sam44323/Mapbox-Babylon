import React, { useEffect, useState } from "react";
import ReactMapGl, { Marker } from "react-map-gl";
// import html2canvas from "html2canvas";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapPin } from "@fortawesome/free-solid-svg-icons";
import {
  Mapbox,
  MapDisplayInterface,
  PointerStateInterface,
} from "../intefaces/interface";

import styles from "./MapDisplay.module.css";

const App: React.FC<MapDisplayInterface> = (props) => {
  const [viewport, setViewPort] = useState<Mapbox>({
    latitude: 0,
    longitude: 0,
    zoom: 10,
    width: "100%",
    height: "100%",
  });

  const [pointer, setPointer] = useState<PointerStateInterface>({
    lat: 0,
    long: 0,
  });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setViewPort((prevState) => {
          return {
            ...prevState,
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          };
        });
        setPointer({
          lat: position.coords.latitude,
          long: position.coords.longitude,
        });
      });
    }
  }, []);

  useEffect(() => {
    setViewPort((prevState) => {
      return {
        ...prevState,
        latitude: props.lat,
        longitude: props.long,
      };
    });
    setPointer({
      lat: props.lat,
      long: props.long,
    });
  }, [props]);

  return (
    <>
      <div className={styles.mapButtonSection}>
        <button className={styles.mapContainerButton}>Take Snapshot</button>
      </div>
      <div className={styles.mapbox_container} id="map-container__div">
        <ReactMapGl
          {...viewport}
          mapStyle="mapbox://styles/sudosdm/cknvrogsv1vt217jgicvef63y"
          onViewportChange={(viewport: Mapbox) => setViewPort(viewport)}
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        >
          <Marker latitude={pointer.lat} longitude={pointer.long}>
            <FontAwesomeIcon icon={faMapPin} size="3x" color="white" />
          </Marker>
        </ReactMapGl>
      </div>
    </>
  );
};

export default App;

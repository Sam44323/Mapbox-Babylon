import React, { useEffect, useState, useCallback } from "react";
import mapboxGl from "mapbox-gl";
import { Canvas } from "@react-three/fiber";
import ReactMapGl, { Marker } from "react-map-gl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapPin } from "@fortawesome/free-solid-svg-icons";
import {
  Mapbox,
  MapDisplayInterface,
  PointerStateInterface,
} from "../intefaces/interfaces";

import styles from "./MapDisplay.module.css";

const Box: React.FC = () => {
  return (
    <mesh>
      <boxBufferGeometry attach="geometry" />
      <meshLambertMaterial attach="material" color="hotpink" />
    </mesh>
  );
};

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

  const [snapshot, setSnapShot] = useState("");

  useEffect(() => {
    mapboxGl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN as string;
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

  const takeSnapshot = useCallback(() => {
    mapboxGl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN as string;
    let map = new mapboxGl.Map({
      container: "snap-container",
      style: "mapbox://styles/sudosdm/cknvrogsv1vt217jgicvef63y",
      center: {
        lat: viewport.latitude,
        lng: viewport.longitude,
      },
      zoom: viewport.zoom,
      preserveDrawingBuffer: true,
      interactive: false,
    });
    setSnapShot(map.getCanvas().toDataURL());
  }, [viewport]);

  return (
    <>
      <div className={styles.mapButtonSection}>
        <button className={styles.mapContainerButton} onClick={takeSnapshot}>
          Take Snapshot
        </button>
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
      <div id="snap-container" className={styles.snapshotContainer}>
        {snapshot ? (
          <img src={snapshot} alt="imageValue" />
        ) : (
          <h1 style={{ textAlign: "center" }}>No Snap Yet!</h1>
        )}
      </div>
      <Canvas>
        <Box />
      </Canvas>
    </>
  );
};

export default App;

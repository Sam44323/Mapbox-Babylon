import React from "react";

import MapDisplay from "../components/MapDisplay";
import SearchLocation from "../components/SearchLocation";

const MapRoot: React.FC = () => {
  return (
    <>
      <SearchLocation />
      <MapDisplay />
    </>
  );
};

export default MapRoot;

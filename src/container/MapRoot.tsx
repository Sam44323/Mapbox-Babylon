import React, { useCallback } from "react";

import MapDisplay from "../components/MapDisplay";
import SearchLocation from "../components/SearchLocation";

const MapRoot: React.FC = () => {
  const getLocation = useCallback((location: string) => {
    console.log(location);
  }, []);
  return (
    <>
      <SearchLocation sendValue={getLocation} />
      <MapDisplay />
    </>
  );
};

export default MapRoot;

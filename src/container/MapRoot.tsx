import React, { useCallback, useState } from "react";
import axios from "axios";

import { MapRootInterface } from "../intefaces/interface";
import MapDisplay from "../components/MapDisplay";
import SearchLocation from "../components/SearchLocation";

const MapRoot: React.FC = () => {
  const [searchedLocation, setSearchedLocation] = useState<MapRootInterface>({
    lat: 45.4211,
    long: -75.6903,
  });
  const getLocation = useCallback(async (location: string) => {
    const res = await axios.get(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`
    );
    const response = res.data.features[0].geometry.coordinates;
    if (response) {
      setSearchedLocation({
        lat: response[1],
        long: response[0],
      });
    }
  }, []);
  return (
    <>
      {console.log(searchedLocation)}
      <SearchLocation sendValue={getLocation} />
      <MapDisplay lat={searchedLocation?.lat!} long={searchedLocation?.long!} />
    </>
  );
};

export default MapRoot;

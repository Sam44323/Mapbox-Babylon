import React, { useCallback, useRef } from "react";

import { SearcLocation } from "../intefaces/interface";
import styles from "./SearchLocation.module.css";

const SearchLocation: React.FC<SearcLocation> = (props) => {
  const locationRef = useRef<HTMLInputElement>(null);

  const sendLocation = useCallback(() => {
    let value: string = locationRef.current?.value as string;
    value = value?.replace(/\s/g, "%20");
    props.sendValue(value);
  }, [props]);

  return (
    <div className={styles.search_container}>
      <input
        placeholder="search for a location"
        className={styles.search_input}
        ref={locationRef}
      />
      <button className={styles.search_button} onClick={sendLocation}>
        Locate
      </button>
    </div>
  );
};

export default SearchLocation;

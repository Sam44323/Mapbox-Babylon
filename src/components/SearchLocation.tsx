import React from "react";

import styles from "./SearchLocation.module.css";

const SearchLocation: React.FC = () => {
  return (
    <div className={styles.search_container}>
      <input
        placeholder="Search For a Location"
        className={styles.search_input}
      />
      <button className={styles.search_button}>Locate</button>
    </div>
  );
};

export default SearchLocation;

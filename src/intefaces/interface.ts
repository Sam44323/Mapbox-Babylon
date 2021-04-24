export interface Mapbox {
  latitude: number;
  longitude: number;
  zoom: 10;
  width: "100%";
  height: "100%";
}

export interface SearchLocationInterface {
  sendValue: (value: string) => void;
}

export interface MapRootInterface {
  lat: number;
  long: number;
}

export interface MapDisplayInterface {
  lat: number;
  long: number;
}

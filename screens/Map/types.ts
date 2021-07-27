export interface Coordinates {
  latitude: number;
  longitude: number;
}

export interface LocationData {
  description: string;
  title: string;
}

export interface Marker extends LocationData {
  coordinate: Coordinates;
  key: number | string;
}

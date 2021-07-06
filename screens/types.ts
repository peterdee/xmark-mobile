export interface Coordinates {
  latitude: number;
  longitude: number;
}

export interface Marker {
  coordinate: Coordinates;
  description: string;
  key: number | string;
  title: string;
}

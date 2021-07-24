export interface Coordinates {
  latitude: number;
  longitude: number;
}

export interface LocationTextData {
  description: string;
  title: string;
}

export interface Marker extends LocationTextData {
  coordinate: Coordinates;
  key: number | string;
}

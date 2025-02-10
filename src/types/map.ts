export interface Coordinates {
  lat: number;
  lng: number;
}

export interface Route {
  id: string;
  origin: Coordinates;
  destination: Coordinates;
  timestamp: number;
}
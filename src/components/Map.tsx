import { MapContainer, TileLayer, Marker, Popup, useMap, useMapEvents } from 'react-leaflet';
import { useState, useEffect } from 'react';
import { Coordinates } from '../types/map';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';

// Fix Leaflet default marker icon
const defaultIcon = new Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

interface MapProps {
  center: Coordinates;
  origin: Coordinates | null;
  destination: Coordinates | null;
  onMapClick: (coords: Coordinates) => void;
}

// Bengaluru boundaries
const BOUNDS = {
  north: 13.0827,
  south: 12.9342,
  east: 77.7506,
  west: 77.4855,
};

function MapEvents({ onMapClick }: { onMapClick: (coords: Coordinates) => void }) {
  useMapEvents({
    click: (e) => {
      const { lat, lng } = e.latlng;
      if (
        lat >= BOUNDS.south &&
        lat <= BOUNDS.north &&
        lng >= BOUNDS.west &&
        lng <= BOUNDS.east
      ) {
        onMapClick({ lat, lng });
      }
    },
  });
  return null;
}

function MapComponent({ center, origin, destination }: Omit<MapProps, 'onMapClick'>) {
  const map = useMap();

  useEffect(() => {
    map.setView([center.lat, center.lng], 12);
  }, [center, map]);

  return (
    <>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {origin && (
        <Marker position={[origin.lat, origin.lng]} icon={defaultIcon}>
          <Popup>Origin</Popup>
        </Marker>
      )}
      {destination && (
        <Marker position={[destination.lat, destination.lng]} icon={defaultIcon}>
          <Popup>Destination</Popup>
        </Marker>
      )}
    </>
  );
}

export default function Map({ center, origin, destination, onMapClick }: MapProps) {
  const [mapCenter] = useState<Coordinates>(center);

  return (
    <MapContainer
      center={[mapCenter.lat, mapCenter.lng]}
      zoom={12}
      className="h-full w-full"
    >
      <MapComponent
        center={center}
        origin={origin}
        destination={destination}
      />
      <MapEvents onMapClick={onMapClick} />
    </MapContainer>
  );
}
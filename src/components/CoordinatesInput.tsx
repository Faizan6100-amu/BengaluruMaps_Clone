import React from 'react';
import { Coordinates } from '../types/map';

interface CoordinatesInputProps {
  label: string;
  coordinates: Coordinates | null;
  onChange: (coords: Coordinates) => void;
}

export default function CoordinatesInput({
  label,
  coordinates,
  onChange,
}: CoordinatesInputProps) {
  const handleLatChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const lat = parseFloat(e.target.value);
    if (coordinates) {
      onChange({ ...coordinates, lat });
    } else {
      onChange({ lat, lng: 0 });
    }
  };

  const handleLngChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const lng = parseFloat(e.target.value);
    if (coordinates) {
      onChange({ ...coordinates, lng });
    } else {
      onChange({ lat: 0, lng });
    }
  };

  return (
    <div className="space-y-2">
      <h3 className="text-sm font-medium text-gray-700">{label}</h3>
      <div className="flex space-x-2">
        <div>
          <label className="text-xs text-gray-500">Latitude</label>
          <input
            type="number"
            step="0.0001"
            value={coordinates?.lat || ''}
            onChange={handleLatChange}
            className="w-full px-3 py-2 border rounded-md text-sm"
            placeholder="12.9716"
          />
        </div>
        <div>
          <label className="text-xs text-gray-500">Longitude</label>
          <input
            type="number"
            step="0.0001"
            value={coordinates?.lng || ''}
            onChange={handleLngChange}
            className="w-full px-3 py-2 border rounded-md text-sm"
            placeholder="77.5946"
          />
        </div>
      </div>
    </div>
  );
}
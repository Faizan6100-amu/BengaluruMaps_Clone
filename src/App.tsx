import { useState } from 'react';
import { MapPin } from 'lucide-react';
import Map from './components/Map';
import CoordinatesInput from './components/CoordinatesInput';
import SearchHistory from './components/SearchHistory';
import { Coordinates, Route } from './types/map';

// Bengaluru center coordinates
const BENGALURU_CENTER: Coordinates = {
  lat: 12.9716,
  lng: 77.5946,
};

function App() {
  const [origin, setOrigin] = useState<Coordinates | null>(null);
  const [destination, setDestination] = useState<Coordinates | null>(null);
  const [isSettingOrigin, setIsSettingOrigin] = useState(true);
  const [routes, setRoutes] = useState<Route[]>([]);

  const handleMapClick = (coords: Coordinates) => {
    if (isSettingOrigin) {
      setOrigin(coords);
      setIsSettingOrigin(false);
    } else {
      setDestination(coords);
      addToHistory(origin!, coords);
    }
  };

  const addToHistory = (origin: Coordinates, destination: Coordinates) => {
    const newRoute: Route = {
      id: Date.now().toString(),
      origin,
      destination,
      timestamp: Date.now(),
    };
    setRoutes((prev) => [newRoute, ...prev].slice(0, 5));
  };

  const handleRouteSelect = (route: Route) => {
    setOrigin(route.origin);
    setDestination(route.destination);
  };
  
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto p-4">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Controls Panel */}
          <div className="lg:w-1/3 space-y-4">
            <div className="bg-white rounded-lg shadow p-4">
              <h1 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <MapPin className="w-6 h-6" />
                Bengaluru Maps
              </h1>
              
              <div className="space-y-4">
                <CoordinatesInput
                  label="Origin"
                  coordinates={origin}
                  onChange={setOrigin}
                />
                <CoordinatesInput
                  label="Destination"
                  coordinates={destination}
                  onChange={setDestination}
                />
                
                <button
                  className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
                  onClick={() => setIsSettingOrigin(true)}
                >
                  {isSettingOrigin ? 'Click map to set origin' : 'Click map to set destination'}
                </button>
              </div>
            </div>
            
            <SearchHistory routes={routes} onRouteSelect={handleRouteSelect} />
          </div>

          {/* Map Container */}
          <div className="lg:w-2/3 h-[600px] bg-white rounded-lg shadow overflow-hidden">
            <Map
              center={BENGALURU_CENTER}
              origin={origin}
              destination={destination}
              onMapClick={handleMapClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
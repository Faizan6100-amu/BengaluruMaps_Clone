
import { Route } from '../types/map';

interface SearchHistoryProps {
  routes: Route[];
  onRouteSelect: (route: Route) => void;
}

export default function SearchHistory({ routes, onRouteSelect }: SearchHistoryProps) {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h2 className="text-lg font-semibold mb-4">Search History</h2>
      <div className="space-y-2">
        {routes.map((route) => (
          <div
            key={route.id}
            className="p-3 border rounded-md hover:bg-gray-50 cursor-pointer"
            onClick={() => onRouteSelect(route)}
          >
            <div className="text-sm">
              <p className="font-medium">Origin: {route.origin.lat.toFixed(4)}, {route.origin.lng.toFixed(4)}</p>
              <p className="font-medium">Destination: {route.destination.lat.toFixed(4)}, {route.destination.lng.toFixed(4)}</p>
              <p className="text-xs text-gray-500">
                {new Date(route.timestamp).toLocaleString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
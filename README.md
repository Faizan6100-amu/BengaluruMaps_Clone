# Bengaluru Maps Clone

## Overview
Bengaluru Maps Clone is a React-based web application that utilizes the Leaflet library to provide an interactive map experience for users. The application allows users to set origin and destination points on a map while ensuring that location selection is restricted to Bengaluru's geographical boundaries.

## Features
- Interactive map using React Leaflet.
- Click event to select locations within predefined Bengaluru boundaries.
- Displays markers for origin and destination.
- Responsive and modern UI.

## Technologies Used
- React.js
- React-Leaflet
- Leaflet
- TypeScript
- CSS

## Installation

### Prerequisites
Ensure you have the following installed:
- Node.js (>= 14.x)
- npm or yarn

### Steps
1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/bengaluru-maps-clone.git
   cd bengaluru-maps-clone
   ```

2. Install dependencies:
   ```sh
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```sh
   npm start
   # or
   yarn start
   ```

4. Open the browser and navigate to:
   ```
   http://localhost:3000
   ```

## Usage
- Click anywhere within Bengaluru's boundaries to set origin and destination points.
- The map restricts selection to predefined latitude and longitude values.
- Selected locations are marked with default Leaflet icons.

## Project Structure
```
├── src
│   ├── components
│   │   ├── Map.tsx  # Main Map component
│   ├── types
│   │   ├── map.ts   # Type definitions for coordinates
│   ├── App.tsx
│   ├── index.tsx
│
├── public
│   ├── index.html
│
├── package.json
└── README.md
```

## Configuration
If you need to adjust the Bengaluru map boundaries, modify the `BOUNDS` object in `Map.tsx`:
```ts
const BOUNDS = {
  north: 13.0827,
  south: 12.9342,
  east: 77.7506,
  west: 77.4855,
};
```

## Contributing
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch.
3. Make changes and commit.
4. Push to your forked repo.
5. Submit a pull request.

## License
This project is licensed under the MIT License.

## Contact
For any issues, feel free to open an issue or reach out via email: `anwarfaizankhan@gmail.com`


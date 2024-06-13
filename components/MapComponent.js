// components/MapComponent.js
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix the default icon issue in Leaflet when using Webpack
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

const MapComponent = () => {
  const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=6.440077120706916,80.00915394785021";

  return (
    <div style={{ width: '100%', height: '500px' }}>
      <MapContainer center={[6.440077120706916, 80.00915394785021]} zoom={13} style={{ width: '100%', height: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[6.440077120706916, 80.00915394785021]}>
          <Popup>
            Our Location
            <br />
            <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">Open in Google Maps</a>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapComponent;

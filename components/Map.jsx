// components/Map.js
import dynamic from 'next/dynamic';

const Map = dynamic(() => import('./MapComponent'), {
  ssr: false, // Prevent server-side rendering
});

export default Map;

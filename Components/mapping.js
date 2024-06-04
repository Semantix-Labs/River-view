// components/Map.js
import dynamic from 'next/dynamic';

const Map = dynamic(() => import('./MapComponent'), {
  ssr: false, // This line is important to prevent server-side rendering
});

export default Map;

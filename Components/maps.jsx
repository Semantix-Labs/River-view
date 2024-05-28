// pages/map.js
import Head from 'next/head';
import MapComponent from '../components/Map';

const MapPage = () => {
  return (
    <div className="flex flex-col items-center justify-center  py-2">
      <Head>
        <title>Leaflet Map</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center justify-center w-full flex-1 text-center">
        <h1 className="text-6xl font-bold">
          Leaflet Map Integration
        </h1>
        <div className="w-full h-[30rem] mt-10">
          <MapComponent />
        </div>
      </main>
    </div>
  );
};

export default MapPage;

import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet-routing-machine";
import axios from "axios";
import home1 from "../assets/home2.png";
import destination2 from "../assets/destination1.png";
import Loader from "./Loader";

const getCityCoordinates = async (city) => {
  try {
    const response = await axios.get(
      `https://nominatim.openstreetmap.org/search?format=json&q=${city}`
    );
    if (response.data.length > 0) {
      return [
        parseFloat(response.data[0].lat),
        parseFloat(response.data[0].lon),
      ];
    }
    return null;
  } catch (error) {
    console.error("Error fetching city coordinates:", error);
    return null;
  }
};

const Routing = ({ startCity, endCity }) => {
  const map = useMap();
  const [start, setStart] = useState(null);
  const [end, setEnd] = useState(null);

  useEffect(() => {
    const fetchCoordinates = async () => {
      const startCoords = await getCityCoordinates(startCity);
      const endCoords = await getCityCoordinates(endCity);
      setStart(startCoords);
      setEnd(endCoords);
    };

    if (startCity && endCity) {
      fetchCoordinates();
    }
  }, [startCity, endCity]);

  useEffect(() => {
    if (!map || !start || !end) return;

    //
    let routingControl;
    let selectedRouteLayer;

    routingControl = L.Routing.control({
      waypoints: [L.latLng(start[0], start[1]), L.latLng(end[0], end[1])],
      routeWhileDragging: true,
      lineOptions: {
        styles: [{ color: "blue", weight: 6 }],
      },
      addWaypoints: false,
      router: L.Routing.osrmv1({
        serviceUrl: "https://router.project-osrm.org/route/v1", // OSRM public API
        alternatives: true, // Enable multiple routes
      }),
    }).addTo(map);

    routingControl.on("routesfound", () => {
      // Zoom into the start location when the route is ready
      map.setView(L.latLng(start[0], start[1]), 12);
    });

    return () => map.removeControl(routingControl);
  }, [map, start, end]);

  return null;
};

const RouteMap = () => {
  const [city1, setCity1] = useState("");
  const [city2, setCity2] = useState("");
  const [isRouteReady, setIsRouteReady] = useState(false);
  const [loading, setLoading] = useState(false);
  const [currentLocation, setCurrentLocation] = useState([
    22.0808325, 82.0516102,
  ]);

  useEffect(() => {
    // Get current location if no cities are entered
    if (!city1 && !city2) {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            // console.log(position);
            const { latitude, longitude } = position.coords;
            setCurrentLocation([latitude, longitude]);
          },
          (error) => {
            console.error("Error getting user location:", error);
          }
        );
      }
    }
  }, [city1, city2]);

  const handleSubmit = async () => {
    if (city1 && city2) {
      setLoading(true); // Start loading
      const startCoords = await getCityCoordinates(city1);
      const endCoords = await getCityCoordinates(city2);
      if (startCoords && endCoords) {
        setIsRouteReady(true);
      }
      setLoading(false); // Stop loading
    }
  };

  return (
    <>
      <div className="flex flex-row items-center justify-center p-2">
        <div className="flex flex-row items-center justify-center p-2">
          <div className="bg-white p-6 rounded-2xl shadow-lg max-w-md w-full">
            {/* First City Input */}
            <div className="relative mb-4">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                <img src={home1} alt="Home Icon" className="w-6 h-6" />
              </div>
              <input
                type="text"
                placeholder="Start address"
                value={city1}
                onChange={(e) => setCity1(e.target.value)}
                className="w-full p-3 pl-10 text-lg border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Second City Input */}
            <div className="relative mb-4">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                <img
                  src={destination2}
                  alt="Destination Icon"
                  className="w-6 h-6"
                />
              </div>
              <input
                type="text"
                placeholder="Destination address"
                value={city2}
                onChange={(e) => setCity2(e.target.value)}
                className="w-full p-3 pl-10 text-lg border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>

            {/* Submit Button */}
            <button
              className="w-full bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition duration-300 py-2 cursor-pointer"
              onClick={handleSubmit}
            >
              Search Route
            </button>
          </div>
        </div>

        {/* {isRouteReady ? (
        <MapContainer
          center={currentLocation}
          zoom={5}
          style={{ height: "550px", width: "800px" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Routing
            startCity={city1}
            endCity={city2}
            onRouteReady={handleRouteReady}
          />
        </MapContainer>
      ) : (
        <div>current location in map</div>
      )} */}

        {/*  */}
        {loading ? (
          <div className="mx-20">
            <Loader />
          </div>
        ) : (
          <MapContainer
            center={currentLocation}
            zoom={6}
            style={{ height: "500px", width: "700px" }}
          >
            {/* <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            /> */}
            <TileLayer
              url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
              // url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
              // url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" original
              // url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
              // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>'
            />

            <Marker position={currentLocation}></Marker>
            {isRouteReady && <Routing startCity={city1} endCity={city2} />}
          </MapContainer>
        )}
      </div>
    </>
  );
};

export default RouteMap;

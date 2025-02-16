import { useState, useEffect } from "react";
import { auth, db } from "../firebaseconfig";
import { ref, onValue } from "firebase/database";
import { useNavigate } from "react-router-dom";
import ChartData from "../Components/ChartData";
import RouteMap from "../Components/RouteMap";
import Time from "../Components/Time";

const Dashboard = () => {
  const [distance, setDistance] = useState("Loading...");
  const [timestamp, setTimestamp] = useState("-");
  const navigate = useNavigate();

  useEffect(() => {
    const distanceRef = ref(db, "underpasses/underpass_1/sensors/ultrasonic");
    onValue(distanceRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        setDistance(`${data.distance} cm`);
        setTimestamp(new Date(data.timestamp * 1000).toLocaleString());
      } else {
        setDistance("No Data");
      }
    });
  }, []);

  return (
    <>
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-2xl font-bold text-blue-700">
          Flood Monitoring Dashboard
        </h1>
      </div>

      <div className="min-h-screen bg-gray-100 p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className=" w-full p-4 m-2">
            <Time />
          </div>
          <div className="bg-white p-8 m-6 rounded-lg shadow-lg text-center">
            <h2>Sensor 1</h2>
            <p className="text-lg font-semibold mt-4">Distance: {distance}</p>
            <p className="text-sm text-gray-500">Last Updated: {timestamp}</p>
          </div>
          <div className="bg-white p-8 m-6 rounded-lg shadow-lg text-center">
            <h2>Sensor 2</h2>
            <p className="text-lg font-semibold mt-4">Distance: {distance}</p>
            <p className="text-sm text-gray-500">Last Updated: {timestamp}</p>
          </div>
          <div className="bg-white p-8 m-6 rounded-lg shadow-lg text-center">
            <h2>Sensor 3</h2>
            <p className="text-lg font-semibold mt-4">Distance: {distance}</p>
            <p className="text-sm text-gray-500">Last Updated: {timestamp}</p>
          </div>
        </div>
        <ChartData />
      </div>
      <div>
        <RouteMap />
      </div>
    </>
  );
};

export default Dashboard;

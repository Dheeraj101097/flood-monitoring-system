import React, { useEffect, useState } from "react";
import ChartData from "../components/ChartData";
import tunnel from "../assets/tunnel.jpg";
import Time from "../components/Time";

const Home = () => {
  const [result, setResult] = useState(null);

  // const fetchDistance = async () => {
  //   try {
  //     const response = await fetch("http://localhost:3000/distance"); // Update with your backend URL
  //     if (response.ok) {
  //       const data = await response.json();
  //       setResult(data.distance);
  //     } else {
  //       console.error("Error fetching distance:", response.statusText);
  //     }
  //   } catch (error) {
  //     console.error("Error fetching distance:", error);
  //   }
  // };

  // useEffect(() => {
  //   fetchDistance();
  //   const interval = setInterval(fetchDistance, 2000); // Fetch every 2 seconds
  //   return () => clearInterval(interval); // Cleanup interval on unmount
  // }, []);

  return (
    <>
      <div className="min-h-screen bg-gray-100 p-4">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <h1 className="text-2xl font-bold mb-4 text-center">
            Tunnel Sensor Dashboard
          </h1>
          <div className=" w-full p-4 m-2">
            <Time />
          </div>

          <img src={tunnel} />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-10">
            {/* Ultrasonic Sensor Image and Value */}
            <div className="bg-white shadow rounded-lg p-4 flex flex-col items-center">
              <h2 className="text-lg font-semibold mb-2">
                Ultrasonic Sensor 1
              </h2>
              <div className="bg-blue-100 text-blue-800 text-center py-2 px-4 rounded-lg shadow">
                <span className="text-sm font-medium">Sensor Value:</span>
                {result !== null ? (
                  <span className="text-xl font-bold ml-2">{result} cm</span>
                ) : (
                  <p>No data available</p>
                )}
              </div>
            </div>
            {/*  */}
            <div className="bg-white shadow rounded-lg p-4 flex flex-col items-center">
              <h2 className="text-lg font-semibold mb-2">
                Ultrasonic Sensor 2
              </h2>
              <div className="bg-blue-100 text-blue-800 text-center py-2 px-4 rounded-lg shadow">
                <span className="text-sm font-medium">Sensor Value:</span>
                {result !== null ? (
                  <span className="text-xl font-bold ml-2">{result} cm</span>
                ) : (
                  <p>No data available</p>
                )}
              </div>
            </div>
            {/*  */}
            <div className="bg-white shadow rounded-lg p-4 flex flex-col items-center">
              <h2 className="text-lg font-semibold mb-2">
                Ultrasonic Sensor 3
              </h2>
              <div className="bg-blue-100 text-blue-800 text-center py-2 px-4 rounded-lg shadow">
                <span className="text-sm font-medium">Sensor Value:</span>
                {result !== null ? (
                  <span className="text-xl font-bold ml-2">{result} cm</span>
                ) : (
                  <p>No data available</p>
                )}
              </div>
            </div>
            {/*  */}
          </div>
        </div>
        <ChartData />
      </div>
    </>
  );
};

export default Home;

import React, { useEffect, useState } from "react";

const Home = () => {
  const [result, setResult] = useState("hello");

  const fetchDistance = async () => {
    try {
      const response = await fetch("http://localhost:3000/distance"); // Update with your backend URL
      if (response.ok) {
        const data = await response.json();
        setResult(data.distance);
      } else {
        console.error("Error fetching distance:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching distance:", error);
    }
  };

  useEffect(() => {
    fetchDistance();
    const interval = setInterval(fetchDistance, 2000); // Fetch every 2 seconds
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div>
      <h1>Distance Data</h1>
      {result !== null ? (
        <p>Latest Distance: {result} </p>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default Home;

import React, { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";
import { getRelativePosition } from "chart.js/helpers";

const ChartData = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    const data = {
      labels: ["Time 1", "Time 2", "Time 3", "Time 4", "Time 5"], // Replace with actual timestamps or labels
      datasets: [
        {
          label: "Sensor 1",
          data: [10, 15, 12, 14, 18], // Replace with actual sensor 1 data
          borderColor: "rgba(255, 99, 132, 1)",
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          fill: true,
        },
        {
          label: "Sensor 2",
          data: [20, 25, 22, 24, 28], // Replace with actual sensor 2 data
          borderColor: "rgba(54, 162, 235, 1)",
          backgroundColor: "rgba(54, 162, 235, 0.2)",
          fill: true,
        },
        {
          label: "Sensor 3",
          data: [30, 35, 32, 34, 38], // Replace with actual sensor 3 data
          borderColor: "rgba(75, 192, 192, 1)",
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          fill: true,
        },
      ],
    };

    const options = {
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
        tooltip: {
          enabled: true,
        },
      },
      scales: {
        x: {
          title: {
            display: true,
            text: "Time",
          },
        },
        y: {
          title: {
            display: true,
            text: "Water Level Distance (cm)",
          },
        },
      },
      onClick: (e) => {
        const canvasPosition = getRelativePosition(e, chart);

        // Substitute the appropriate scale IDs
        const dataX = chart.scales.x.getValueForPixel(canvasPosition.x);
        const dataY = chart.scales.y.getValueForPixel(canvasPosition.y);

        console.log(`Clicked at: X=${dataX}, Y=${dataY}`);
      },
    };

    const myChart = new Chart(ctx, {
      type: "line",
      data,
      options,
    });

    return () => {
      myChart.destroy();
    };
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold text-center mb-4">
        Water Level Monitoring
      </h1>
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default ChartData;

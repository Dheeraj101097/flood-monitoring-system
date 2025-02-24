import React from "react";

const data = [
  {
    name: "MG Road Underpass",
    waterLevel: [2.5, 2.6, 2.4],
    status: "Active",
  },
  {
    name: "Rajiv Chowk Tunnel",
    waterLevel: [1.8, 1.7, 1.9],
    status: "Active",
  },
  {
    name: "Ring Road Underpass",
    waterLevel: [3.2, 3.3, 3.1],
    status: "Inactive",
  },
  {
    name: "Delhi Gate Subway",
    waterLevel: [0.9, 0.8, 1.0],
    status: "Active",
  },
  {
    name: "Noida Sec 16",
    waterLevel: [2.0, 2.1, 2.0],
    status: "Active",
  },
  {
    name: "Sarai Kale Khan",
    waterLevel: [3.8, 3.7, 3.9],
    status: "Inactive",
  },
  {
    name: "AIIMS Underpass",
    waterLevel: [1.2, 1.1, 1.3],
    status: "Active",
  },
  {
    name: "Dhaula Kuan Subway",
    waterLevel: [4.1, 4.0, 4.2],
    status: "Inactive",
  },

  {
    name: "Pragati Maidan Pass",
    waterLevel: [3.1, 1.5, 4.2],
    status: "Active",
  },
  { name: "Connaught Place", waterLevel: [2.6, 8.2, 5.1], status: "Active" },
];

const DashBoardTable = () => {
  return (
    <div className="overflow-x-auto p-4">
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="py-2 px-4 text-left">Underpass Name</th>
            <th className="py-2 px-4 text-left">Water Level</th>
            <th className="py-2 px-4 text-left">Device Status</th>
            <th className="py-2 px-4 text-center">Full View</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="border-b hover:bg-gray-100 transition">
              <td className="py-2 px-4">{item.name}</td>
              <td className="py-2 px-4">{item.waterLevel}</td>
              <td
                className={`py-2 px-4 ${
                  item.status === "Active"
                    ? "text-green-600 font-semibold"
                    : "text-red-600 font-semibold"
                }`}
              >
                {item.status}
              </td>
              <td className="py-2 px-4 text-center cursor-pointer">🔍</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DashBoardTable;

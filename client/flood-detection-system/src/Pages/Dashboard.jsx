import { useState, useEffect } from "react";
import { auth, db } from "../firebaseconfig";
import { ref, onValue } from "firebase/database";
import { useNavigate } from "react-router-dom";
import ChartData from "../Components/ChartData";
import RouteMap from "../Components/RouteMap";
import Time from "../Components/Time";
import { FaBars, FaSun, FaMoon, FaUser, FaHome } from "react-icons/fa";
import { IoMdLogOut } from "react-icons/io";
import DashBoardTable from "../components/DashBoardTable";

const Dashboard = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const name = localStorage.getItem(
    "firebase:host:monitor-fea81-default-rtdb.firebaseio.com"
  );
  const handleLogout = () => {
    auth.signOut();
    navigate("/login");
    localStorage.removeItem(
      "firebase:host:monitor-fea81-default-rtdb.firebaseio.com"
    );
  };
  return (
    <>
      <div className="flex h-screen bg-gray-100 ">
        {/* Sidebar */}
        <div
          className={`fixed left-0 top-0 h-full bg-gradient-to-b from-blue-900 to-blue-800 text-white transition-all duration-300 ${
            isOpen ? "w-64 p-4" : "w-16 p-2"
          }`}
        >
          <button
            className="text-white text-2xl mt-3 ml-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <FaHome />
          </button>
          {isOpen && (
            <nav className="mt-4 space-y-4">
              <a href="#" className="block">
                Home
              </a>
              <a href="#" className="block">
                Services
              </a>
              <a href="#" className="block">
                Contact
              </a>
            </nav>
          )}
        </div>

        {/* Main Content */}
        <div className="flex-1 ml-16">
          {/* Navbar */}
          <div className="flex justify-between items-center p-4 bg-[#020040] shadow-md">
            <h1 className="text-xl font-bold text-gray-800 dark:text-white">
              Flood Monitoring System
            </h1>
            <div className="flex items-center space-x-4">
              <span className="text-gray-800 dark:text-white flex items-center">
                <FaUser className="mr-2" /> {name}
              </span>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="text-gray-800 dark:text-white text-xl "
              >
                {darkMode ? <FaSun /> : <FaMoon />}
              </button>
              <button
                className="text-red-400 cursor-pointer text-xl"
                onClick={handleLogout}
              >
                <IoMdLogOut />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="mt-6 text-gray-800 ">
            <DashBoardTable />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

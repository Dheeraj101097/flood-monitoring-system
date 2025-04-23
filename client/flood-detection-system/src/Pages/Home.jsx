// import { useState } from "react";
// import {
//   FaBell,
//   FaExclamationTriangle,
//   FaTools,
//   FaBolt,
//   FaRobot,
//   FaRoute,
// } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import fms from "../assets/fms1.png";

//       {/* Call to Action */}

//       <section class="bg-gradient-to-r from-blue-500 to-blue-900 text-white py-16">
//         <div class="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 class="text-3xl font-bold mb-4">
//             Join Us in Making Cities Safer and Smarter.
//           </h2>
//           <p class="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
//             Join cities worldwide using FloodSense to create safer, smarter
//             urban infrastructure.
//           </p>
//           <div class="flex flex-wrap justify-center gap-4">
//             <a
//               href="#"
//               class="bg-white text-blue-700 font-semibold py-2 px-6 rounded-full hover:bg-gray-200 transition duration-300"
//             >
//               Request Demo
//             </a>
//             <a
//               href="#"
//               class="bg-white text-blue-700 font-semibold py-2 px-6 rounded-full hover:bg-gray-200 transition duration-300"
//             >
//               Contact Us
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}

//     </div>
//   );
// };

// export default Home;
//
//
//
//
//
//
//
import { motion, AnimatePresence } from "framer-motion";
import {
  FaWater,
  FaMapMarkedAlt,
  FaMobile,
  FaChartLine,
  FaSun,
  FaMoon,
  FaBell,
  FaExclamationTriangle,
  FaTools,
  FaBolt,
  FaRobot,
  FaRoute,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext"; // Import the context

function Home() {
  const [darkMode, setDarkMode] = useState(false);
  // const [darkMode, toggleDarkMode] = useTheme(); // use context instead of local state

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const features = [
    {
      icon: (
        <FaWater className="text-4xl font-light text-blue-500 dark:text-blue-400" />
      ),
      title: "Real-time Flood Monitoring",
      description:
        "Advanced sensors provide instant water level updates and flood risk assessment",
    },
    {
      icon: (
        <FaMapMarkedAlt className="text-4xl text-green-500 dark:text-green-400" />
      ),
      title: "Interactive Mapping",
      description:
        "Visualize flood-prone areas and safe zones with our detailed mapping system",
    },
    {
      icon: <FaMobile className="text-4xl text-blue-500 dark:text-blue-400" />,
      title: "Mobile Alerts",
      description:
        "Receive immediate notifications about potential flood risks in your area",
    },
    {
      icon: (
        <FaChartLine className="text-4xl text-green-500 dark:text-green-400" />
      ),
      title: "Predictive Analytics",
      description:
        "AI-powered predictions for better flood preparedness and response",
    },
    {
      icon: <FaRobot className="text-4xl text-green-500 dark:text-green-400" />,
      title: "AI-based Pothole Detection",
      description:
        "Advanced machine learning to identify and report road damage and potholes.",
    },

    {
      icon: <FaTools />,
      title: "Easy Installation",
      description: "Simple and fast setup with minimal infrastructure.",
    },
    {
      icon: <FaBolt />,
      title: "Energy Efficient",
      description: "Low-power devices ensure long-lasting performance.",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold gradient-text">FloodSense</h1>
            <div className="flex items-center gap-6">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                {darkMode ? (
                  <FaSun className="text-yellow-500 text-xl" />
                ) : (
                  <FaMoon className="text-gray-600 text-xl" />
                )}
              </button>
              {/* <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                {darkMode ? (
                  <FaSun className="text-yellow-500 text-xl" />
                ) : (
                  <FaMoon className="text-gray-600 text-xl" />
                )}
              </button> */}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-gradient section-padding pt-32">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 dark:text-white">
              Welcome to <span className="gradient-text">FloodSense</span>
            </h1>
            {/* <h3 className="text-2xl md:text-3xl font-bold mb-6 dark:text-white">
              Smart Underpass Flood Monitoring System
            </h3> */}
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Advanced flood monitoring and early warning system for communities
              worldwide
            </p>
            {/* <p className="text-lg md:text-xl mb-6">
              // Advanced AI-powered system to monitor, predict, and alert about
              // flooding in urban underpasses in real-time. //{" "}
            </p> */}
            <Link to={"/adminlogin"}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="button-primary mb-12"
              >
                Get Started
              </motion.button>
            </Link>
            <motion.img
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              src="https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg"
              alt="Flood monitoring system"
              className="rounded-xl shadow-2xl mx-auto mb-12 max-w-4xl w-full"
            />
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">
            Our Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="feature-card bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding hero-gradient">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6 dark:text-white">
                About FloodSense
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                FloodSense is a cutting-edge flood monitoring system that
                combines IoT sensors, artificial intelligence, and real-time
                data analytics to protect communities from flood-related
                disasters.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Our system provides early warnings, detailed analytics, and
                actionable insights to help communities prepare for and respond
                to flooding events effectively.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="button-primary mt-8"
              >
                Learn More
              </motion.button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://images.pexels.com/photos/1446076/pexels-photo-1446076.jpeg"
                alt="Flood monitoring dashboard"
                className="rounded-xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl font-bold mb-4 gradient-text">
              FloodSense
            </h2>
            <p className="text-gray-400">
              Smart solutions for urban flood monitoring and management.
            </p>
            <p className="mt-8 text-gray-500">
              © 2025 FloodSense. All rights reserved.
            </p>
          </motion.div>
          <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 class="text-lg font-semibold mb-4">Quick Links</h3>
                <ul class="space-y-2">
                  <li>
                    <a
                      href="#"
                      class="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      Live Map
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      Documentation
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      About Us
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 class="text-lg font-semibold mb-4">Contact</h3>
                <ul class="space-y-2">
                  <li class="flex items-center">
                    <i class="fas fa-envelope mr-2 text-primary-400"></i>{" "}
                    contact@floodsense.io
                  </li>
                  <li class="flex items-center">
                    <i class="fas fa-phone mr-2 text-primary-400"></i> +1 (555)
                    123-4567
                  </li>
                  <li class="flex items-center">
                    <i class="fas fa-map-marker-alt mr-2 text-primary-400"></i>{" "}
                    Smart City Lab, Tech Avenue
                  </li>
                </ul>
              </div>
              <div>
                <h3 class="text-lg font-semibold mb-4">Connect</h3>
                <div class="flex space-x-4">
                  <a
                    href="#"
                    class="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    <i class="fab fa-github text-xl"></i>
                  </a>
                  <a
                    href="#"
                    class="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    <i class="fab fa-twitter text-xl"></i>
                  </a>
                  <a
                    href="#"
                    class="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    <i class="fab fa-linkedin text-xl"></i>
                  </a>
                  <a
                    href="#"
                    class="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    <i class="fab fa-youtube text-xl"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;

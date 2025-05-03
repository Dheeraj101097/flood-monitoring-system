import { motion, AnimatePresence } from "framer-motion";
import {
  Waves,
  MapPinned,
  Smartphone,
  LineChart,
  Bot,
  Settings,
  BatteryCharging,
  Moon,
  SunMediumIcon,
} from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function Home() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // const features = [
  //   {
  //     icon: (
  //       <FaWater className="text-4xl font-light text-blue-500 dark:text-blue-400" />
  //     ),
  //     title: "Real-time Flood Monitoring",
  //     description:
  //       "Advanced sensors provide instant water level updates and flood risk assessment",
  //   },
  //   {
  //     icon: (
  //       <FaMapMarkedAlt className="text-4xl text-orange-300 dark:text-orange-300" />
  //     ),
  //     title: "Interactive Mapping",
  //     description:
  //       "Visualize flood-prone areas and safe zones with our detailed mapping system",
  //   },
  //   {
  //     icon: <FaMobile className="text-4xl text-cyan-300 dark:text-cyan-300" />,
  //     title: "Mobile Alerts",
  //     description:
  //       "Receive immediate notifications about potential flood risks in your area",
  //   },
  //   {
  //     icon: (
  //       <FaChartLine className="text-4xl text-green-500 dark:text-green-400" />
  //     ),
  //     title: "Predictive Analytics",
  //     description:
  //       "AI-powered predictions for better flood preparedness and response",
  //   },
  //   {
  //     icon: <FaRobot className="text-4xl text-green-500 dark:text-green-400" />,
  //     title: "AI-based Pothole Detection",
  //     description:
  //       "Advanced machine learning to identify and report road damage and potholes.",
  //   },

  //   {
  //     icon: <FaTools />,
  //     title: "Easy Installation",
  //     description: "Simple and fast setup with minimal infrastructure.",
  //   },
  //   {
  //     icon: <FaBolt />,
  //     title: "Energy Efficient",
  //     description: "Low-power devices ensure long-lasting performance.",
  //   },
  // ];

  const features = [
    {
      icon: <Waves className="text-4xl text-blue-500 dark:text-blue-400" />,
      title: "Real-time Flood Monitoring",
      description:
        "Advanced sensors provide instant water level updates and flood risk assessment",
    },
    {
      icon: <MapPinned className="text-4xl text-cyan-300 dark:text-cyan-300" />,
      title: "Interactive Mapping",
      description:
        "Visualize flood-prone areas and safe zones with our detailed mapping system",
    },
    {
      icon: (
        <Smartphone className="text-4xl text-orange-300 dark:text-orange-300" />
      ),
      title: "Mobile Alerts",
      description:
        "Receive immediate notifications about potential flood risks in your area",
    },
    {
      icon: (
        <LineChart className="text-4xl text-green-500 dark:text-green-400" />
      ),
      title: "Predictive Analytics",
      description:
        "AI-powered predictions for better flood preparedness and response",
    },
    {
      icon: <Bot className="text-4xl text-purple-500 dark:text-purple-400" />,
      title: "AI-based Pothole Detection",
      description:
        "Advanced machine learning to identify and report road damage and potholes.",
    },
    {
      icon: (
        <Settings className="text-4xl text-amber-300 dark:text-amber-300" />
      ),
      title: "Easy Installation",
      description: "Simple and fast setup with minimal infrastructure.",
    },
    {
      icon: (
        <BatteryCharging className="text-4xl text-red-500 dark:text-red-400" />
      ),
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
                  <SunMediumIcon className="text-yellow-500 text-xl" />
                ) : (
                  <Moon className="text-gray-600 text-xl" />
                )}
              </button>
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
      {/* <footer className="bg-gray-900 text-white py-12">
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
      </footer> */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl font-extrabold mb-2 gradient-text">
              FloodSense
            </h2>
            <p className="text-gray-400">
              Smart solutions for urban flood monitoring and management.
            </p>
            <p className="mt-6 text-sm text-gray-500">
              © 2025 FloodSense. All rights reserved.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-sm">
            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {["Home", "Live Map", "Documentation", "About Us"].map(
                  (link, i) => (
                    <li key={i}>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-white transition-colors duration-200"
                      >
                        {link}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <i className="fas fa-envelope text-blue-400 mt-1"></i>
                  <span>contact@floodsense.io</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="fas fa-phone text-blue-400 mt-1"></i>
                  <span>+1 (555) 123-4567</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="fas fa-map-marker-alt text-blue-400 mt-1"></i>
                  <span>Smart City Lab, Tech Avenue</span>
                </li>
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <div className="flex space-x-4">
                {[
                  { icon: "fab fa-github", label: "GitHub" },
                  { icon: "fab fa-twitter", label: "Twitter" },
                  { icon: "fab fa-linkedin", label: "LinkedIn" },
                  { icon: "fab fa-youtube", label: "YouTube" },
                ].map((social, i) => (
                  <a
                    key={i}
                    href="#"
                    aria-label={social.label}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-xl"
                  >
                    <i className={social.icon}></i>
                  </a>
                ))}
              </div>
            </div>

            {/* Optional: Newsletter or About */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
              <p className="text-gray-400 mb-3">
                Subscribe to our newsletter for updates on flood alerts and
                smart city solutions.
              </p>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 rounded bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;

import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeToggle = ({ setIsDarkMode, setIsHackerMode }) => {
  return (
    <div className="theme-toggle flex items-center space-x-4 p-4">
      <button
        onClick={() => setIsDarkMode((prev) => !prev)}
        className="p-2 rounded-full bg-gray-800 text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300 ease-in-out"
      >
        <FaMoon size={24} />
      </button>
      <button
        onClick={() => setIsHackerMode((prev) => !prev)}
        className="p-2 rounded-full bg-green-500 text-white hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300 ease-in-out"
      >
        <FaSun size={24} />
      </button>
    </div>
  );
};

export default ThemeToggle;

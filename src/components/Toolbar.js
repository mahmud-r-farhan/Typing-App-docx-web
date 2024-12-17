import React from "react";
import {
  FaSave,
  FaBold,
  FaItalic,
  FaUnderline,
  FaAlignLeft,
  FaAlignCenter,
  FaAlignRight,
} from "react-icons/fa";

const Toolbar = ({
  fontSize,
  setFontSize,
  setFontFamily,
  setTextColor,
  setIsDarkMode,
  setIsHackerMode,
  handleSave,
  setIsBold,
  setIsItalic,
  setIsUnderlined,
  setTextAlign,
  isBold,
  isItalic,
  isUnderlined,
}) => {
  return (
    <div className="toolbar flex flex-wrap items-center justify-center gap-4 p-4 bg-gray-800 text-white rounded-lg shadow-lg">
      <button
        onClick={() => handleSave()}
        className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-300"
        aria-label="Save"
      >
        <FaSave size={20} />
      </button>

      <button
        onClick={() => setIsBold((prev) => !prev)}
        className={`p-2 rounded-full ${isBold ? 'border-2 border-indigo-500' : 'bg-gray-700'} hover:bg-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300`}
        aria-label="Bold"
      >
        <FaBold size={20} />
      </button>

      <button
        onClick={() => setIsItalic((prev) => !prev)}
        className={`p-2 rounded-full ${isItalic ? 'border-2 border-indigo-500' : 'bg-gray-700'} hover:bg-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300`}
        aria-label="Italic"
      >
        <FaItalic size={20} />
      </button>

      <button
        onClick={() => setIsUnderlined((prev) => !prev)}
        className={`p-2 rounded-full ${isUnderlined ? 'border-2 border-indigo-500' : 'bg-gray-700'} hover:bg-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300`}
        aria-label="Underline"
      >
        <FaUnderline size={20} />
      </button>

      <div className="flex flex-col sm:flex-row items-center">
        <input
          type="number"
          value={fontSize}
          onChange={(e) => setFontSize(e.target.value)}
          className="p-2 rounded-md bg-gray-900 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300 mb-2 sm:mb-0 sm:mr-2"
          placeholder="Font Size"
        />
        <select
          onChange={(e) => setFontFamily(e.target.value)}
          className="p-2 rounded-md bg-gray-900 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
        >
          <option value="Arial">Arial</option>
          <option value="Verdana">Verdana</option>
          <option value="Courier New">Courier New</option>
          <option value="Georgia">Georgia</option>
        </select>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-2 mt-2 sm:mt-0">
        <input
          type="color"
          onChange={(e) => setTextColor(e.target.value)}
          className="p-2 rounded-md border-none focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
          aria-label="Text Color"
        />

        <div className="flex gap-2">
          <button
            onClick={() => setTextAlign("left")}
            className={`p-2 rounded-full ${setTextAlign === "left" ? 'border-2 border-indigo-500' : 'bg-gray-700'} hover:bg-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300`}
            aria-label="Align Left"
          >
            <FaAlignLeft size={20} />
          </button>

          <button
            onClick={() => setTextAlign("center")}
            className={`p-2 rounded-full ${setTextAlign === "center" ? 'border-2 border-indigo-500' : 'bg-gray-700'} hover:bg-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300`}
            aria-label="Align Center"
          >
            <FaAlignCenter size={20} />
          </button>

          <button
            onClick={() => setTextAlign("right")}
            className={`p-2 rounded-full ${setTextAlign === "right" ? 'border-2 border-indigo-500' : 'bg-gray-700'} hover:bg-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300`}
            aria-label="Align Right"
          >
            <FaAlignRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Toolbar;

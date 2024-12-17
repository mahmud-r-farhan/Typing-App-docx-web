import React from "react";

const TextEditor = ({
  text,
  fontSize,
  fontFamily,
  textColor,
  isBold,
  isItalic,
  isUnderlined,
  textAlign,
  onTextChange,
}) => {
  const textStyle = {
    fontSize: `${fontSize}px`,
    fontFamily: fontFamily,
    color: textColor,
    fontWeight: isBold ? "bold" : "normal",
    fontStyle: isItalic ? "italic" : "normal",
    textDecoration: isUnderlined ? "underline" : "none",
    textAlign: textAlign,
  };

  return (
    <div className="text-editor flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-lg max-w-4xl w-full mx-auto">
      <textarea
        value={text}
        onChange={onTextChange}
        style={textStyle}
        placeholder="Start typing here..."
        className="w-full h-64 p-4 bg-white border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300 ease-in-out resize-none"
      />
      <div className="flex justify-between w-full mt-4">
        <span className="text-sm text-gray-600">{`Font size: ${fontSize}px`}</span>
        <span className="text-sm text-gray-600">{`Font: ${fontFamily}`}</span>
      </div>
    </div>
  );
};

export default TextEditor;

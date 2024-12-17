import React, { useState, useEffect } from "react";
import TextEditor from "./components/TextEditor";
import Toolbar from "./components/Toolbar";
import ThemeToggle from "./components/ThemeToggle";
import { saveTextAsFile } from "./utils/fileUtils";
import { Helmet } from "react-helmet";

const App = () => {
  const [text, setText] = useState("");
  const [fontSize, setFontSize] = useState(14);
  const [fontFamily, setFontFamily] = useState("Arial");
  const [textColor, setTextColor] = useState("#000000");
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderlined, setIsUnderlined] = useState(false);
  const [textAlign, setTextAlign] = useState("left");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isHackerMode, setIsHackerMode] = useState(false);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleSave = () => {
    saveTextAsFile(text);
  };

  useEffect(() => {
    if (isDarkMode || isHackerMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkMode, isHackerMode]);

  // SEO Optimized
  useEffect(() => {
    if (isDarkMode) {
      document.title = "Typing Web App - Dark Mode";
    } else if (isHackerMode) {
      document.title = "Typing Web App - Hacker Mode";
    } else {
      document.title = "Typing Web App";
    }
  }, [isDarkMode, isHackerMode]);

  return (
    <div className={`app ${isHackerMode ? "hacker-mode" : ""}`}>
      <Helmet>
        <title>Typing Web App</title>
        <meta name="description" content="Interactive typing web app with multiple text styling options." />
      </Helmet>

      <div className="toolbar-container">
        <Toolbar
          fontSize={fontSize} 
          setFontSize={setFontSize}
          setFontFamily={setFontFamily}
          setTextColor={setTextColor}
          setIsDarkMode={setIsDarkMode}
          setIsHackerMode={setIsHackerMode}
          handleSave={handleSave}
          setIsBold={setIsBold}
          setIsItalic={setIsItalic}
          setIsUnderlined={setIsUnderlined}
          setTextAlign={setTextAlign}
        />
        <ThemeToggle setIsDarkMode={setIsDarkMode} setIsHackerMode={setIsHackerMode} />
      </div>

      <TextEditor
        text={text}
        fontSize={fontSize}
        fontFamily={fontFamily}
        textColor={textColor}
        isBold={isBold}
        isItalic={isItalic}
        isUnderlined={isUnderlined}
        textAlign={textAlign}
        onTextChange={handleTextChange}
      />

    </div>
  );
};

export default App;

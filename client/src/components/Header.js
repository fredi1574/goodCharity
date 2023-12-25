import React from "react";

import "./style/Header.css";
import { MdSunny, MdDarkMode } from "react-icons/md";

function Header() {
  const [darkMode, setDarkMode] = React.useState(false);

  const userName = "John Doe";

  // Function to toggle dark mode
  const handleThemeClick = () => {
    setDarkMode(!darkMode);
    console.log("Dark mode toggled");
  };

  return (
    <div className="header">
      <div className="userName">{userName}</div>
      <div className="logo">Good Charity</div>
      {darkMode ? (
        <MdDarkMode className="theme" onClick={handleThemeClick} />
      ) : (
        <MdSunny className="theme" onClick={handleThemeClick} />
      )}
    </div>
  );
}

export default Header;

import React from "react";
import "./Header.css";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";

const Header = () => {
  return (
    <header>
      <DeveloperModeIcon id="icono-header" />
      <h1>React Fetch</h1>
    </header>
  );
};

export default Header;

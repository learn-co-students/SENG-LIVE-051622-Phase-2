import React from "react";
import {NavLink} from 'react-router-dom'

const Header = ({ isDarkMode, onToggleDarkMode }) => {
  const buttonTextContent = isDarkMode ? "Light Mode" : "Dark Mode";

  return (
    <header>
      <nav>
        <h1 className="branding">
          <span className="logo">{"//"}</span>
          Project Showcase
        </h1>
        <div className="navigation">
          <NavLink exact className="button" to="/projects">
            All Projects
          </NavLink>
          <NavLink exact className="button" to="/projects/new">
            Add Project
          </NavLink>
          <button onClick={onToggleDarkMode}>{buttonTextContent}</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;

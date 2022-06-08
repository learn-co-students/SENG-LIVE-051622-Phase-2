import React from "react";
import { useState } from "react";

const Header = ({ isDarkMode, onUpdateDarkMode }) => {
  // console.log(props);
  // props is an object, and it only has key/value pairs when we pass props to a component

  // object destructuring

  // const { isDarkMode } = props;

  // const handleClick = () => onUpdateDarkMode();

  const buttonTextContent = isDarkMode ? "Dark Mode" : "Light Mode";

  return (
    <header>
      <h1>
        <span className="logo">{"//"}</span>
        Project Showcase
      </h1>
      <button onClick={onUpdateDarkMode}>{buttonTextContent}</button>
    </header>
  );
};

export default Header;

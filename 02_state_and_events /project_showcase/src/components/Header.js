import { useState } from "react";

const Header = () => {
  // array destructuring

  // useState returns an array of 2 elements: firrst one is or state variable, second element is the state setter function
  const [isDarkMode, setIsDarkMode] = useState(true);

  const handleClick = () => {
    // when our user clicks, we need to update isDarkMode to the opposite of itself

    // when we call our setter function, this causes a re-render
    setIsDarkMode(!isDarkMode);

    // parent/child component relationship, if props related to the state in the parent component are passed to the child component, the child componnt will also re-render upon the updated state event
  };

  console.log(isDarkMode)

  return (
    <header>
      <h1>
        <span className="logo">{"//"}</span>
        Project Showcase
      </h1>
      <button onClick={handleClick}>
        {isDarkMode ? "Dark Mode" : "Light Mode"}
      </button>
    </header>
  );
};

export default Header;

// inverse data flow


// 1. behavior happens in a child component 

// 2. changes need to occur outside of the scope of the child component

// how do we solve: inverse data. We lift our state up to the common component 

// parent component(common component): we add the state, we make sure to mutate state here (the setter function should only be called here by defining a callback function that will be passed into the child component when needed)

// child component will receive props inside of thsoe props will be 1. the state value, second argument is the callback function that was defined in the parent component to update the state


import { useState } from "react";

import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";

const App = () => {
  const [projects, setProjects] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const handleClick = () => {
    fetch("http://localhost:4000/projects")
      .then((res) => res.json())
      .then((projects) => setProjects(projects));
  };

  // create a callback function: inside of this callback function we are going to update the state that belongs to App

  const onUpdateDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={ isDarkMode ? "App" : "App light"}>
      <Header isDarkMode={isDarkMode} onUpdateDarkMode={onUpdateDarkMode}/>
      <ProjectForm />
      <button onClick={handleClick}>Load Projects</button>
      <ProjectList projects={projects} />
    </div>
  );
};

export default App;

import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";

const App = () => {
  const [projects, setProjects] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [count, setCount] = useState(0);

  console.log("component rendering");

  useEffect(() => {
    fetch("http://localhost:4000/projects")
      .then((resp) => resp.json())
      .then((projects) => setProjects(projects));
  }, []);

  useEffect(() => {
    console.log("side effect happening");

    return () => {
      console.log("clean up phase");
    };
  }, [count]);

  const onAddProject = (newProject) => {

    setProjects([...projects, newProject]);
  };

  const onToggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <div className={isDarkMode ? "App" : "App light"}>
      <Header isDarkMode={isDarkMode} onToggleDarkMode={onToggleDarkMode} />
      <ProjectForm onAddProject={onAddProject}/>
      <ProjectList projects={projects} />
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </div>
  );
};

export default App;

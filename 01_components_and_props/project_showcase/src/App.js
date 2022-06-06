// import vs export:

// export: we use this inside of the component file, and its purpose is to make the component accessible from within other files. Making the component public

// we use the import statement from within the file we want to use an external component to define that component to be used in that file

import React from "react";
import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import ProjectList from './components/ProjectList'
import ProjectListItem from "./components/ProjectListItem";

import projects from "./projects";


// Anything inside of JSX that is JS code needs to be wrapped in {}. Essentially anything that is not an element, or a string
const App = () => {

  // console.log(projects )
  return (
      <div className="App">
        <Header />
        <ProjectForm projects={projects}/>
        <ProjectList projects={projects}/>
      </div>
  );
};


export default App;

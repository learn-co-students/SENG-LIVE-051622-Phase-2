// to update:
// 1st after the form is submitted, we make a fetch request PATCH and update the resource on the server (for endpoint, need ID of the specific resource that is being edited)
// 2nd we need to update state in React component so that DOM manipulation occurs. IF the piece of state is an array then we wnat to .map to iterate over the array and find the object that was edited by comparing the original object(the element in the array we are iterating over) to the new object(the object that was just updated). Then update state using the state setter function

// to delete:
// 1st when the delete button is clicked, we need to send a fetch request DELETE and delete the item from the server (for endpoint, we want to specify the ID of the item being deleted)
// 2nd update the projects array inside the App component which is state so that it returns a new array WITHOUT the deleted item. Use filter to do this

// inverse data flow means sending some data from the child component to a parent component
// 1. create a function in the parent component that will eventually update the parents state
// 2. pass the function as a callback to the child component using props

import { useEffect, useState } from "react";

import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";
import ProjectEditForm from "./components/ProjectEditForm";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [projects, setProjects] = useState([]);
  const [projectId, setProjectId] = useState(null);

  useEffect(() => {
    fetch("http://localhost:4000/projects")
      .then((resp) => resp.json())
      .then((projects) => setProjects(projects));
  });

  const onToggleDarkMode = () => {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  };

  const onAddProject = (newProj) => {
    setProjects((projects) => [...projects, newProj]);
  };

  const completeEditing = () => {
    setProjectId(null);
  };

  const enterProjectEditModeFor = (projectId) => {
    setProjectId(projectId);
  };

  const onUpdateProject = (updatedProject) => {
    // need to go through the projects array, remove the original version of the project that was updated and include the new version
    // update the projects state with a new updated array of projects
    const updatedProjects = projects.map((ogProject) => {
      if (ogProject.id === updatedProject.id) {
        return updatedProject;
      } else {
        return ogProject;
      }
    });

    setProjects(updatedProjects);
  };

  const onDeleteProject = (projectId) => {
    // we need to create a new array with the project that was deleted removed

    const updatedProjects = projects.filter(
      (project) => project.id !== projectId
    );

    setProjects(updatedProjects);
  };

  const renderForm = () => {
    if (projectId) {
      return (
        <ProjectEditForm
          projectId={projectId}
          onUpdateProject={onUpdateProject}
          completeEditing={completeEditing}
        />
      );
    } else {
      return <ProjectForm onAddProject={onAddProject} />;
    }
  };

  return (
    <div className={isDarkMode ? "App" : "App light"}>
      <Header isDarkMode={isDarkMode} onToggleDarkMode={onToggleDarkMode} />
      {renderForm()}
      <ProjectList
        onDeleteProject={onDeleteProject}
        projects={projects}
        enterProjectEditModeFor={enterProjectEditModeFor}
      />
    </div>
  );
};

export default App;

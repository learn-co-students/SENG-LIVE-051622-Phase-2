import { Route } from "react-router-dom";

import ProjectList from "./ProjectList";
import ProjectDetail from "./ProjectDetail";

const ProjectPage = ({ projects }) => {
  return (
    <div>
      <Route path="/projects/:id">
        <ProjectDetail />
      </Route>
      <ProjectList projects={projects} />
    </div>
  );
};

export default ProjectPage;

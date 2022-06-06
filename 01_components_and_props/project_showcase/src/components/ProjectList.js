// we need to return ProjectListItem for every project inside the projects array
import ProjectListItem from "./ProjectListItem";

const ProjectList = ({ projects }) => {
  console.log(projects);

const projectListItems = projects.map((project) => (
    <ProjectListItem project={project} key={project.id}/>
));

  return <ul className="cards">{projectListItems}</ul>;
};

export default ProjectList;

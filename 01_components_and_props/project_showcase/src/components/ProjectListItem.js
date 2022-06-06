// purpose of this component is to render an individual component for each project

const ProjectListItem = ({ project }) => {
  // const { about, name, image, phase} = project;

  console.log(project);
  return (
    <li className="card">
      <figure className="image">
        <img src={project.image} alt={project.name} />
        <button className="claps">👏{0}</button>
      </figure>

      <section className="details">
        <h4>{project.name}</h4>
        <p>{project.about}</p>
        {project.link ? (
          <p>
            <a href={project.link}>Link</a>
          </p>
        ) : null}
      </section>

      <footer className="extra">
        <span className="badge blue">Phase {project.phase}</span>
      </footer>
    </li>
  );
};

export default ProjectListItem;

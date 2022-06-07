// first, import useState from the react library to define the useState hook from within this component 
import { useState } from 'react'
import ProjectListItem from "./ProjectListItem";

const ProjectList = ({ projects }) => {

  // second step, create some state 
  const [searchQuery, setSearchQuery] = useState("")

  const searchResults = projects.filter((project) => {
    return project.name.toLowerCase().includes(searchQuery.toLowerCase())
  })

  const projectListItems = searchResults.map((project) => (
    <ProjectListItem key={project.id} {...project}/>
  ));


  // we need to update the searchQuery every time our user types in the search input
  const handleSearch = (e) => {
    // how do I update searchQuery

    setSearchQuery(e.target.value)
  }

console.log(searchQuery)

  return (
    <section>
      <h2>Projects</h2>

      <div className="filter">
        <button>All</button>
        <button>Phase 5</button>
        <button>Phase 4</button>
        <button>Phase 3</button>
        <button>Phase 2</button>
        <button>Phase 1</button>
      </div>

      <input onChange={handleSearch} type="text" placeholder="Search..."/>

      <ul className="cards">{projectListItems}</ul>
    </section>
  );
};

export default ProjectList;

// props is an object with key values

// we can access the values of the keys using dot notation


// or we can destructure

const ProjectForm = ({ projects }) => {

// // object destructuring:
// const { projects } = props

console.log(projects) // props.projects
    return (
        <h1>Project Form</h1>
    )
}

export default ProjectForm
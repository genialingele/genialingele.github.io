import ProjectsGroup from "./ProjectsGroup";


function Projects() {

    return (
        <>

            <div className="projects" id="projectsPage">
                <h2>My Recent Projects </h2>
                <ProjectsGroup />
                <button>View More Projects</button>

            </div>

        </>

    );
}

export default Projects;
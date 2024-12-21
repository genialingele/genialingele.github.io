import ProjectsGroup from "./ProjectsGroup";


function Projects() {
    const handleClick = (e, link) => {
        e.preventDefault();
        window.open(link, "_blank");
    };

    return (
        <>

            <div className="projects" id="projectsPage">
                <h2>My Recent Projects </h2>
                <ProjectsGroup />
                <button onClick={(e) => handleClick(e,"https://github.com/genialingele") }>View More Projects</button>

            </div>

        </>

    );
}

export default Projects;
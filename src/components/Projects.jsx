import ProjectsGroup from "./ProjectsGroup";
import ProjectsMenu from "./ProjectsMenu";
 



function Projects() {


    return (
        <>

            <div className="projects">
                <h2>My Recent Projects </h2>
                <ProjectsMenu />
                <ProjectsGroup />

                <button>View More Projects</button>
 
            </div>


        </>

    );
}

export default Projects;
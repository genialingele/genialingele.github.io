import ProjectsGroup from "./ProjectsGroup";
import ProjectsMenu from "./ProjectsMenu";

//use map function 


function Projects() {


    return (
        <>

            <div className="projects">
                <h2>Projects </h2>
                <ProjectsMenu />
                <ProjectsGroup />

                <button>View More Projects</button>
                
            </div>


        </>



    );
}

export default Projects;
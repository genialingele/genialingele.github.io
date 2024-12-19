import ProjectCard from './ProjectCard';
import data from "../data.json"; 

//Try to use map, or any kinds of loops to organize things here

function ProjectsGroup(){
    return(
        <>
        <div className="projectsGroup" >

            {
                data.projects.map((project, id) => (
                    <ProjectCard key={id} projects={project} />
                )
            )
            }
        </div>
        
        
        </>
    );

}

export default ProjectsGroup;
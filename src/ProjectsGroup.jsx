import ProjectCard from './ProjectCard';

//Try to use map, or any kinds of loops to organize things here

function ProjectsGroup(){
    return(
        <>
        <div className="projectsGroup" >
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/> 
        </div>
        
        
        </>
    );

}

export default ProjectsGroup;
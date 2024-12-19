import  { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectLightBox from './ProjectLightBox';
import data from "../data.json"; 

function ProjectsGroup() {
    const [selectedProject, setSelectedProject] = useState(null);

    const handleClick = (project) => {
        setSelectedProject(project);
    };
    const handleClose = () => {
        setSelectedProject(null);
    };

    return (
        <>
            <div className="projectsGroup">
                {
                    data.projects.map((project, id) => (
                        <div key={id} onClick={() => handleClick(project)}>
                            <ProjectCard projects={project} />
                        </div>
                    ))
                }
            </div>
            
            {selectedProject && (
                <div className="lightboxOverlay" onClick={handleClose}>
                    <div className="lightboxContent" onClick={(e) => e.stopPropagation()}>
                        <ProjectLightBox project={selectedProject} />
                    </div>
                </div>
            )}
        </>
    );
}

export default ProjectsGroup;
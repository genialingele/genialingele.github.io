import { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectLightBox from "./ProjectLightBox";
import data from "../data.json";

function ProjectsGroup() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filterKeyword, setFilterKeyword] = useState("Featured"); // Default to "Featured"

  // Handle project selection
  const handleClick = (project) => {
    setSelectedProject(project);
  };

  // Handle closing the lightbox
  const handleClose = () => {
    setSelectedProject(null);
  };

  // Filter projects based on the filterKeyword
  const filteredProjects = data.projects.filter((project) =>
    filterKeyword
      ? project.category.includes(filterKeyword) // Check if the category includes the filterKeyword
      : true
  );

  return (
    <>
      {/* Filter Bar */}
      <div className="projectsMenu">
        <button
          className={filterKeyword === "" ? "active" : ""}
          onClick={() => setFilterKeyword("")}
        >
          All <span className="fa fa-sort"></span>
        </button>
        <button
          className={filterKeyword === "Featured" ? "active" : ""}
          onClick={() => setFilterKeyword("Featured")}
        >
          Featured <span className="fa fa-sort"></span>
        </button>
        <button
          className={filterKeyword === "Websites" ? "active" : ""}
          onClick={() => setFilterKeyword("Websites")}
        >
          Websites <span className="fa fa-sort"></span>
        </button>
        <button
          className={filterKeyword === "Utility" ? "active" : ""}
          onClick={() => setFilterKeyword("Utility")}
        >
          Utility <span className="fa fa-sort"></span>
        </button>
        <button
          className={filterKeyword === "Fullstack" ? "active" : ""}
          onClick={() => setFilterKeyword("Fullstack")}
        >
          Fullstack <span className="fa fa-sort"></span>
        </button>
        <button
          className={filterKeyword === "Games" ? "active" : ""}
          onClick={() => setFilterKeyword("Games")}
        >
          Games <span className="fa fa-sort"></span>
        </button>
      </div>

      {/* Projects Group */}
      <div className="projectsGroup">
        {filteredProjects.map((project, id) => (
          <div key={id} onClick={() => handleClick(project)}>
            <ProjectCard projects={project} />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedProject && (
        <div className="lightboxOverlay" onClick={handleClose}>
          <div className="lightboxContent" onClick={(e) => e.stopPropagation()}>
            <button className="closeButton" onClick={handleClose}>X</button>
            <ProjectLightBox project={selectedProject} />
          </div>
        </div>
      )}
    </>
  );
}

export default ProjectsGroup;

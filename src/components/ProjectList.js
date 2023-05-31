import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {

  const projectEx = projects.map((project) => {
    return (
      <ProjectItem name={project.name} key={project.id} about={project.about} technologies={project.technologies}/>
    )
  
  })
    return (
      <div id="projects">
        <h2>My Projects</h2>
        <div id="project-list">
          {projectEx}
        </div>
      </div>
    );

}

export default ProjectList;

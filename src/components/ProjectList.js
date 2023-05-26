import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  projects.map((projectObj) => {
    return <ProjectItem />
  })
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        <ProjectItem projects={projects}/>
      </div>
    </div>
  );
}

export default ProjectList;

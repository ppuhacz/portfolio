import React from "react";
import "./styles/projects-styles.scss";
// importing screenshots of projects
import ProjectItems from "./project-item";

const Projects = () => {
  return (
    <section id='projects'>
      <div className='projects-container'>
        <div className='projects-title'>
          <h4>PROJECTS</h4>
          <h3>Every project is a unique piece of development 💻</h3>
        </div>
        <ProjectItems />
      </div>
    </section>
  );
};

export default Projects;

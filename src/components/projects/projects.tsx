import React from "react";
import "./styles/projects-styles.scss";
import { useTranslation } from "react-i18next";
// importing screenshots of projects
import ProjectItems from "./project-item";

const Projects = () => {
  const { t } = useTranslation();
  return (
    <section id='projects'>
      <div className='projects-container'>
        <div className='projects-title'>
          <h3>{t("Projects.title")}</h3>
          <h2>{t("Projects.description")}</h2>
        </div>
        <ProjectItems />
      </div>
    </section>
  );
};

export default Projects;

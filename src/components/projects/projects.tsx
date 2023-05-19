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
          <h4>{t("Projects.title")}</h4>
          <h3>{t("Projects.description")}</h3>
        </div>
        <ProjectItems />
      </div>
    </section>
  );
};

export default Projects;

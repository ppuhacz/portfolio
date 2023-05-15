import React from "react";
import { projectList } from "./project-list";
import { motion } from "framer-motion";
import newWindow from "../../img/icons/redirect-new-window-icon.svg";
import githubIcon from "../../img/icons/github-icon-black.svg";

const ProjectItems = () => {
  const projectsMapped = projectList.map((project) => {
    const {
      title,
      demoLink,
      githubLink,
      screenshot,
      description,
      technologies,
    } = project;

    return (
      <div className='project-wrapper' key={`project-${title}`}>
        <div className='project-black-line'></div>
        <div className='project-info'>
          <motion.div
            className='project-vertical-line'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          />
          <motion.div
            className='project-info-description'
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className='project-info-photo'>
              <a href={demoLink} target='_blank' rel='noreferrer noopener'>
                <img
                  src={screenshot}
                  alt='Screenshot of tropicar landing page'
                  className='project-screenshot'
                  loading='lazy'
                />
              </a>
            </div>
            <div className='project-info-text'>
              <a href={demoLink} target='_blank' rel='noreferrer noopener'>
                <h3>{title.toLocaleUpperCase()}</h3>
              </a>
              <p>{description}</p>
              <h5>Technologies used:</h5>
              <ul className='project-technologies-list'>
                {technologies.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
              <span>
                <a
                  href={demoLink}
                  target='_blank'
                  rel='noreferrer noopener'
                  className='project-link'
                >
                  <img
                    src={newWindow}
                    alt='open project in new window'
                    height={20}
                  />
                  Live Demo
                </a>
                <a
                  href={githubLink}
                  target='_blank'
                  rel='noreferrer noopener'
                  className='project-link'
                >
                  <img src={githubIcon} height={20} alt='Github icon' />
                  Code
                </a>
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    );
  });
  return <div className='project-list-container'>{projectsMapped}</div>;
};

export default ProjectItems;

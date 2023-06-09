import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import TechStack from "../tech-stack/tech-stack";
import developerVector from "../../img/programmer-vector-600px.webp";
import githubIcon from "../../img/icons/github-icon-gradient.svg";
import linkedinIcon from "../../img/icons/linkedin-icon-gradient.svg";
import "./styles/title-styles.scss";

const Title = () => {
  const { t } = useTranslation();

  return (
    <section id='home'>
      <div className='title-container'>
        <motion.div
          className='title-wrapper'
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className='title-personal-info-wrapper'>
            <h1 className='gradient-text'>Patryk Puhacz</h1>
            <span>{t("Title.excerpt")}</span>
            <div className='social-media-wrapper'>
              <span>
                <a
                  href='https://www.github.com/ppuhacz'
                  title='github profile'
                  target='_blank'
                  rel='noreferrer'
                >
                  <img
                    src={githubIcon}
                    alt='github profile'
                    height='35'
                    width='35'
                  />
                </a>
              </span>
              <span>
                <a
                  href='https://www.linkedin.com/in/patryk-puhacz-5b5b7a1aa/'
                  title='linkedin profile'
                  target='_blank'
                  rel='noreferrer'
                >
                  <img
                    src={linkedinIcon}
                    alt='github profile'
                    height='35'
                    width='35'
                  />
                </a>
              </span>
            </div>
            <div className='tech-stack-container'>
              <TechStack />
            </div>
          </div>
          <div className='vector-wrapper'>
            <img
              src={developerVector}
              alt='developer vector'
              width='600'
              height='auto'
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Title;

import React from "react";
import { motion } from "framer-motion";
import TechStack from "../tech-stack/tech-stack";
import developerVector from "../../img/programmer-vector.webp";
import githubIcon from "../../img/icons/github-icon-gradient.svg";
import linkedinIcon from "../../img/icons/linkedin-icon-gradient.svg";
import "./styles/title-styles.scss";

const Title = () => {
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
            <span>
              Hi, I'm a self-taught, passionate React Front-end Developer based
              in Koszalin, Poland 🌊
            </span>
            <div className='social-media-wrapper'>
              <span>
                <a
                  href='https://www.github.com/ppuhacz'
                  title='github profile'
                  target='_blank'
                  rel='noreferrer'
                >
                  <img src={githubIcon} alt='github profile' height='35' />
                </a>
              </span>
              <span>
                <a
                  href='https://www.linkedin.com/'
                  title='linkedin profile'
                  target='_blank'
                  rel='noreferrer'
                >
                  <img src={linkedinIcon} alt='github profile' height='35' />
                </a>
              </span>
            </div>
            <div className='tech-stack-container'>
              <TechStack />
            </div>
          </div>
          <div className='vector-wrapper'>
            <img src={developerVector} alt='developer vector' width='600' />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Title;

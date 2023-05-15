import React from "react";
import newWindow from "../../img/icons/redirect-new-window-icon.svg";
import githubIcon from "../../img/icons/github-icon-black.svg";
import "./styles/projects-styles.scss";
import { motion } from "framer-motion";
// importing screenshots of projects
import TropicarScreenshot from "../../img/screenshots/tropicar-fullpage-screenshot.webp";
import onelyScreenshot from "../../img/screenshots/onely-fullpage-screenshot.webp";
import countryDataScreenshot from "../../img/screenshots/countrydata-fullpage-screenshot.webp";

const Projects = () => {
  return (
    <div className='projects-container'>
      <div className='projects-title'>
        <h4>Projects</h4>
        <h3>Every project is a unique piece of development 💻</h3>
      </div>
      <div className='project-list-container'>
        <div className='project-wrapper'>
          <div className='project-black-line'></div>
          <div className='project-info'>
            <motion.div
              className='project-vertical-line'
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.1 }}
            />
            <motion.div
              className='project-info-description'
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.1 }}
            >
              <div className='project-info-photo'>
                <a
                  href='https://tropicar.netlify.app/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <img
                    src={TropicarScreenshot}
                    alt='Screenshot of tropicar landing page'
                    className='project-screenshot'
                    loading='lazy'
                  />
                </a>
              </div>
              <div className='project-info-text'>
                <a
                  href='https://tropicar.netlify.app/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <h3>Tropicar</h3>
                </a>
                <p>
                  Tropicar is an exotic car rental service which lets you book
                  your dream car for any duration. Car offers are fetched from
                  the AirTable Base using the AirTable API. Website lets you
                  gain more info about any of the car, check the price lists of
                  each one of them and also lets you book it via the built-in
                  booking form that auto-calculates how much you have to pay and
                  validates if all inputs are valid.
                </p>
                <h5>Technologies used:</h5>
                <ul className='project-technologies-list'>
                  <li>React.js</li>
                  <li>TypeScript</li>
                  <li>Airtable</li>
                  <li>Sass</li>
                </ul>
                <span>
                  <a
                    href='https://tropicar.netlify.app/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <img
                      src={newWindow}
                      alt='open project in new window'
                      height={20}
                    />
                    Live Demo
                  </a>
                  <a
                    href='https://github.com/ppuhacz/tropicar'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <img src={githubIcon} height={20} alt='Github icon' />
                    Code
                  </a>
                </span>
              </div>
            </motion.div>
          </div>
        </div>
        <div className='project-wrapper'>
          <div className='project-black-line'></div>
          <div className='project-info'>
            <motion.div
              className='project-vertical-line'
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.1 }}
            />
            <motion.div
              className='project-info-description'
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.1 }}
            >
              <div className='project-info-photo'>
                <a
                  href='https://calm-parfait-2f27b9.netlify.app/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <img
                    src={onelyScreenshot}
                    alt='Screenshot of tropicar landing page'
                    className='project-screenshot'
                    loading='lazy'
                  />
                </a>
              </div>
              <div className='project-info-text'>
                <a
                  href='https://calm-parfait-2f27b9.netlify.app/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <h3>Onely blog</h3>
                </a>
                <p>
                  Onely blog is a clone site of{" "}
                  <a href='https://www.onely.com/blog/' className='inline-link'>
                    onely.com/blog
                  </a>{" "}
                  that was made for exercise purpose only. It is connected to
                  GraphQL CMS and uses rich text rendered to display formatted
                  blog posts. Website lets you display all posts that can be
                  searched via categories or authors. There is a page that that
                  displays all authors who are a part of the team, from where
                  you can access each author's profile page which includes a
                  short Q&A and display all posts written by chosen author.
                </p>
                <h5>Technologies used:</h5>
                <ul className='project-technologies-list'>
                  <li>React.js</li>
                  <li>TypeScript</li>
                  <li>GraphQL</li>
                  <li>Sass</li>
                </ul>
                <span>
                  <a
                    href='https://calm-parfait-2f27b9.netlify.app/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <img
                      src={newWindow}
                      alt='open project in new window'
                      height={20}
                    />
                    Live Demo
                  </a>
                  <a
                    href='https://github.com/ppuhacz/onely-blog-clone-typescript'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <img src={githubIcon} height={20} alt='Github icon' />
                    Code
                  </a>
                </span>
              </div>
            </motion.div>
          </div>
        </div>
        <div className='project-wrapper'>
          <div className='project-black-line'></div>
          <div className='project-info'>
            <motion.div
              className='project-vertical-line'
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.1 }}
            />
            <motion.div
              className='project-info-description'
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.1 }}
            >
              <div className='project-info-photo'>
                <a
                  href='https://voluble-dasik-379a8b.netlify.app/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <img
                    src={countryDataScreenshot}
                    alt='Screenshot of tropicar landing page'
                    className='project-screenshot'
                    loading='lazy'
                  />
                </a>
              </div>
              <div className='project-info-text'>
                <a
                  href='https://voluble-dasik-379a8b.netlify.app/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <h3>Country data</h3>
                </a>
                <p>
                  Country data is my first ever straight-forward React.js
                  project. It uses axios to fetch data from the world data API,
                  then iterates all of the countries that were fetched, handles
                  any errors and missing informations, then renders every
                  country, each in a separate block. There is also a simple
                  search function and a bar chart generated using given data and
                  ChartJS library.
                </p>
                <h5>Technologies used:</h5>
                <ul className='project-technologies-list'>
                  <li>React.js</li>
                  <li>Axios</li>
                  <li>CSS3</li>
                </ul>
                <span>
                  <a
                    href='https://voluble-dasik-379a8b.netlify.app/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <img
                      src={newWindow}
                      alt='open project in new window'
                      height={20}
                    />
                    Live Demo
                  </a>
                  <a
                    href='https://github.com/ppuhacz/country-data'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <img src={githubIcon} height={20} alt='Github icon' />
                    Code
                  </a>
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

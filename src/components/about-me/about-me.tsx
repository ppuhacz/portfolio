import React from "react";
import { motion } from "framer-motion";
import AboutMeImg from "../../img/about-me-img.webp";
import "./styles/about-me-styles.scss";

const AboutMe = () => {
  return (
    <section id='about-me'>
      <div className='about-me-container'>
        <motion.div
          className='about-me-wrapper'
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className='about-me-img'>
            <img src={AboutMeImg} alt='Laptop workspace' />
          </div>
          <div className='about-me-text-wrapper'>
            <div className='about-me-text'>
              <h4 className='gradient-text'>About me</h4>
              <h3>A passionate React Front-end developer</h3>
              <p>
                Hi, I'm Patryk, a self-taught React Front-end developer with a
                strong passion for creating exceptional user experiences. What
                started as a hobby has evolved into a dedicated pursuit of
                knowledge, as I continuously challenge myself to learn and grow.
                I thrive on the opportunity to work on projects that push me
                beyond my comfort zone, enabling me to expand my skill set and
                stay at the forefront of industry trends. With expertise in
                HTML5, CSS3, Sass, Typescript, React.js, and GraphQL, I am
                well-equipped to build visually appealing and interactive
                websites. My focus is not only on aesthetics but also on
                ensuring a smooth and responsive experience for users across
                different devices. I believe in the power of user-centric design
                and strive to create intuitive interfaces that enhance
                usability.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;

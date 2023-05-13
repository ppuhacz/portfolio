import React from "react";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <section id='about-me'>
      <motion.div
        className='about-me-container'
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className='about-me-wrapper'>
          <div className='lorem'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, nisi!
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutMe;

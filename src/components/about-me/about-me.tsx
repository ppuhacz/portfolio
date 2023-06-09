import React from "react";
import { motion } from "framer-motion";
import AboutMeImg from "../../img/about-me-img-resized.webp";
import "./styles/about-me-styles.scss";
import { useTranslation } from "react-i18next";

const AboutMe = () => {
  const { t } = useTranslation();

  return (
    <section id='about-me'>
      <div className='about-me-container'>
        <div className='about-me-wrapper'>
          <motion.div
            className='about-me-img'
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1 }}
          >
            <img
              src={AboutMeImg}
              alt='Laptop workspace'
              width='370'
              height='auto'
            />
          </motion.div>

          <div className='about-me-text-wrapper'>
            <motion.div
              className='about-me-text'
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.1 }}
            >
              <h3 className='gradient-text'>{t("AboutMe.aboutMe")}</h3>
              <h2>{t("AboutMe.excerpt")}</h2>
              <p>{t("AboutMe.description")}</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

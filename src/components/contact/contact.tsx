import React from "react";
import { motion } from "framer-motion";
import "./styles/contact-styles.scss";
import linkedinIcon from "../../img/icons/linked-in-icon-blue-nobg.svg";
import emailIcon from "../../img/icons/email-icon.svg";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  return (
    <section id='contact'>
      <div className='contact-container'>
        <div className='contact-wrapper'>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h4>{t("ContactMe.title")}</h4>
            <p className='contact-paragraph'>{t("ContactMe.excerpt")}</p>
          </motion.div>
          <div className='contact-forms'>
            <motion.div
              className='contact-form'
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <a
                href='https://www.linkedin.com/in/patryk-puhacz-5b5b7a1aa/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <img src={linkedinIcon} alt='linkedin profile' width={25} />
              </a>
              <div className='contact-form-description'>
                <a
                  href='https://www.linkedin.com/in/patryk-puhacz-5b5b7a1aa/'
                  className='linkedin-title-link'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <h5>Linkedin</h5>
                  <p>Patryk Puhacz</p>
                </a>
              </div>
            </motion.div>
            <motion.div
              className='contact-form'
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <a href='mailto:toppuhacz@gmail.com'>
                <img src={emailIcon} alt='email address' width={25} />
              </a>
              <div className='contact-form-description'>
                <h5>E-mail</h5>
                <p>
                  <a href='mailto:ppuhacz@gmail.com' className='send-email'>
                    ppuhacz@gmail.com
                  </a>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

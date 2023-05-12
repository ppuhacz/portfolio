import React from "react";
import "./styles/tech-stack-styles.scss";
import { motion } from "framer-motion";
// Importing icons
import htmlIcon from "../../img/logos/html5-logo.svg";
import cssIcon from "../../img/logos/css3-logo.svg";
import sassIcon from "../../img/logos/sass-logo.svg";
import javascriptIcon from "../../img/logos/javascript-logo.svg";
import reactIcon from "../../img/logos/react-logo.svg";
import graphqlIcon from "../../img/logos/graphql-logo.svg";

const TechStack = () => {
  const techStack = [
    {
      name: "HTML5",
      logo: htmlIcon,
    },
    {
      name: "CSS3",
      logo: cssIcon,
    },
    {
      name: "Sass/Scss",
      logo: sassIcon,
    },
    {
      name: "Javascript ES6",
      logo: javascriptIcon,
    },
    {
      name: "React.js",
      logo: reactIcon,
    },
    {
      name: "GraphQL",
      logo: graphqlIcon,
    },
  ];

  const techStackMapped = techStack.map(({ name, logo }) => {
    return (
      <li key={name} title={name}>
        <img src={logo} alt={`${name} logo`} height='40' />
      </li>
    );
  });

  return (
    <div className='tech-stack-wrapper'>
      <span className='techstack-separator'>
        <p>Techstack</p>
      </span>
      <motion.div
        className='tech-stack-wrapper'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <ul>{techStackMapped}</ul>
      </motion.div>
    </div>
  );
};

export default TechStack;

import React from "react";
import "./styles/tech-stack-styles.scss";
// Importing icons
import htmlIcon from "../../img/logos/html5-logo.svg";
import cssIcon from "../../img/logos/css3-logo.svg";
import sassIcon from "../../img/logos/sass-logo.svg";
import typeScriptIcon from "../../img/logos/typescript-logo.svg";
import reactIcon from "../../img/logos/react-logo.svg";
import graphqlIcon from "../../img/logos/graphql-logo.svg";

interface TechStackType {
  name: string;
  logo: string;
}

const TechStack = () => {
  const techStack: TechStackType[] = [
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
      name: "TypeScript",
      logo: typeScriptIcon,
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
        <img src={logo} alt={`${name} logo`} height='40' width='40' />
      </li>
    );
  });

  return (
    <div className='tech-stack-wrapper'>
      <span className='techstack-separator'>
        <p>Techstack</p>
      </span>
      <div className='tech-stack-wrapper'>
        <ul>{techStackMapped}</ul>
      </div>
    </div>
  );
};

export default TechStack;

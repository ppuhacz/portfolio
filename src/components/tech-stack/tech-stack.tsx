import React from "react";
import "./styles/tech-stack-styles.scss";

const TechStack = () => {
  const techStack = [
    {
      name: "HTML5",
      logo: "logo here",
    },
    {
      name: "CSS3",
      logo: "logo here",
    },
    {
      name: "Sass/Scss",
      logo: "logo here",
    },
    {
      name: "Javascript",
      logo: "logo here",
    },
    {
      name: "React.js",
      logo: "logo here",
    },
    {
      name: "GraphQL",
      logo: "logo here",
    },
  ];

  const techStackMapped = techStack.map(({ name, logo }) => {
    return <li key={name}>{name}</li>;
  });

  return (
    <div className='tech-stack-container'>
      <div className='tech-stack-wrapper'>
        <ul>{techStackMapped}</ul>
      </div>
    </div>
  );
};

export default TechStack;

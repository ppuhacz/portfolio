import React from "react";
import "./styles/cv-button-styles.scss";

const CVButton = () => {
  const CVLink: string =
    "https://drive.google.com/file/d/1hUDS3STqHinKQw7TMH8Q76LbmuoEMDvh/view?usp=sharing";

  return (
    <a href={CVLink} target='_blank' rel='noreferrer noopener'>
      <div className='cv-button-wrapper'>
        <div className='cv-button'>
          <h4>CV</h4>
        </div>
      </div>
    </a>
  );
};

export default CVButton;

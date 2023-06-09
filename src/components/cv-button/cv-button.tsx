import React from "react";
import "./styles/cv-button-styles.scss";

const CVButton = () => {
  const CVLink: string =
    "https://drive.google.com/file/d/1hUDS3STqHinKQw7TMH8Q76LbmuoEMDvh/view";

  return (
    <a href={CVLink} target='_blank' rel='noreferrer noopener'>
      <div className='cv-button-wrapper'>
        <div className='cv-button'>
          <h2>CV</h2>
        </div>
      </div>
    </a>
  );
};

export default CVButton;

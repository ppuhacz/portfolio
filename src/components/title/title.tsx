import React from "react";
import "./styles/title-styles.scss";
import developerVector from "../../img/programmer-vector.webp";

const Title = () => {
  return (
    <div className='title-container'>
      <div className='title-wrapper'>
        <div className='title-personal-info-wrapper'>
          <h1>Patryk Puhacz 👋🏻</h1>
          <span>
            Hi, I'm a self-taught passionate React Front-end Developer based in
            Koszalin, Poland 🌊
          </span>
          <div className='social-media-wrapper'>
            <span>
              <a href='https://www.github.com/ppuhacz' title='github account'>
                Github
              </a>
            </span>
          </div>
        </div>
        <div className='vector-wrapper'>
          <img src={developerVector} alt='developer vector' width='600' />
        </div>
      </div>
    </div>
  );
};

export default Title;

import React from "react";
import "./styles/header-styles.scss";
import logo from "../../img/logos/Patryk-Puhacz-logo.svg";
import useIsMobile from "../../hooks/is-mobile/is-mobile";

const Header = () => {
  const isMobile = useIsMobile();

  const listItems: JSX.Element = (
    <>
      <li>
        <a href='#home'>Home</a>
      </li>
      <li>
        <a href='#about-me'>About me</a>
      </li>
      <li>
        <a href='#projects'>Projects</a>
      </li>
      <li>
        <a href='#contact'>Contact</a>
      </li>
    </>
  );

  return (
    <header>
      <div className='header-container'>
        <div className='header-logo'>
          <a href='#home'>
            <img src={logo} alt='Patryk Puhacz' width='40' />
          </a>
        </div>
        <div className='header-navigation'>
          {!isMobile && <ul className='header-navigation-list'>{listItems}</ul>}
        </div>
      </div>
    </header>
  );
};

export default Header;

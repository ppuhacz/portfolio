import React from "react";
import "./styles/header-styles.scss";
import logo from "../../img/Patryk-Puhacz-logo.svg";
import useIsMobile from "../../hooks/is-mobile/is-mobile";

const Header = () => {
  const isMobile = useIsMobile();

  const listItems = (
    <>
      <li>
        <a href='#home'>Nav 1</a>
      </li>
      <li>
        <a href='#'>Nav 2</a>
      </li>
      <li>
        <a href='#'>Nav 3</a>
      </li>
      <li>
        <a href='#'>Nav 4</a>
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

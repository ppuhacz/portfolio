import React from "react";
import "./styles/header-styles.scss";
import logo from "../../img/Patryk-Puhacz-logo.svg";

const Header = () => {
  return (
    <header>
      <div className='header-container'>
        <div className='header-logo'>
          <img src={logo} alt='Patryk Puhacz' width='40' />
        </div>
        <div className='header-navigation'>
          <ul>
            <li>Nav 1</li>
            <li>Nav 2</li>
            <li>Nav 3</li>
            <li>Nav 4</li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;

import React, { useState, useEffect, ChangeEvent } from "react";
import { useTranslation } from "react-i18next";
import "./styles/header-styles.scss";
import logo from "../../img/logos/Patryk-Puhacz-logo.svg";
import useIsMobile from "../../hooks/is-mobile/is-mobile";
import burgerIcon from "../../img/icons/burger-icon.svg";
import closeIcon from "../../img/icons/close-icon.svg";

const Header = () => {
  const [isDropdownActive, setIsDropdownActive] = useState<boolean>(false);
  const isMobile = useIsMobile();
  const { i18n, t } = useTranslation();

  const handleLanguageChange = (e: ChangeEvent<{ value: unknown }>) => {
    const selectedLanguage = e.target.value as string;
    i18n.changeLanguage(selectedLanguage);
    localStorage.setItem("language", selectedLanguage);
  };

  useEffect(() => {
    const storedLanguage = localStorage.getItem("language");
    if (storedLanguage) {
      i18n.changeLanguage(storedLanguage);
    }
  }, [i18n]);

  const handleOnClick = () => {
    setIsDropdownActive(!isDropdownActive);
  };

  const listItems: JSX.Element = (
    <>
      <li>
        <a href='#home'>{t("Header.home")}</a>
      </li>
      <li>
        <a href='#about-me'>{t("Header.aboutMe")}</a>
      </li>
      <li>
        <a href='#projects'>{t("Header.projects")}</a>
      </li>
      <li>
        <a href='#contact'>{t("Header.contact")}</a>
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
          {!isMobile ? (
            <div className='header-navigation-list'>
              <ul>{listItems}</ul>
              <select value={i18n.language} onChange={handleLanguageChange}>
                <option value='en'>{t("Header.english")}</option>
                <option value='pl'>{t("Header.polish")}</option>
              </select>
            </div>
          ) : (
            <>
              <button
                className='header-navigation-burger'
                onClick={handleOnClick}
              >
                {!isDropdownActive ? (
                  <img
                    src={burgerIcon}
                    height={15}
                    width={15}
                    alt='open dropdown menu'
                  />
                ) : (
                  <img
                    src={closeIcon}
                    height={15}
                    width={15}
                    alt='close dropdown menu'
                  />
                )}
              </button>
              <div
                className={`header-navigation-dropdown ${
                  isDropdownActive ? "active" : "inactive"
                }`}
              >
                <div className='header-navigation-dropdown-list'>
                  <ul>{listItems}</ul>
                  <select value={i18n.language} onChange={handleLanguageChange}>
                    <option value='en'>{t("Header.english")}</option>
                    <option value='pl'>{t("Header.polish")}</option>
                  </select>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

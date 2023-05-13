import React from "react";
import "./App.scss";
import Title from "./components/title/title";
import Header from "./components/header/header";
import CVButton from "./components/cv-button/cv-button";
import AboutMe from "./components/about-me/about-me";

function App() {
  return (
    <div className='App'>
      <Header />
      <main>
        <Title />
        <AboutMe />
        <CVButton />
      </main>
    </div>
  );
}

export default App;

import React from "react";
import "./App.scss";
import Title from "./components/title/title";
import Header from "./components/header/header";
import CVButton from "./components/cv-button/cv-button";
import AboutMe from "./components/about-me/about-me";
import Projects from "./components/projects/projects";

function App() {
  return (
    <div className='App'>
      <Header />
      <CVButton />
      <main>
        <Title />
        <AboutMe />
        <Projects />
      </main>
    </div>
  );
}

export default App;

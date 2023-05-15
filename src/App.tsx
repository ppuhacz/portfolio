import React from "react";
import "./App.scss";
import Title from "./components/title/title";
import Header from "./components/header/header";
import CVButton from "./components/cv-button/cv-button";
import AboutMe from "./components/about-me/about-me";
import Projects from "./components/projects/projects";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className='App'>
      <Header />
      <CVButton />
      <main>
        <Title />
        <AboutMe />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

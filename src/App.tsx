import React from "react";
import "./App.scss";
import Title from "./components/title/title";
import TechStack from "./components/tech-stack/tech-stack";

function App() {
  return (
    <div className='App'>
      <Title />
      <TechStack />
    </div>
  );
}

export default App;

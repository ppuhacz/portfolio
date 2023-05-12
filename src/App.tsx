import React from "react";
import "./App.scss";
import Title from "./components/title/title";
import Header from "./components/header/header";

function App() {
  return (
    <div className='App'>
      <Header />
      <main>
        <Title />
      </main>
    </div>
  );
}

export default App;

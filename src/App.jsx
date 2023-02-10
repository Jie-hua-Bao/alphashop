import React from "react";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import "./style/css/reset.css";
import "./style/css/base.css";
import "./style/css/dark-theme.css";
import "./style/css/main.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;

import React from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
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

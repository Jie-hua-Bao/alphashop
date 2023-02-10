import React from "react";
import Header from "./components/header/Header";
import { ReactComponent as SvgSearchIcon } from "././icons/search.svg";


// 引入CSS
import "./style/css/reset.css";
import "./style/css/base.css";
import "./style/css/dark-theme.css";
import "./style/css/main.css";

function App() {
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;

import React from "react";
import ReactDOM from "react-dom";
import { BASE_SERIES_SEARCH } from "./config/config.js";
import Routes from "./router";

import "./styles.css";

function App() {
  return (
    <div>
      <Routes />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

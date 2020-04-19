import React from "react";
import ReactDOM from "react-dom";

import MainComponent from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <MainComponent />
  </React.StrictMode>,
  rootElement
);

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { HashRouter, BrowserRouter } from "react-router-dom";
const Router =
  process.env.NODE_ENV === "development" ? HashRouter : BrowserRouter;

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

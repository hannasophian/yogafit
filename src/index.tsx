import React from "react";
import ReactDOM from "react-dom";
// import App from "./pages/App";
import WebsiteRoutes from "./WebPages";

ReactDOM.render(
  <React.StrictMode>
    <WebsiteRoutes />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

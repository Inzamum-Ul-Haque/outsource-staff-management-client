import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import RoleBasedInfo from "./context/RoleProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RoleBasedInfo>
      <App />
    </RoleBasedInfo>
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import PlatformApp from "./PlatformApp";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/styles/app.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <PlatformApp />
    </BrowserRouter>
  </React.StrictMode>
);

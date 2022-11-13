import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router/Router";
import { RecoilRoot } from "recoil";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <RecoilRoot>
        <Router />
      </RecoilRoot>
    </BrowserRouter>
  </React.StrictMode>
);

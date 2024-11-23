import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

//npm install -D tailwindcss
//npx tailwindcss init
//npm i react-router-dom
//npm install @heroicons/react
//npm install react-simple-typewriter

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

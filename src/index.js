import React from "react";
import "./index.css";
import App from "./App";
import {BrowserRouter} from 'react-router-dom';
import { createRoot } from "react-dom/client";
import { makeServer } from "./server";

makeServer();

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);




// ReactDOM.render
root.render(
  <React.StrictMode>
    <BrowserRouter>

    {/* authContext */}
     <App />
    
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
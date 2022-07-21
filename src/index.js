import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ServerProvider } from "./context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ServerProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ServerProvider>
  </React.StrictMode>
);

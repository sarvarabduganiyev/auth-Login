import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { TokenStore } from "./context/tokenContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <TokenStore>
      <App />
    </TokenStore>
  </React.StrictMode>
);

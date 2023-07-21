import React from "react";
import ReactDOM from "react-dom/client";
// BrowseRouter -> Ref npm documentation
import { BrowserRouter } from 'react-router-dom'; // Correct the import statement
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();

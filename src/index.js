import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import RootContext from "./context";
import Root from "./root";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RootContext>
      <Root />
    </RootContext>
  </React.StrictMode>
);

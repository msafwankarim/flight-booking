import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import FlightContextProvider from "./store/FlightContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <FlightContextProvider>
    <App />
  </FlightContextProvider>
);

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App2 from "./App2";
import App from "./App";
import Friends from "./Friends";
// import UseEffect from "./UseEffect";
// import StateChange from "./StateChange";
// import UseStateAndHooks from "./UseStateAndHooks";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Friends />
    {/* <UseEffect /> */}
    {/* <UseStateAndHooks /> */}
    {/* <StateChange /> */}
    <App />
    <App2 />
  </React.StrictMode>
);

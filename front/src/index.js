import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./navbar";

function App(props) {
  return (
    <div>
      <Navbar></Navbar>
      Hello {props.name}! 
    </div>
  );
}

const target = document.getElementById("target");
ReactDOM.render(<App name={"React"}></App>, target);

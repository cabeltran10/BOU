import React from "react";
import ReactDOM from "react-dom";

function App(props) {
  return (
    <div>
      Hello {props.name}! 
    </div>
  );
}

const target = document.getElementById("target");
ReactDOM.render(<App name={"React"}></App>, target);

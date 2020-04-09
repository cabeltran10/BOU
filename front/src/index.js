import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./navbar";
import ListStore from "./ListStore";
import './index.css';

const shops = [
 {
   "id": "187623",
   "name": "Nike",
   "imageURL": "https://images.app.goo.gl/YX7fYfogdzPQcLjSA"
 },
 {
   "id": "12334",
   "name": "Zara",
   "handle": "richardkalehoff",
  "imageURL": "https://images.app.goo.gl/YX7fYfogdzPQcLjSA"
 },
 {
   "id": "34534",
   "name": "Tyler McGinnis",
   "handle": "tylermcginnis",
   "imageURL": "https://images.app.goo.gl/YX7fYfogdzPQcLjSA"
 }
];

function App(props) {
  return (
    <div>
      <Navbar />
  		<ListStore shops={shops} />
    </div>
  );
}

const target = document.getElementById("target");
ReactDOM.render(<App name={"React"}></App>, target);

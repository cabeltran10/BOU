import React, { useEffect } from "react";
import ListStore from "./ListStore";
// import PropTypes from 'prop-types';

// Home.propTypes = {};

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

function Home(props) {
  return (
    <div>
      {!props.user ? "User not logged" : `Welcome Back!${props.user.username}`}
      <ListStore shops={shops} />
    </div>
  );
}

export default Home;

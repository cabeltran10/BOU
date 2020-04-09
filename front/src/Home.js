import React, { useEffect } from "react";
import ListStore from "./ListStore";
import ShoppingCart from "./ShoppingCart";

import AddToCart from "./AddToCart";
// import PropTypes from 'prop-types';

// Home.propTypes = {};

const shops = [
  {
    id: "187623",
    name: "Nike",
    imageURL: "https://unsplash.com/photos/IHpUgFDn7zU",
  },
  {
    id: "12334",
    name: "Zara",
    handle: "richardkalehoff",
    imageURL: "https://images.app.goo.gl/YX7fYfogdzPQcLjSA",
  },
  {
    id: "34534",
    name: "Tyler McGinnis",
    handle: "tylermcginnis",
    imageURL: "https://images.app.goo.gl/YX7fYfogdzPQcLjSA",
  },
];

const products = [
  {
    id: "91823",
    name: "Karen Isgrigg",
    price: "400",
    imageURL: "http://localhost:5001/karen.jpg",
  },
  {
    id: "238470",
    name: "Richard Kalehoff",
    price: "400",
    imageURL: "http://localhost:5001/richard.jpg",
  },
  {
    id: "2037492",
    name: "Vestido negro",
    price: "400",
    imageURL: "http://localhost:5001/tyler.jpg",
  },
];

const item = {
  id: "91823",
  name: "Karen Isgrigg",
  price: "400",
  imageURL: "http://localhost:5001/karen.jpg",
  description: "Ropitalindanuevapahueler",
};

function Home(props) {

     let removeItem = (item) =>
    {
        this.setState((currentState) =>
         {
          products:currentState.items.filter((c) =>{
            return c.id!== item.id
          })
         } )
    }

  return (
    <div>
     <div className="container">
      {!props.user ? "User not logged" : `Welcome Back!${props.user.username}`}
      <ListStore shops={shops} />
      <ShoppingCart products={products} removeItem={removeItem} />
      <AddToCart item={item} />
    </div>
    </div>
  );
}

export default Home;

import React, { useState } from "react";
import ListStore from "./ListStore";

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
    quantity: 1,
  },
  {
    id: "238470",
    name: "Richard Kalehoff",
    price: "400",
    imageURL: "http://localhost:5001/richard.jpg",
    quantity: 1,
  },
  {
    id: "2037492",
    name: "Vestido negro",
    price: "400",
    imageURL: "http://localhost:5001/tyler.jpg",
    quantity: 1,
  },
];

function Home(props) {
  const [productsnew, setproducts] = useState(products);

  function quantitylist(list) {
    const newlist = {};
    list.forEach(
      (p) =>
        (newlist[p] = {
          name: p.name,
          price: p.price,
          id: p.id,
          imageURL: p.imageURL,
          quantity: 0,
        })
    );
    return newlist;
  }

  const remove = (itemId) => {
    const list = productsnew.filter((item) => item.id !== itemId);
    setproducts(list);
  };

  return (
    <div>
      {!props.user ? "" : `Welcome Back!${props.user.username}`}
      <ListStore shops={shops} />
    </div>
  );
}

export default Home;

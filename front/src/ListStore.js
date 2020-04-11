import React, { useState } from "react";
import { Link } from "react-router-dom";

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

function ListStore(props) {
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
      <h1>Selecciona la tienda</h1>
      <ul className="shop-list">
        {props.shops.map((shop) => (
          <li key={shop.id} className="card shop-list-item">
            <img className="card-img-top shop-avatar" src={shop.imageURL} />
            <div className="card-body shop-details">
              <h3 className="card-title">{shop.name} </h3>
              <Link to={`/${shop.id}`}>
                <button className="shop-go">Comprar</button>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListStore;

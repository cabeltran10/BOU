import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ListStore(props) {
  
  return (
    <div>
      <h1>Selecciona la tienda</h1>
      <ul className="shop-list">
        {props.shops.map((shop) => (
          <li key={shop._id} className="card shop-list-item">
            <img className="card-img-top shop-avatar" src={shop.imageURL} />
            <div className="card-body shop-details">
              <h3 className="card-title">{shop.name} </h3>
              <Link to={`/${shop._id}`}>
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

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

AddToCart.propTypes = {
  editCar: PropTypes.func.isRequired,
  car: PropTypes.object.isRequired,
};

function AddToCart(props) {
  const match = window.location.pathname.split("/");
  const [item, setItem] = useState({});
  useEffect(() => {
    fetchItem();
  }, []);
  const fetchItem = async () => {
    const url = `/shop/${match[1]}/item/${match[2]}`;
    console.log(url);
    const res = await fetch(url);
    const tempItem = await res.json();
    setItem(tempItem);
  };

  useEffect(() => {
    // renderCar();
  }, [props.car]);

  const addCar = () => {
    console.log("Intenta agreagar al carrito");
    let temp = props.car;
    console.log(temp);
    console.log("item", item);
    console.log("Item adentro" + item);
    temp.products.push(item);
    props.editCar(temp);
    console.log("Despues de agregar", props.car);
    setItem({});
    let but = document.querySelector(".shop-go");
    console.log(but);
    if(!item) but.setAttribute("disabled", "true");
  };

  return (
    <div className="container add-cart">
      <div className="card add">
        <div
          className="row align-items-start"
          style={{ backgroundImage: `url(${item.imageURL})` }}
        ></div>

        <div className="row">
          <div className="col-md">
            <div className="cart-body description">
              <h2 className="card-title">{item.name}</h2>
            </div>

            <div className="description">
              <p>{item.description}</p>
            </div>

            <div className="price-tag">
              <p>${item.price}</p>
            </div>
          </div>

          <div className="col-sm">
            <button className="shop-go" onClick={addCar}>
              Agregar
            </button>
          </div>
        </div>
      </div>
      <div className="row">
        <Link to={"/" + match[1]}>
          <button>Comprar Mas!</button>
        </Link>
      </div>
      <div className="row">
        <ul>
          {props.car.products.map((c) => (
            <li key={c.id}>{c.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AddToCart;

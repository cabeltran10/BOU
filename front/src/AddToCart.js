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

  const addCar = () => {
    console.log("Intenta agreagar al carrito");
    let temp = props.car;
    console.log(temp);
    console.log("item", item);
    console.log("Item adentro" + item);
    temp.products.push(item);
    props.editCar(temp);
    console.log("Despues de agregar", props.car);
    setItem({id: " ", name: "Agregado!", price: ""});
    let but = document.querySelector(".shop-go");
    console.log(but);
    if (!item) but.setAttribute("disabled", "true");
    console.log(item.imageURL);
  };

  const render = () => {
    console.log("cargando",item);
    return !item.id? (
      <div class="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    ) : (
      <div className="card add">
        <div className="row align-items-start">
          <img src={item.imageURL} />
        </div>

        <div className="row">
          <div className="col-md">
            <div className="cart-body description">
              <h2 className="card-title">{item.name}</h2>
            </div>

            <div className="description">
              <p>{item.description}</p>
            </div>

            <div className="price-tag">
              <p>{"$" + item.price}</p>
            </div>
          </div>

          <div className="col-sm">
            <button className="shop-go" onClick={addCar}>
              Agregar
            </button>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="container add-cart">
      {render()}
      <div className="row">
        <Link to={"/" + match[1]}>
          <button>Comprar Mas!</button>
        </Link>
        <Link to="/payment">
          <button>Pagar</button>
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

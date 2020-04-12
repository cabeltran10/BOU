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
    setItem({ id: " ", name: "Agregado!", price: "" });
    let but = document.querySelector(".shop-go");
    console.log(but);
    if (!item) but.setAttribute("disabled", "true");
    console.log(item.imageURL);
  };

  const render = () => {
    console.log("cargando", item);
    return !item.id ? (
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    ) : (
      <div className="card add">
        <div className="row align-items-start">
          <img src={item.imageURL} />
        </div>
        <div className="col-md-12">
          <div className="card add">
            <div className="card-head">
              <img
                className="card-img-top justify-content-center"
                alt="detalle prenda elegida"
                src="https://user-images.githubusercontent.com/26877363/79073801-254a4700-7cae-11ea-9c51-fe30bc8c16b5.jpg"
              ></img>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md">
                  <div className="card-body description">
                    <h2 className="card-title">{item.name}</h2>

                    <div className="description">
                      <p>{item.description}</p>
                    </div>

                    <div className="price-tag">
                      <p>{"$" + item.price}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-12">
                <button
                  className="shop-go justify-content-center"
                  onClick={addCar}
                >
                  Agregar
                </button>
              </div>
            </div>
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
          <button className="shop-goto">Volver</button>
        </Link>
        <Link to="/payment">
          <button>Pagar</button>
        </Link>
      </div>

      <div className="row justify-content-center">
        <button className="shop-go">Pagar</button>
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

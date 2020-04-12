import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";

ShoppingCart.propTypes = {
  editCar: PropTypes.func.isRequired,
  car: PropTypes.object.isRequired,
};

function ShoppingCart(props) {
  const butMinus = useRef();
  let getTotal = () => {
    let newTotal = 0;
    props.car.products.forEach((p) => (newTotal += p.price));
    setTotal(newTotal);
  };

  useEffect(() => {
    getTotal();
  }, []);

  useEffect(() => {}, []);

  const [total, setTotal] = useState(0);

  let addQuantity = (item) => {
    butMinus.current.removeAttribute("disabled");

    item.quantity = item.quantity + 1;
    let newCar = props.car;
    let products = newCar.products;
    for (let i = 0; i < products.length; i++) {
      if (item === products[i]) {
        newCar[i] = item;
        break;
      }
    }
    props.editCar(newCar);
    setTotal(total + item.price);
  };

  let minusQuantity = (item) => {
    if (item.quantity === 0) {
      butMinus.current.setAttribute("disabled", "true");
    } else {
      item.quantity = item.quantity - 1;
      let newCar = props.car;
      let products = newCar.products;
      for (let i = 0; i < products.length; i++) {
        if (item === products[i]) {
          newCar[i] = item;
          break;
        }
      }
      props.editCar(newCar);
      setTotal(total - item.price);
    }
  };

  let onClickremove = (item) => {
    setTotal(total - item.price * item.quantity);

    props.setCar(item.quantity + 1);
    props.onDelete(item.id);
  };

  return (
    <div>
      <h1>Resumen de productos</h1>

      <div className="card product-list">
        {props.car.products.map((item) => (
          <div key={item.id} className="product-list-item">
            <div className="item-image">
              <img
                src={item.imageURL}
                width={100}
                height={100}
                alt={item.name}
              />
            </div>

            <div className="item-details">
              <p className="item-name">{item.name}</p>
            </div>
            <div className="row" id="quantity">
              <button onClick={() => addQuantity(item)} className="item-add">
                +
              </button>

              <span>{item.quantity}</span>
              <button
                onClick={() => minusQuantity(item)}
                className="item-minus"
                ref={butMinus}
              >
                -
              </button>
              <button
                onClick={() => onClickremove(item)}
                className="item-remove"
              >
                Remove
              </button>
            </div>
            <p>${item.price}</p>
          </div>
        ))}
      </div>

      <div className="total">
        <h2>Total</h2>
        <p>${total}</p>
      </div>
    </div>
  );
}

export default ShoppingCart;

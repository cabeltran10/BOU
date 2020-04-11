import React, { useEffect, useState } from "react";

function AddToCart({ match }) {
  const [item, setItem] = useState({});
  useEffect(() => {
    fetchItem();
  }, []);

  const fetchItem = async () => {
    const url = `/shop/${match.params.id}/item/${match.params.productId}`;
		console.log(url);		
		const res = await fetch(url);
    const tempItem = await res.json();
    setItem(tempItem);
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
              <h2 className="card-title">
                {item.name}
              </h2>
            </div>

            <div className="description">
              <p>{item.description}</p>
            </div>

            <div className="price-tag">
              <p>${item.price}</p>
            </div>
          </div>

          <div className="col-sm">
            <button className="shop-go">Agregar</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddToCart;

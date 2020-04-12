import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ListStore(props) {
  
  return (
    <div>
        <div className="container">
    <div class="bg-gradient-primary">

  <div class="container">


    <div class="row justify-content-center">

      <div class="col-xl-10 col-lg-12 col-md-9">

        <div class="card o-hidden border-0 shadow-lg my-5">
          <div class="card-body p-0">
   
            <div class="row">
             <div class="col-lg-6 d-none d-lg-block bg-login-image" id="bg-login-image" > <img  alt="Prendas de vestir"></img></div>
             
             <div class="col-lg-6">
                <div class="p-5">
                  <div class="text-center">
                    <h1 class="h4 text-gray-900 mb-4">Inicie su sesión</h1>
                  </div>
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

      </div>
        </div>
          </div>
            </div>
              </div>
                </div>
                  </div>
                    </div>
                      </div>
                        </div>
  );
}

export default ListStore;

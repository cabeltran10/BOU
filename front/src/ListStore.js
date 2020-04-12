import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

ListStore.propTypes = {
  shops: PropTypes.object.isRequired,
  setShops: PropTypes.func.isRequired
};
function ListStore(props) {
  return (
    <div>
      <div className="container">
        <div className="bg-gradient-primary">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-10 col-lg-12 col-md-9">
                <div className="card o-hidden border-0 shadow-lg my-5">
                  <div className="card-body p-0">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="p-5">
                          <div className="text-center">
                            <h1 className="h4 text-gray-900 mb-4">
                              ¿En qué tienda estás?
                            </h1>
                          </div>

                          <ul className="shop-list">
                            {props.shops.map((shop) => (
                              <li
                                key={shop._id}
                                className="card shop-list-item"
                              >

                                <div className="card-body shop-details">
                                 <div className="row">
                      <div className="col-lg-12">
                        <div className="p-5">
                          <div className="text-center">
                            
                              <h3 className="card-title">{shop.name} </h3>
                           <div className="col-lg-12">
                                  <Link to={`/${shop._id}`}>
                                    <button className="shop-go">Comprar</button>
                                  </Link>
                                </div>
                          </div>
                                 
                                </div>
                                </div>
                                </div>
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

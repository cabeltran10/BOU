import React from "react";
import PropTypes from "prop-types";

FormPayment.propTypes = {
  user: PropTypes.object.isRequired
};

function FormPayment() {
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
                              Detalles de forma de pago
                            </h1>
                          </div>

                          <form method="POST" id="customer-form">
                            <span className="card-errors"></span>
                            <div className="form-group">
                              <label className="label-input">
                                Nombre del usuario de tarjeta
                              </label>
                              <input className="col-lg-12" type="text" />
                            </div>
                            <div className="form-group">
                              <label className="label-input">Email</label>
                              <input className="col-lg-12" type="text" />
                            </div>
                            <div className="form-group">
                              <label className="label-input">
                                Número de tarjeta de crédito
                              </label>
                              <input className="col-lg-12" type="text" />
                            </div>

                            <div className="form-group">
                              <label className="label-input">
                                Mes de expiración(MM)
                              </label>
                              <input type="text" />
                              <span className="label-input">
                                Año de expiración(AAAA)
                              </span>
                              <input type="text" />
                            </div>
                            <div className="form-group">
                              <label className="label-input">CVC</label>
                              <input type="text" size="4" />
                            </div>

                            <div className="row justify-content-center">
                              <button type="submit" className="shop-go">
                                ¡Pagar ahora!
                              </button>
                            </div>
                          </form>
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

export default FormPayment;

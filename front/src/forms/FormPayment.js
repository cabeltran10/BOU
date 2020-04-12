import React from "react";
import PropTypes from "prop-types";

FormPayment.propTypes = {
  user: PropTypes.object.isRequired,
  car: PropTypes.object.isRequired,
};
function FormPayment(props) {
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

                          <form method="POST" id="customer-form" action={"/pago/"+props.car.shop}>
                            <span className="card-errors"></span>
                            <div className="form-group">
                              <label className="label-input" htmlFor="name">
                                Nombre del usuario de tarjeta
                              </label>
                              <input
                                className="col-lg-12"
                                type="text"
                                name="name"
                              />
                            </div>
                            <div className="form-group">
                              <label className="label-input" htmlFor="email">
                                Email
                              </label>
                              <input
                                className="col-lg-12"
                                type="text"
                                name="email"
                              />
                            </div>
                            <div className="form-group">
                              <label
                                className="label-input"
                                htmlFor="credit_card_number"
                              >
                                Número de tarjeta de crédito
                              </label>
                              <input
                                className="col-lg-12"
                                type="text"
                                name="credit_card_number"
                              />
                            </div>

                            <div className="form-group">
                              <label
                                className="label-input"
                                htmlFor="credit_card_expiration_month"
                              >
                                Mes de expiración(MM)
                              </label>
                              <input
                                type="text"
                                name="credit_card_expiration_month"
                              />
                              <span
                                className="label-input"
                                htmlFor="credit_card_expiration_year"
                              >
                                Año de expiración(AAAA)
                              </span>
                              <input
                                type="text"
                                name="credit_card_expiration_year"
                              />
                            </div>
                            <div className="form-group">
                              <label
                                className="label-input"
                                htmlFor="credit_card_cvc"
                              >
                                CVC
                              </label>
                              <input
                                type="text"
                                size="4"
                                name="credit_card_cvc"
                              />
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

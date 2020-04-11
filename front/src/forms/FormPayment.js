import React, { useEffect } from "react";

function FormPayment(props) {
  return (
    <div>
      <form method="POST" id="customer-form">
        <span className="card-errors"></span>
        <div className="form-group">
          <label>Nombre del usuario de tarjeta</label>
          <input type="text" />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="text" />
        </div>
        <div className="form-group">
          <label>Número de tarjeta de crédito</label>
          <input type="text" />
        </div>
        <div className="form-group">
          <label>CVC</label>
          <input type="text" size="4" />
        </div>
        <div className="form-group">
          <label>Mes de expiración(MM)</label>
          <input type="text" />
          <span>Año de expiración(AAAA)</span>
          <input type="text" />
        </div>
        <button type="submit">¡Pagar ahora!</button>
      </form>
    </div>
  );
}

export default FormPayment;

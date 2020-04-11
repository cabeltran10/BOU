import React, { useState } from "react";
import QrReader from "react-qr-reader";

function FormPayment(props) {
  const [qr, setQr] = useState({});
  const [camera, setCamera] = useState(false);

  const handleError = (err) => {
    console.log(err);
  };

  const handleScan = (data) => {
    console.log(data);
    if (data) {
      setQr({
        result: data,
      });
    }
  };

  const cameraQR = () => {

    return (
      <div>
        <QrReader
          delay={300}
          onError={handleError}
          onScan={handleScan}
          style={{ width: "30%" }}
        />
      </div>
    );
  };

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
      <div>
        <button onClick={() => setCamera(!camera)}>Leer QR</button>
        {!camera? <div></div>: cameraQR()}
      </div>
    </div>
  );
}

export default FormPayment;

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

     <div className="container">
    <div class="bg-gradient-primary">

    <div class="container">


      <div class="row justify-content-center">

        <div class="col-xl-10 col-lg-12 col-md-9">

          <div class="card o-hidden border-0 shadow-lg my-5">
            <div class="card-body p-0">
     
              <div class="row">
             
               <div class="col-lg-12">
                  <div class="p-5">
                    <div class="text-center">
                      <h1 class="h4 text-gray-900 mb-4">Detalles de forma de pago</h1>
                    </div>

      <form method="POST" id="customer-form">
        <span className="card-errors"></span>
        <div className="form-group">
          <label className="label-input">Nombre del usuario de tarjeta</label>
          <input className="col-lg-12" type="text" />
        </div>
        <div className="form-group">
          <label className="label-input">Email</label>
          <input className="col-lg-12" type="text" />
        </div>
        <div className="form-group">
          <label className="label-input">Número de tarjeta de crédito</label>
          <input className="col-lg-12" type="text" />
        </div>
     
        <div className="form-group">
          <label className="label-input">Mes de expiración(MM)</label>
          <input type="text" />
          <span className="label-input" >Año de expiración(AAAA)</span>
          <input type="text" />
        </div>
           <div className="form-group">
          <label className="label-input">CVC</label>
          <input type="text" size="4" />
        </div>

        <div className="row justify-content-center">
        <button type="submit" className="shop-go">¡Pagar ahora!</button>
        </div>

      </form>
      <div>
        <button onClick={() => setCamera(!camera)}>Leer QR</button>
        {!camera ? <div></div> : cameraQR()}
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
    </div>
  );
}

export default FormPayment;

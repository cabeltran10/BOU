import React, { useState } from "react";
import QrReader from "react-qr-reader";



function Scan(props){

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
        <button className="shop-go" onClick={() => setCamera(!camera)}>Escanear QR</button>
        {!camera? <div></div>: cameraQR()}
      </div>
    </div>
  );
}

  export default Scan;
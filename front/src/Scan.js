import React, { useState } from "react";
import QrReader from "react-qr-reader";
import { Link } from "react-router-dom";
function Scan() {
  const [url, setUrl] = useState("");
  const handleError = (err) => {
    console.log(err);
  };
  const handleScan = async (productId) => {
    const match = window.location.pathname.split("/");
    console.log(productId);
    console.log(match);
    let url = `/${match[1]}/${productId}`;
    console.log(url);
    if (productId) {
      setUrl(url);
    }
  };

  return (
    <div>
      {!url ? "Escanea!" : <Link to={url}>Ir al detalle del producto</Link>}

      <QrReader
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ width: "30%" }}
      />
    </div>
  );
}

export default Scan;

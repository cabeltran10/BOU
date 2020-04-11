import React, { useState } from "react";
import QrReader from "react-qr-reader";

function Scan({match}) {
  const handleError = (err) => {
    console.log(err);
  };
  let bool = false;
  const handleScan = (productId) => {
    console.log(productId);
    console.log(match);
    if (!bool) fetch(`/${match.params.name}/${productId}`);
    bool = true;
  };

  return (
    <div className="container">
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

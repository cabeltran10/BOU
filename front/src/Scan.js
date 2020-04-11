import React from "react";
import QrReader from "react-qr-reader";

function Scan({ match }) {
  const handleError = (err) => {
    console.log(err);
  };
  let bool = false;
  const handleScan = (productId) => {
    console.log(productId);
    console.log(match);
    let url = `/${match.params.name}/${productId}`;
    console.log(url);
    if (productId && !bool) {
      fetch(url);
      bool = true;
    }
  };

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
}

export default Scan;

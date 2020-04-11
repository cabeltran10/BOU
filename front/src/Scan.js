import React from "react";
import QrReader from "react-qr-reader";

function Scan({ match }) {
  const handleError = (err) => {
    console.log(err);
  };
  const handleScan = async (productId) => {
    console.log(productId);
    console.log(match);
    let url = `/${match.params.id}/${productId}`;
    console.log(url);
    if (productId) {
      alert(url);
      window.location.href = url;
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

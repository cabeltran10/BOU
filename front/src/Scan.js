import React, { useState } from "react";
import QrReader from "react-qr-reader";

function Scan(props) {
  const handleError = (err) => {
    console.log(err);
  };
  let bool = false;
  const handleScan = (data) => {
    console.log(data);
    if (!bool) fetch(`/Nike/${data}`);
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

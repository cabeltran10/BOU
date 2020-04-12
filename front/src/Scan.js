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
      <div className="container container-scan">
      <div className="row justify-content-center">
      <div className="col-xl-10 col-lg-12 col-md-9">

                    <div className="row">
   
      <div className="col-lg-12 justify-content-center">
        {!url ?    <div className="col-lg-12">
                        <div className="p-5">
                          <div className="text-center">
                            <h1 className="h4 text-gray-900 mb-4">
                             Acerque el QR del producto
                            </h1>
                          </div> </div></div> : <div className="col-lg-12">
                        <div className="p-5">
                          <div className="text-center">
                           <Link to={url}><button className="shop-goto">Ver producto</button></Link>
                          </div> </div></div> }
        </div>
        </div>


    <div className="row">

  <div className=" col-lg-12 justify-content-center">
          <QrReader
          delay={300}
          onError={handleError}
          onScan={handleScan}
          style={{ width: "50%" }}
        />

   
      </div>
 </div>
 </div>

        </div>
          </div>
            </div>
    );
  }

  export default Scan;

import React, { useEffect } from "react";

function Logout(props) {
  fetch("/logout");
  console.log(props);

  useEffect(() => {
    props.setUser(null);
  });
  return <div><h2>¡Gracias por visitarnos!</h2></div>;
}

export default Logout;

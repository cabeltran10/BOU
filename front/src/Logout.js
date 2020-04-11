import React, { useEffect } from "react";

function Logout(props) {
  fetch("/logout");
  console.log(props);

  useEffect(() => {
    props.setUser(null);
  });
  return <div>Thank you for visiting us!</div>;
}

export default Logout;

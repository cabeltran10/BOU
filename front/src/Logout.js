import React, { useEffect } from "react";
import PropTypes from "prop-types";

Logout.propTypes = {
  user: PropTypes.object.isRequired,
  setUser: PropTypes.func.isRequired,
};
function Logout(props) {
  fetch("/logout");
  console.log(props);

  useEffect(() => {
    props.setUser(null);
  });
  return (
    <div>
      <h2>¡Gracias por visitarnos!</h2>
    </div>
  );
}

export default Logout;

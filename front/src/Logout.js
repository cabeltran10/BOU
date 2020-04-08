import React, { useEffect } from "react";
// import PropTypes from 'prop-types';

// Logout.propTypes = {

// };

function Logout(props) {
  fetch("/logout");
  console.log(props);

  useEffect(() => {
    props.setUser(null);
  });
  return <div>Thank you for visiting us!</div>;
}

export default Logout;

import React, {useEffect} from 'react';
// import PropTypes from 'prop-types';

// Logout.propTypes = {
  
// };

function Logout(props) {
  useEffect( () => {
    fetchLogout();
  });

  const fetchLogout = () => {
    fetch("/logout");
  }
  return (
    <div>
      Thank you for visiting us!
    </div>
  );
}

export default Logout;
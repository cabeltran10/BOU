import React, {useEffect} from "react";
import { Link } from "react-router-dom";
// import PropTypes from "prop-types";

// Navbar.propTypes = {};

function Navbar(props) {
  
  
  useEffect(() => {
    fetch("/getUser")
      .then((res) => res.json())
      .then((user) => props.setUser(user));
  }, []);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav m-2">
            <Link to="/">
              <li className="nav-item">Home</li>
            </Link>
            {!props.user? 
            <Link to="/login">
              <li className="nav-item">Iniciar Sesion</li>
            </Link> : <li className="nav-item">{props.user.username}</li>}
            
            <Link to="logout">
              <li className="nav-item">Cerrar Sesion</li>
            </Link>
            <Link>
              <li className="nav-item">Registrarse</li>
            </Link>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

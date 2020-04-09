import React from "react";
import PropTypes from "prop-types";
import logo from './bou.svg';
import user from './user.svg';
import cart from './cart.svg';
import { Link } from "react-router-dom";

Navbar.propTypes = {};




function Navbar(props) {
  return (
    <div>
  

      <nav className="navbar navbar-expand-lg">
        <a className="navbar-brand" href="#" >
          B O U
        </a>

        <ul className="navbar-nav m-2">
          <Link to="/">
            <li className="nav-item">Home</li>
          </Link>

            <li className="nav-item" style={{backgroundImage: 'url('+cart+')'}}>
              <a className="nav-link" href="#" >
              </a>
            </li>

          {!props.user ? (
            <Link to="/login">
              <li className="nav-item"  style={{backgroundImage: 'url('+user+')'}}></li>
            </Link>
          ) : (
            <li className="nav-item">{props.user.username}</li>
          )}

          <Link to="/logout">
            <li className="nav-item">Cerrar Sesion</li>
          </Link>
          <Link to="/register">
            <li className="nav-item">Registrarse</li>
          </Link>
        </ul>

      </nav>
    </div>
  );
}

export default Navbar;

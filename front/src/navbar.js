import React from "react";
import PropTypes from "prop-types";
import logo from './bou.svg';
import user from './user.svg';
import cart from './cart.png';
import logout from './logout.png';
import { Link } from "react-router-dom";

Navbar.propTypes = {};




function Navbar(props) {
  return (
    <div>
  

      <nav className="navbar navbar-expand-lg">
        <a className="navbar-brand" href="/" style={{backgroundImage: 'url('+logo+')'}}>
        </a>

        <ul className="navbar-nav ml-auto">
          <Link to="/">
            <li className="nav-item"></li>
          </Link>

            <li className="nav-item-cart"  style={{backgroundImage: 'url('+cart+')'}} >
              <a className="nav-cart" href="#" >
              Carro
              </a>
            </li>

          {!props.user ? (
            <Link to="/login">
              <li className="nav-item"><img src={user}/> Entrar</li>
            </Link>
          ) : (
            <li className="nav-item">{props.user.username}</li>
          )}

          <Link to="/logout">
            <li className="nav-item" style={{backgroundImage: 'url('+logout+')'}}></li>
          </Link>
          <Link to="/register">
            <li className="nav-item">Registrate</li>
          </Link>
        </ul>

      </nav>
    </div>
  );
}

export default Navbar;

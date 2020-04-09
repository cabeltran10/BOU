import React from "react";
import PropTypes from "prop-types";
import logo from './bou.svg';
import user from './user.svg';
import cart from './cart.svg';

Navbar.propTypes = {};

function Navbar(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <a className="navbar-brand" href="#" >
          B O U
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">

            <li className="nav-item" style={{backgroundImage: 'url('+cart+')'}}>
              <a className="nav-link" href="#" >
              </a>
            </li>
            <li className="nav-item" >
              <a className="nav-link" href="/login.html" style={{backgroundImage: 'url('+user+')'}}>
                
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

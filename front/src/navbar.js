import React from "react";
// import PropTypes from "prop-types";

import logo from "./bou.svg";
import user from "./user.svg";
import cart from "./cart.png";
import logout from "./logout.png";
import { Link } from "react-router-dom";

// Navbar.propTypes = {};

function Navbar(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <Link
          to="/"
          className="navbar-brand"
          href="/"
          style={{ backgroundImage: "url(" + logo + ")" }}
        ></Link>
        <div className="navbar-nav">
          <a className="nav-item">
            <img src={cart} width="40" height="40" />
          </a>

          {!props.user ? (
            <Link to="/login">
              <img src={user} width="40" height="40" />
            </Link>
          ) : (
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {props.user.username}
            </a>
          )}
          <div
            className="dropdown-menu"
            aria-labelledby="navbarDropdownMenuLink"
          >
            <Link className="dropdown-item" to="/logout">
              <img src={logout} width="20" height="20" />
            </Link>

            <Link className="dropdown-item" to="/register">
              Registrarse
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";
// import PropTypes from "prop-types";

// FormLogin.propTypes = {};

function FormLogin(props) {
  return (
    <div>
      <form method="POST" action="/login">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            className="form-control"
            type="text"
            name="username"
            id="username"
          />
        </div>
        <div className="form_group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            className="form-control"
          />
        </div>
        {/* <Link to="/"> */}
        <button type="submit">Submit</button>
        {/* </Link> */}
      </form>
    </div>
  );
}

export default FormLogin;

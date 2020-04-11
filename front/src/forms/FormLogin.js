import React from "react";
import { Link } from "react-router-dom";
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
            required
          />
        </div>
        <div className="form_group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            className="form-control"
            required
          />
        </div>
        <Link to="/register">
          Registrarse
        </Link>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FormLogin;

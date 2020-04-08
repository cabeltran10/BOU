import React, {useEffect}from "react";
// import PropTypes from "prop-types";

// FormLogin.propTypes = {};

function FormLogin(props) {

  const fetching = async (e) => {
    fetch("/login", { method: "POST" });
  };

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
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FormLogin;

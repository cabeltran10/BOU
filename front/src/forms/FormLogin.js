import React, { useEffect } from "react";
// import PropTypes from "prop-types";

// FormLogin.propTypes = {};

function FormLogin(props) {
  const login = () => {
    props.setMessage("Loading");
  };

  const renderNotLogged = () => {
    if (props.message !== "Loading") return;
    return (
      <div style={{ WebkitTextFillColor: "red" }}>
        Contraseña o Usuario incorrecto
      </div>
    );
  };
  return (
    <div>
      {renderNotLogged()}
      <form method="POST" action="/login" onSubmit={login}>
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
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FormLogin;

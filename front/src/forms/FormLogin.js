import React from "react";

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
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FormLogin;

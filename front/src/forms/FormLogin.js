import React from "react";
import { Link } from "react-router-dom";
function FormLogin(props) {
  return (
    <div>
      <h2>Inicia sesión</h2>
      <form method="POST" action="/login">
        <div className="form-group">
          <label htmlFor="username">Nombre de usuario</label>
          <input
            className="form-control"
            type="text"
            name="username"
            id="username"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            name="password"
            id="password"
            className="form-control"
            required
          />
        </div>
      </form>
      <button type="submit" className="shop-go">
        Entrar
      </button>

      <div>
        <Link to="/register">¿No eres un miembro? Registrate</Link>
      </div>
    </div>
  );
}

export default FormLogin;

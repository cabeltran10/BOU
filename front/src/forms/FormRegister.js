import React from "react";

function FormRegister(props) {

  const fetching = async (e) =>{
    e.preventDefault();
    fetch("/register");
  }

  return (
    <div className="col-6">
      <h1>Register</h1>
      <form method="POST" onSubmit={fetching}>
        <div className="form-group">
          <label htmlFor="username_register">Username</label>
          <input
            className="form-control"
            type="text"
            name="usernameRegister"
            id="usernameRegister"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password_register">Password</label>
          <input
            type="password"
            name="passwordRegister"
            id="passwordRegister"
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password2_register">Repeat Password</label>
          <input
            type="password"
            name="password2Register"
            id="password2Register"
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Nombre Completo</label>
          <input
            type="text"
            name="nameRegister"
            id="nameRegister"
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone_register" className="primary">
            Celular
          </label>
          <input
            type="number"
            name="phoneRegister"
            id="phoneRegister"
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email_register">Correo</label>
          <input
            type="email"
            name="emailRegister"
            id="emailRegister"
            className="form-control"
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FormRegister;

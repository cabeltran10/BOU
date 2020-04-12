import React from "react";
import { Link } from "react-router-dom";

function FormLogin(props) {
  return (
    <div className="container">
    <div class="bg-gradient-primary">

  <div class="container">


    <div class="row justify-content-center">

      <div class="col-xl-10 col-lg-12 col-md-9">

        <div class="card o-hidden border-0 shadow-lg my-5">
          <div class="card-body p-0">
   
            <div class="row">
             <div class="col-lg-6 d-none d-lg-block bg-login-image" id="bg-login-image" > <img width="450" height="600" src="https://user-images.githubusercontent.com/26877363/79059180-9ea95180-7c3c-11ea-9408-02121b258842.jpg" alt="Prendas de vestir"></img></div>
             
             <div class="col-lg-6">
                <div class="p-5">
                  <div class="text-center">
                    <h1 class="h4 text-gray-900 mb-4">Inicie su sesión</h1>
                  </div>
       
           <form method="POST" action="/login">
           <div className="form-group">
          <label className="label-input" htmlFor="username">Nombre de usuario</label>
          <input
            className="form-control"
            type="text"
            name="username"
            id="username"
            required
          />
        </div>
        <div className="form-group">
          <label className="label-input" htmlFor="password">Contraseña</label>
          <input
            type="password"
            name="password"
            id="password"
            className="form-control"
            required
          />
        </div>

      </form>
       <button type="submit" className="shop-go">Entrar</button>

      <div>
        <Link className="label-input" to="/register">
          ¿No eres un miembro? Registrate
        </Link>
       
      </div>

      </div>
</div>
</div>
</div>
</div>
</div>
</div>
    </div>

    </div>
    </div>
  );
}

export default FormLogin;

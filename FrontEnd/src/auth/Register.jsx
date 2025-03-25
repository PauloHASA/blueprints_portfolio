import React from "react";
import images from "../assets/ImageRouter";

function Register() {

  return(
    <div className="default-auth-page">
      <div className="flex-center-col central-container-RegisterPage ">
        <h1>Cadastre-se como</h1>
        <section>

          <div className="container-register">
            <header>
              <img src={images.icons.client} alt="" />
            </header>
            <div className="flex-on"></div>
            <footer>
              <h4>Cliente</h4>
            </footer>
          </div>

          <div className="container-register">
            <header>
              <img src={images.icons.profissional} alt="" />
            </header>
            <div className="flex-on"></div>
            <footer>
              <h4>Profissional</h4>
            </footer>
          </div>

          <div className="container-register">
            <header>
              <img src={images.icons.empresa} alt="" />
            </header>
            <div className="flex-on"></div>
            <footer>
              <h4>Empresa</h4>
            </footer>
          </div>

          <div className="container-register">
            <header>
              <img src={images.icons.construtora} alt="" />
            </header>
            <div className="flex-on"></div>
            <footer>
              <h4>Construtora</h4>
            </footer>
          </div>

        </section>
      </div>
    </div>
  );
}

export default Register;
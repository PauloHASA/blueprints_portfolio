import React from 'react';
import images from '../assets/ImageRouter';

import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();

  const handleToClient = () => {
    navigate('/register/client');
  };

  const handleToCompany = () => {
    navigate('/register/company');
  };

  const handleToConstruction = () => {
    navigate('/register/construction');
  };

  const handleToProfessional = () => {
    navigate('/register/profissional');
  };

  return (
    <div className="default-auth-page">
      <div className="flex-center-col central-container-RegisterPage ">
        <h1>Cadastre-se como</h1>

        <section>
          <div className="container-register" onClick={handleToClient}>
            <header>
              <img src={images.icons.client} alt="" />
            </header>
            <div className="flex-on"></div>
            <footer>
              <h4>Cliente</h4>
            </footer>
          </div>

          <div className="container-register" onClick={handleToProfessional}>
            <header>
              <img src={images.icons.profissional} alt="" />
            </header>
            <div className="flex-on"></div>
            <footer>
              <h4>Profissional</h4>
            </footer>
          </div>

          <div className="container-register" onClick={handleToCompany}>
            <header>
              <img src={images.icons.empresa} alt="" />
            </header>
            <div className="flex-on"></div>
            <footer>
              <h4>Empresa</h4>
            </footer>
          </div>

          <div className="container-register" onClick={handleToConstruction}>
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

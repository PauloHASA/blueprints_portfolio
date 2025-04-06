import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import images from '../assets/ImageRouter';
import '../style/auth/RegisterProfessional.css';

function RegisterProfessional() {
  const navigate = useNavigate();

  const handleBackRegister = () => {
    navigate('/register');
  };

  return (
    <div className="registerCompany-page relative">
      <header
        onClick={handleBackRegister}
        className="absolute header-absolute-global"
      >
        <img src={images.icons.ArrowLeft} alt="" />
      </header>
      <div className="central-container-registerCompany">
        <header>
          <h1>Cadastre-se</h1>
          <h2>
            Se junte ao nosso clube e mostre seus produtos para nossa comunidade
            de clientes e profissionais.
          </h2>
        </header>
        <div className="row">
          <div className="col">
            <div className="input-form-field">
              <h3>Nome </h3>
              <input
                type="text"
                name=""
                id=""
                className="default-input focus-input"
                placeholder="Nome social"
              />
            </div>
            <div className="input-form-field">
              <h3>E-mail </h3>
              <input
                type="text"
                name=""
                id=""
                className="default-input focus-input"
                placeholder="empresa@email.com"
              />
            </div>
            <div className="input-form-field">
              <h3>Produto </h3>
              <input
                type="text"
                name=""
                id=""
                className="default-input focus-input"
                placeholder=""
              />
            </div>
            <div className="input-form-field">
              <h3>Senha </h3>
              <input
                type="text"
                name=""
                id=""
                className="default-input focus-input"
                placeholder="*****************"
              />
            </div>
          </div>
          <div className="col">
            <div className="input-form-field" style={{ marginTop: '200px' }}>
              <h3>Site</h3>
              <input
                type="text"
                name=""
                id=""
                className="default-input focus-input"
                placeholder="www.company.com"
              />
            </div>
            <div className="input-form-field">
              <h3>Confirmar senha</h3>
              <input
                type="text"
                name=""
                id=""
                className="default-input focus-input"
                placeholder="*****************"
              />
            </div>
          </div>
        </div>

        <footer>
          <button className="default-btn focus-input">Cadastrar</button>
        </footer>
      </div>
    </div>
  );
}

export default RegisterProfessional;

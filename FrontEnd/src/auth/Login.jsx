import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import images from '../assets/ImageRouter';
import '../style/auth/Login.css';

function Login() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
  };
  return (
    <div className="formLogin-container relative">
      <div className="absolute header-page">
        <a onClick={handleBack}>
          <img src={images.icons.ArrowLeft} alt="" />
        </a>
      </div>
      <div className="central-container">
        <header>
          <h1>Login</h1>
        </header>
        <h2>Email</h2>
        <input
          type="text"
          name="login-form"
          id=""
          placeholder="janedoe@email.com"
        />
        <h2>Senha</h2>
        <input
          type="password"
          name="login-form"
          id=""
          placeholder="*****************"
        />
        <a href="http://">Esqueceu sua senha?</a>
        <button type="submit" className="btn-login">
          Entrar
        </button>
      </div>
    </div>
  );
}

export default Login;

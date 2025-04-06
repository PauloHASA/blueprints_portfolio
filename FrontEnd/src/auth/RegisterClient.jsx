import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/auth/RegisterClient.css';
import images from '../assets/ImageRouter';

function RegisterClient() {
  const navigate = useNavigate();

  const handleBackRegister = () => {
    navigate('/register');
  };

  return (
    <div className="registerClient-page relative">
      <header
        onClick={handleBackRegister}
        className="absolute header-absolute-global"
      >
        <img src={images.icons.ArrowLeft} alt="" />
      </header>
      <div className="central-container-registerClient">
        <header>
          <h1>Cadastre-se</h1>
          <h2>
            Se junte ao nosso clube e tenha acesso ao melhores profissionais
            para o seu projeto.
          </h2>
        </header>

        <h3>Nome</h3>
        <input
          type="text"
          placeholder="Nome completo"
          className="default-input focus-input"
        />
        <h3>E-mail</h3>
        <input
          type="text"
          placeholder="janedoe@email.com "
          className="default-input focus-input"
        />
        <h3>Profissão</h3>
        <input
          type="text"
          placeholder="Defina sua profissão"
          className="default-input focus-input"
        />
        <h3>Senha</h3>
        <input
          type="password"
          placeholder="*****************"
          className="default-input focus-input"
        />
        <h3>Confirmar senha</h3>
        <input
          type="password"
          placeholder="*****************"
          className="default-input focus-input"
        />
        <button className="default-btn btn-RegisterClient">Cadastrar</button>
      </div>
    </div>
  );
}

export default RegisterClient;

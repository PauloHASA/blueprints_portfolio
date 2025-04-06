import React from 'react';

import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import { Outlet } from 'react-router-dom';

import '../style/layout/MainLayout.css';

function MainLayout() {
  const [theme, setTheme] = useState('light');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  const navigateToRegister = () => {
    navigate('/register');
  };

  const navigateToLogin = () => {
    navigate('/login');
  };

  document.body.className = theme;

  return (
    <>
      <header className="row justify-content-between header-MainLayout">
        <div className="col-2">Logo</div>
        <div className="col-4">
          {isAuthenticated === false ? (
            <div className="btn-login">
              <button className="login-btn" onClick={navigateToLogin}>
                Login
              </button>
              <button className="register-btn" onClick={navigateToRegister}>
                Cadastre-se
              </button>
            </div>
          ) : (
            <div className="user-navogation">
              <button className="home">Home</button>
              <button className="campaigns">Campanhas</button>
              <button className="userProfile">
                <i className="bi bi-person-fill"></i>
              </button>
            </div>
          )}

          <button onClick={toggleTheme} className="btnMode">
            {theme === 'light' ? (
              <div className="darkMode">
                <i className="bi bi-moon-stars"></i>
              </div>
            ) : (
              <div className="lightMode">
                <i className="bi bi-sun"></i>
              </div>
            )}
          </button>
        </div>
      </header>
      <main className="main-MainLayout">
        <Outlet />
      </main>
    </>
  );
}

export default MainLayout;

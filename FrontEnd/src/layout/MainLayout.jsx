import React from "react";

import { useState, useEffect, useRef } from "react";
import { Outlet } from "react-router-dom";

import '../style/layout/MainLayout.css';

function MainLayout() {
  const [theme, setTheme] = useState('dark');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  document.body.className = theme;

  return(
    <>
    <header className="row justify-content-between header-MainLayout">
        <div className="col-2">
          Logo
        </div>
        <div className="col-4">

          {isAuthenticated === false ? 
            <div className="btn-login">
              
              <button className="login-btn">
                Login
              </button>
              <button className="register-btn">
                Cadastre-se
              </button>

            </div>
            :
            <div className="user-navogation">

              <button className="home">
                Home
              </button>
              <button className="campaigns">
                Campanhas
              </button>
              <button className="userProfile">
                <i className="bi bi-person-fill"></i>
              </button>

            </div>
          }

          
          <button
            onClick={toggleTheme}
            className="btnMode"
          >
            {theme === 'light' ?
              <div className="darkMode">
                <i className="bi bi-moon-stars"></i>
              </div>
            : 
              <div className="lightMode">
                <i className="bi bi-sun"></i>
              </div>
            }
          </button>

        </div>

    </header>
    <main>

      <Outlet />
    </main>
    </>
  );
}

export default MainLayout;
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import Login from './auth/Login';
import Register from './auth/Register';

import RegisterClient from './auth/RegisterClient';
import RegisterCompany from './auth/RegisterCompany';
import RegisterConstruction from './auth/RegisterConstruction ';
import RegisterProfessional from './auth/RegisterPro';

import LandingPage from './components/LandingPage';

import MainLayout from './layout/MainLayout';

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />

          <Route path="/register" element={<Register />} />
          <Route path="/register/client" element={<RegisterClient />} />
          <Route path="/register/company" element={<RegisterCompany />} />
          <Route
            path="/register/construction"
            element={<RegisterConstruction />}
          />
          <Route
            path="/register/profissional"
            element={<RegisterProfessional />}
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

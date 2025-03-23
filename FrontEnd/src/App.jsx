import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Login from './auth/Login';
import Register from './auth/Register';

import MainLayout from './layout/MainLayout';

import './App.css'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/login" element={ <Login />} />
        <Route path="/register" element={ <Register />} />
        <Route path='/' element={<MainLayout />}>
          
        </Route>
      </Routes>
    </Router>
  )
}

export default App

import React from 'react';
import './navbar.css'; 
import { Link } from 'react-router-dom';
import LogoImage from "../assets/Solum.png";

/*
MANDAR A HOME AUTOMATICO PAUL SE ENCARGA
Calculadora poner padding derecho al cuadro de texto
Soil agregar css un hover
*/
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
        <Link to="/home">
            <img src={LogoImage} alt="Solum Logo" className="logo-image" />
          </Link>
        </div>
        <ul className="nav-links">
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/Soil">Soil</Link></li>
          <li><Link to="/Recomendaciones">Recommendations</Link></li>
          <li><Link to="/Resources">Resources</Link></li>
          <li><Link to="/Calculadora">Calculator</Link></li>
          <li><Link to="Test" className="start-button">Start inmediately</Link></li>          
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;


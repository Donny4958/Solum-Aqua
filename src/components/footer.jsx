import React from 'react';
import LogoImage from "../assets/Solum.png"
import { Link } from 'react-router-dom';
import './footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2024 Solum Aqua. All rights reserved.</p>
      <p>
        <Link to="/AboutUs">ABOUT US</Link>
      </p>
    </footer>
  );
};

export default Footer;

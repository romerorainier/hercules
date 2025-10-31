import React from 'react';
import { FaFacebook, FaYoutube, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <div className="text-center mb-4">
          <h3>BOSS</h3>
        </div>
        <div className="social-icons mb-4">
          <a href="#" className="text-white mx-2">{React.createElement(FaFacebook)}</a>
          <a href="#" className="text-white mx-2">{React.createElement(FaYoutube)}</a>
          <a href="#" className="text-white mx-2">{React.createElement(FaTwitter)}</a>
          <a href="#" className="text-white mx-2">{React.createElement(FaInstagram)}</a>
        </div>
        <div className="text-center">
          <p>Copyright 2025 BOSS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
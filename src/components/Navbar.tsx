import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav>
      <a className="logo" href="#">
        <img src="/asset/img/hifoodvert.png" alt="Hifood Capital" className="logo-img" />
      </a>
      <ul className="nav-links">
        <li><a href="#process">Studio</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#about">About</a></li>
      </ul>
      <a href="#contact" className="nav-cta">Build with Us</a>
    </nav>
  );
};

export default Navbar;

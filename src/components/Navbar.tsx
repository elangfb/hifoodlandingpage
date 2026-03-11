import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav>
      <a className="logo" href="#">
        <div className="logo-icon">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M3 14 Q9 3 15 14" stroke="white" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
            <circle cx="9" cy="11" r="2" fill="white"/>
          </svg>
        </div>
        <span className="logo-text">hifood<span>capital</span></span>
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

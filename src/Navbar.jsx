import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollValue = document.documentElement.scrollTop;
      setShowNavbar(scrollValue > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg ${showNavbar ? 'scrolled' : ''}`}>
      <div className="container-fluid">
        <span className="navbar-brand">
          <span className="welcome-text">Welcome</span>
        </span>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to='/' className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to='/about' className="nav-link">About</Link>
            </li>
            <li className="nav-item">
              <Link to='/contact' className="nav-link" id='con'>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

// Navbar.jsx

import React from "react";
import "../Page Styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-links">
        <button>ABOUT ME</button>
        <button>PROJECTS</button>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-button"
        >
          RESUME
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
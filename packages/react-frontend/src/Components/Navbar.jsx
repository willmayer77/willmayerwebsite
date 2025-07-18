// Navbar.jsx

import React from "react";
import "../Page Styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-links">
        <button>ABOUT ME</button>
        <button>PROJECTS</button>
        <button>RESUME</button>
      </div>
    </nav>
  );
};

export default Navbar;
import React from "react";

const Navbar = ({ toggleMobileMenu, isMobileMenuOpen, scrollToSection }) => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <h2 className="nav-logo">John Doe</h2>
        <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className={`nav-menu ${isMobileMenuOpen ? "nav-menu-open" : ""}`}>
          <li>
            <button onClick={() => scrollToSection("home")}>Home</button>
          </li>
          <li>
            <button onClick={() => scrollToSection("about")}>About</button>
          </li>
          <li>
            <button onClick={() => scrollToSection("skills")}>Skills</button>
          </li>
          <li>
            <button onClick={() => scrollToSection("projects")}>
              Projects
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection("experience")}>
              Experience
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection("contact")}>Contact</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

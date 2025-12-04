import React, { useState } from "react";
import "./index.css";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav className="navbar">
      <div className="container">
        {/* Logo – scroll to top/home */}
        <a
          href="#home"
          className="logo-brand"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("home");
            setIsMenuOpen(false);
          }}
        >
          <span className="logo-desktop">IG</span>
          <img
            src="/IsaacHeadshot.JPG"
            alt="Isaac"
            className="logo-mobile"
          />
        </a>

        {/* Hamburger for mobile */}
        <button
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>

        {/* Nav Links */}
        <div className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <a
            href="#about"
            className="nav-link-custom"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("about");
              setIsMenuOpen(false);
            }}
          >
            About
          </a>

          <a
            href="#projects"
            className="nav-link-custom"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("projects");
              setIsMenuOpen(false);
            }}
          >
            Projects
          </a>

          <a
            href="#resume"
            className="nav-link-custom"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("resume");
              setIsMenuOpen(false);
            }}
          >
            Resume
          </a>

          <a
            href="#contact"
            className="nav-link-custom"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("contact");
              setIsMenuOpen(false);
            }}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

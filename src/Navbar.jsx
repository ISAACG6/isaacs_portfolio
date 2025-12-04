import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./index.css";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navLinkClass = ({ isActive }) =>
    `nav-link-custom ${isActive ? "nav-link-active" : ""}`;

  const handlePortfolioClick = (e) => {
    e.preventDefault();
    setIsMenuOpen(false);

    navigate("/", { state: { scrollToProjects: true } });
  };

  return (
    <nav className="navbar">
      <div className="container d-flex align-items-center justify-content-between">
        <NavLink
          to="/"
          className="logo-brand d-flex align-items-center gap-2 text-light"
          onClick={() => setIsMenuOpen(false)}
        >
          <span className="logo-desktop">IG</span>
          <img src="/IsaacHeadshot.JPG" alt="Isaac" className="logo-mobile" />
        </NavLink>

        <button
          className="menu-toggle fs-3 border-0 bg-transparent d-lg-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>

        <div
          className={`nav-links d-lg-flex gap-4 ${isMenuOpen ? "active" : ""}`}
        >
          <NavLink
            to="/"
            className={navLinkClass}
            onClick={handlePortfolioClick}
          >
            Portfolio
          </NavLink>

          <NavLink
            to="/about"
            className={navLinkClass}
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </NavLink>

          <NavLink
            to="/resume"
            className={navLinkClass}
            onClick={() => setIsMenuOpen(false)}
          >
            Resume
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

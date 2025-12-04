import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
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
    <Navbar expand="lg" className="styled-navbar sticky-top" expanded={isMenuOpen} onToggle={setIsMenuOpen}>
      <Container>
        <Navbar.Brand 
          as={NavLink} 
          to="/" 
          className="logo-brand d-flex align-items-center gap-2"
          onClick={() => setIsMenuOpen(false)}
        >
          <span className="logo">IG</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-nav" className="navbar-toggler">
          ☰
        </Navbar.Toggle>

        <Navbar.Collapse id="main-nav">
          <Nav className="ms-auto">
            <div className="nav-link-wrapper">
              <NavLink 
                to="/" 
                className={navLinkClass}
                onClick={handlePortfolioClick}
                end
              >
                Portfolio
              </NavLink>
            </div>

            <div className="nav-link-wrapper">
              <NavLink 
                to="/about" 
                className={navLinkClass}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </NavLink>
            </div>

            <div className="nav-link-wrapper">
              <NavLink 
                to="/resume" 
                className={navLinkClass}
                onClick={() => setIsMenuOpen(false)}
              >
                Resume
              </NavLink>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

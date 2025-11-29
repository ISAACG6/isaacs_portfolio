import React from 'react';
import { useState } from 'react';
import './index.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Header () {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div>
        
            {/* Navigation Bar */}
            <nav className="navbar">
                <div className="container">
                    <a href="#home" className="logo-brand">W</a>
                    
                    <button 
                        className="menu-toggle"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        ☰
                    </button>
                    
                    <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                        <a href="#projects" className="nav-link-custom active-link">Projects</a>
                        <a href="#about" className="nav-link-custom">About</a>
                        <a href="#resume" className="nav-link-custom">Resume</a>
                    </div>
                </div>
            </nav>

            {/* Hero Banner Section */}
            <div className="hero-banner-modern">
                <div className="container hero-content">
                    <div className="row">
                        {/* Left Side - Text Content */}
                        <div className="col-left">
                            <div className="text-overlay">
                                <h1 className="hero-title">
                                    Hi, I'm <span className="name-highlight">Isaac</span>.
                                </h1>
                                <p className="hero-subtitle">
                                    I'm a Minnesota-based UX designer who enjoys discovering & 
                                    crafting thoughtful solutions to complex challenges.
                                </p>
                            </div>
                        </div>
                        
                        {/* Right Side - Profile Image */}
                        <div className="col-right">
                            <div className="profile-image-container">
                                <div className="green-accent-bar"></div>
                                <img 
                                    src="/IsaacHeadshot.JPG" 
                                    alt="Profile"
                                    className="profile-image-large"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
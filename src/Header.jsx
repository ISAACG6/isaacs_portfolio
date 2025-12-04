import React from 'react';
import { useState } from 'react';
import './index.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Header() {
  

  return (
    <div>
      {/* Hero Banner Section */}
      <div id="home">
      <div className="hero-banner-modern">
        <div className="container hero-content">
          <div className="row">
            {/* Left Side - Text Content */}
            <div className="col-left">
              <div className="text-overlay">
                <h1 className="hero-title">
                  Hi, I'm <span className="name-highlight">Isaac</span>
                </h1>
                <p className="hero-subtitle">
                  I'm an Informatics student at the University of Washington and an aspiring
                  product developer with a passion for creating impactful and informed solutions
                  through data and research. If you have any opportunities or inquiries, I would
                  love to connect!
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
    </div>
  );
}
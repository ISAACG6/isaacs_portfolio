import React from 'react';
import './index.css';

export default function Header() {
  return (
    <div id="home" className="hero-section">
      <div className="hero-container">
        {/* Text Content */}
        <div className="hero-text">
          <h1 className="hero-heading">
            Hi, I'm <span className="hero-name">Isaac</span>
          </h1>
          <p className="hero-description">
            I'm an Informatics student at the University of Washington and an aspiring
            product developer with a passion for creating impactful and informed solutions
            through data and research. If you have any opportunities or inquiries, I would
            love to connect!
          </p>
        </div>

        {/* Profile Image */}
        <div className="hero-image">
          <div className="image-wrapper">
            <img
              src="/IsaacHeadshot.JPG"
              alt="Isaac - Informatics Student"
              className="profile-photo"
            />
            <div className="accent-border"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
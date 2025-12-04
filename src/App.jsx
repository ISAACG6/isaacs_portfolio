import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Navigation from "./Navbar";
import Footer from "./Footer";
import HeaderPortfolio from "./headerportfolio.jsx";
import Resume from "./Resume";
import About from "./About";
import ScrollToProjects from "./ScrollToProjects.jsx";

function App() {
  return (
    <div className="app-container">
      {/* Navbar */}
      <Navigation />

      {/* Main content */}
      <div className="layout">
        <ScrollToProjects />
        <Routes>
          <Route path="/" element={<HeaderPortfolio />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/about" element={<About />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;


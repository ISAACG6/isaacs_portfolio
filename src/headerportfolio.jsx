import React from "react";
import Header from "./Header";
import './index.css';
import Portfolio from "./portfolio";

export default function HeaderPortfolio() {
  return (
    <>
      <Header />  {/* hero shown on first load */}
      <section id="projects-start">
        <Portfolio />
      </section>
    </>
  );
}
// src/components/Hero.js
import React from 'react';
import './Hero.css';

function Hero() {
  const scrollToProjects = () => {
    const section = document.getElementById("projects");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };
 
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1 className="intro-text">Hi, I'm <span className="gradient-text">Mathurakshi Mahendrarajah</span></h1>
        <p className="hero-subtitle">
  Designing end-to-end machine learning pipelines from data preprocessing to deployment
</p>
        <div className="animated-titles">
          <span>AI / ML Engineer — Internship Focus</span>
          <span>Buit &amp; Deployed ML Models</span>
          <span>Data -&gt; Model -&gt; Deployment</span>
        </div>

        <div className="hero-buttons">
          <button className="btn-primary" onClick={scrollToProjects}>View My Projects</button>
          <a className="btn-outline" href="/Mathurakshi Mahendrarajah.pdf" target="_blank" rel="noopener noreferrer" download>
  Download CV
</a>

        </div>

      </div>
    </section>
  );
}

export default Hero;

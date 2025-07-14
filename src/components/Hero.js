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
        
        <div className="animated-titles">
          <span>Computer Engineering Undergraduate</span>
          <span>AI/ML Enthusiast</span>
          <span>Passionate Blog Writer</span>
        </div>

        <div className="hero-buttons">
          <button className="btn-primary" onClick={scrollToProjects}>View My Work</button>
          <a className="btn-outline" href="/Mathurakshi Mahendrarajah.pdf" target="_blank" rel="noopener noreferrer" download>
  Download CV
</a>

        </div>

      </div>
    </section>
  );
}

export default Hero;

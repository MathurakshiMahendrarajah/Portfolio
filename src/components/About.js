// src/components/About.js
import React, { useEffect, useRef } from 'react';
import './About.css';
import profileImage from '../assets/profile.png'; // Adjust path if needed

function About() { 
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          sectionRef.current.classList.add('animate');
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="about" id="about" ref={sectionRef}>
      <h2 className="about-title">About Me</h2>
      <div className="about-grid">
        <div className="about-image">
          <img src={profileImage} alt="Profile" />
        </div>
        <div className="about-description">
          <p>
  Computer Engineering undergraduate specializing in applied AI and machine
  learning. Experienced in building end-to-end ML pipelines—from data
  preprocessing and model training to deployment as real-world applications.
</p>
<ul className="about-highlights">
  <li>Implemented regression and classification pipelines with feature engineering and evaluation</li>
<li>Developed CNN-based models for image understanding tasks</li>
<li>Performed parameter-efficient LLM fine-tuning using LoRA</li>
<li>Optimized models using validation metrics and error analysis</li>
<li>Deployed trained models into usable web-based applications</li>
</ul>
        </div>
      </div>
    </section>
  );
}

export default About;

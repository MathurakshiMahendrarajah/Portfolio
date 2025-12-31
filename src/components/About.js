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
          I am a 3rd-year Computer Engineering undergraduate with experience in software development and AI/ML applications. I design and build end-to-end systems, including web, mobile, and AI-powered solutions, while continuously learning and exploring new technologies.
          </p>
          <ul className="about-highlights">
            <li>Built AI-powered applications and software solutions from concept to deployment</li>
            <li>Developed web and mobile applications integrating backend systems and databases</li>
            <li>Worked with data pipelines, model integration, and interactive interfaces</li>
            <li>Focused on scalable, maintainable, and user-friendly solutions</li>
            <li>Committed to continuous learning and adopting emerging technologies</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;

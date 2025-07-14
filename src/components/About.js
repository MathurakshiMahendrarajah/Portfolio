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
            Passionate Computer Engineering undergraduate with a strong academic record and a deep interest in AI/ML.
            Skilled in problem solving, software development, and building web/mobile applications.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;

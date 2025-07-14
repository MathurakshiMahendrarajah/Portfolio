// src/components/Projects.js
import React from 'react';
import './Projects.css';
import sentimentImg from '../assets/sentiment-analysis.webp';
import cookifyImg from '../assets/Cookify.png.webp';
import dustbinImg from '../assets/dustbin.avif';
import helpnowImg from '../assets/helpnow.webp';
import portfolioImg from '../assets/portfolio.png';

const projects = [
  {
    title: 'Sentiment Analysis Web App',
    tech: ['Python', 'scikit-learn', 'Flask', 'HTML', 'CSS', 'JavaScript'],
    image: sentimentImg,
    github: 'https://github.com/yourusername/sentiment-analysis'
  },
  {
    title: 'Cookify - Smart Recipe Finder App',
    tech: ['Flutter', 'Firebase', 'Spoonacular API'],
    image: cookifyImg,
    github: 'https://github.com/MathurakshiMahendrarajah/MobileApp.git'
  },
  { 
    title: 'DustBin Monitoring System',
    tech: ['NodeMCU', 'Ultrasonic Sensor', 'GPS', 'Firebase'],
    image: dustbinImg,
    github: 'https://github.com/MathurakshiMahendrarajah/SmartBin_Website.git'
  },
  {
    title: 'HelpNow - Emergency Support App',
    tech: ['Flutter', 'Dart', 'AWS Cloud'],
    image: helpnowImg,
    github: 'https://github.com/MathurakshiMahendrarajah/HelpNow-MobileApp.git'
  },
  {
    title: 'Portfolio Website',
    tech: ['React', 'JavaScript', 'HTML', 'CSS'],
    image: portfolioImg,
    github: 'https://github.com/yourusername/portfolio'
  }
];

function Projects() {
  return (
    <section className="projects" id="projects">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-grid">
        {projects.map(({ title, tech, image, github }, index) => (
          <div className="project-card" key={index}>
            <div className="project-image-wrapper">
              <img src={image} alt={title} className="project-image" />
            </div>
            <div className="project-info">
              <h3>{title}</h3>
              <div className="tech-list">
                {tech.map((t, i) => (
                  <span key={i} className="tech-badge">{t}</span>
                ))}
              </div>
              <a
                href={github}
                className="view-more-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                View More
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
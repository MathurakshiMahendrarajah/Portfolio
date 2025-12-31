// src/components/Skills.js
import React, { useState } from 'react';
import './Skills.css';

import {
  FaPython,
  FaDatabase,
  FaGithub,
  FaAws,
  FaChartLine,
  FaBrain,
  FaRobot,
} from 'react-icons/fa';

import { SiStreamlit } from 'react-icons/si';
import {
  SiCplusplus,
  SiNumpy,
  SiPandas,
  SiHtml5, 
  SiCss3,
  SiJavascript,
  SiScikitlearn,
  SiPytorch,
  SiTensorflow,
  SiFlask,
  SiHuggingface,
  SiFirebase,
  SiSpringboot
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { SiDocker, SiJupyter, SiGooglecolab } from 'react-icons/si';

const skillCategories = {
  'Core Programming': [
    { name: 'Python', icon: <FaPython /> },
    { name: 'C++', icon: <SiCplusplus /> },
    { name: 'JavaScript', icon: <SiJavascript /> },
    { name: 'HTML', icon: <SiHtml5 /> },
    { name: 'CSS', icon: <SiCss3 /> },
    { name: 'SQL', icon: <FaDatabase /> },
    { name: 'Java', icon: <FaJava /> }, // Reusing C++ icon for Java
  ],

  'Machine Learning & AI': [
    { name: 'Machine Learning', icon: <FaChartLine /> },
    { name: 'Deep Learning', icon: <FaBrain /> },
    { name: 'NLP & Transformers', icon: <FaRobot /> },
    { name: 'NumPy', icon: <SiNumpy /> },
    { name: 'Pandas', icon: <SiPandas /> },
    { name: 'Scikit-learn', icon: <SiScikitlearn /> },
    { name: 'PyTorch', icon: <SiPytorch /> },
    { name: 'TensorFlow / Keras', icon: <SiTensorflow /> },
  ],

  'Web Development': [
    { name: 'Streamlit', icon: <SiStreamlit /> },
    { name: 'Flask', icon: <SiFlask /> },
    { name: 'Spring Boot', icon: <SiSpringboot /> },
    { name: 'Firebase', icon: <SiFirebase /> },
  ],

  'Cloud & Deployment': [
    { name: 'AWS', icon: <FaAws /> },
    { name: 'Docker', icon: <SiDocker /> }, // You can replace with a proper Docker icon if available
    { name: 'Hugging Face', icon: <SiHuggingface /> },
  ],

  'Version Control & Tools': [
    { name: 'Git & GitHub', icon: <FaGithub /> },
    { name: 'Jupyter Notebook', icon: <SiJupyter /> },
{ name: 'Google Colab', icon: <SiGooglecolab /> },
  ],
};

function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('Core Programming');

  return (
    <section className="skills" id="skills">
      <h2 className="skills-title">Skills</h2>

      <div className="skill-tabs">
        {Object.keys(skillCategories).map((category) => (
          <button
            key={category}
            className={`skill-tab ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="skill-cards fade-in">
        {skillCategories[selectedCategory].map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-icon">{skill.icon}</div>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
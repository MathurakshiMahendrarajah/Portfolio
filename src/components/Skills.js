// src/components/Skills.js
import React, { useState } from 'react';
import './Skills.css';

import {
  FaPython,
  FaDatabase,
  FaChartLine,
  FaBrain,
  FaEye,
  FaRobot,
  FaGithub,
  FaAws
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
  SiHuggingface
} from 'react-icons/si';

const skillCategories = {
  'Core Programming': [
  { name: 'Python', icon: <FaPython /> },
  { name: 'C++', icon: <SiCplusplus /> },
  { name: 'HTML', icon: <SiHtml5 /> },
  { name: 'CSS', icon: <SiCss3 /> },
  { name: 'JavaScript', icon: <SiJavascript /> },
  { name: 'SQL', icon: <FaDatabase /> },
],

  'Machine Learning & Deep Learning': [
    { name: 'Regression & Classification', icon: <FaChartLine /> },
    { name: 'Neural Networks', icon: <FaBrain /> },
    { name: 'CNNs', icon: <FaEye /> },
    { name: 'Transformers (DistilBERT)', icon: <FaRobot /> },
  ],

  'ML Libraries & Frameworks': [
    { name: 'NumPy', icon: <SiNumpy /> },
    { name: 'Pandas', icon: <SiPandas /> },
    { name: 'Scikit-learn', icon: <SiScikitlearn /> },
    { name: 'PyTorch', icon: <SiPytorch /> },
    { name: 'TensorFlow / Keras', icon: <SiTensorflow /> },
  ],

  'Deployment & Tools': [
  { name: 'Streamlit', icon: <SiStreamlit /> },
  { name: 'Flask', icon: <SiFlask /> },
  { name: 'Hugging Face', icon: <SiHuggingface /> },
  { name: 'Git & GitHub', icon: <FaGithub /> },
  { name: 'AWS EC2', icon: <FaAws /> },
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
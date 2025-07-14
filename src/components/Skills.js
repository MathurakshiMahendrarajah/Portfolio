// src/components/Skills.js
import React, { useState } from 'react';
import './Skills.css';
import { FaPython, FaJava, FaReact, FaDatabase, FaGitAlt } from 'react-icons/fa';
import { SiCplusplus, SiHtml5, SiCss3, SiJavascript, SiFlutter, SiFirebase, SiAwsamplify, SiNumpy, SiPandas, SiScikitlearn } from 'react-icons/si';

const skillCategories = {
  'Programming Languages': [
    { name: 'Python', icon: <FaPython /> },
    { name: 'C++', icon: <SiCplusplus /> },
    { name: 'Java', icon: <FaJava /> },
    { name: 'HTML', icon: <SiHtml5 /> },
    { name: 'CSS', icon: <SiCss3 /> },
    { name: 'JavaScript', icon: <SiJavascript /> },
    { name: 'SQL', icon: <FaDatabase /> }
  ],
  'Frameworks & Tools': [
    { name: 'React', icon: <FaReact /> },
    { name: 'Flutter', icon: <SiFlutter /> },
    { name: 'Git', icon: <FaGitAlt /> },
    { name: 'Firebase', icon: <SiFirebase /> },
    { name: 'AWS', icon: <SiAwsamplify /> }
  ],
  'Machine Learning': [
    { name: 'NumPy', icon: <SiNumpy /> },
    { name: 'Pandas', icon: <SiPandas /> },
    { name: 'Scikit-learn', icon: <SiScikitlearn /> }
  ],
  'Soft Skills': [
    { name: 'Problem Solving' },
    { name: 'Team Collaboration' },
    { name: 'Fast Learner' },
    { name: 'Adaptability' },
    { name: 'Communication' }
  ],
  'Languages': [
    { name: 'Tamil (Native)' },
    { name: 'English (Fluent)' },
    { name: 'Sinhala (Understandable)' }
  ]
};

function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('Programming Languages');

  return (
    <section className="skills" id="skills">
      <h2 className="skills-title">My Skills</h2>

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

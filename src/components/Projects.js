// src/components/Projects.js
import React, { useState } from 'react';
import './Projects.css';
import homePriceImg from '../assets/house_price.png';
import clvImg from '../assets/clv.webp';
import restaurantImg from '../assets/profit.png';
import admissionImg from '../assets/admission.png';
import complaintImg from '../assets/Customer-complaint.jpg';
import sentimentImg from '../assets/movieAnalysis.png';
import pneumoniaImg from '../assets/Pneumonia.png';
import cookifyImg from '../assets/Cookify.png.webp';
import dustbinImg from '../assets/dustbin.avif';
import portfolioImg from '../assets/portfolio.png';
import fraudImg from '../assets/fraud.png';
import legalDocImg from '../assets/legal_doc.jpg'; // create or use a placeholder
import medicalTextImg from '../assets/medical_text.jpg'; // create or use a placeholder
import apiAccessImg from '../assets/api-access.webp'; // create or use a placeholder

const projectCategories = {
  'Machine Learning & AI': [
    {
      title: 'AI-Powered Legal Document Analyzer',
      deployed: false,
      description: 'Streamlit app summarizes and answers queries on legal documents using RAG with citation-aware answers. Implements PDF ingestion, semantic chunking, FAISS vector retrieval, and LangChain integration.',
      tech: ['Python', 'Streamlit', 'LangChain', 'FAISS', 'OpenAI', 'PyPDF2'],
      image: legalDocImg,
      github: 'https://github.com/MathurakshiMahendrarajah/Legal_Document_Analyzer.git'
    },
    {
      title: 'Domain-Specific Medical Text Summarization',
      deployed: false,
      description: 'Fine-tuned T5 transformer with LoRA for medical research papers summarization; Streamlit app provides concise domain-specific summaries.',
      tech: ['Python', 'Hugging Face Transformers', 'LoRA', 'PyTorch', 'Streamlit'],
      image: medicalTextImg,
      github: 'https://github.com/MathurakshiMahendrarajah/Medical_Text_Summarization.git'
    },
    {
      title: 'Credit Card Fraud Detection',
      deployed: true,
      live: 'https://creditcardfrauddetection-83scm92ncfwceyuzvl2dk6.streamlit.app', 
      description: 'Detects fraudulent credit card transactions using an end-to-end ML pipeline with XGBoost, handling class imbalance, feature engineering, and real-time predictions via Streamlit.',
      tech: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'XGBoost', 'Streamlit', 'Git'],
      image: fraudImg, 
      github: 'https://github.com/MathurakshiMahendrarajah/Credit_Card_Fraud_Detection.git'
    },
    {
      title: 'Customer Lifetime Value Prediction (CLV)',
      deployed: true,
      live: 'https://customerlifetimevaluepredictionapp.streamlit.app',
      description: 'Predicts high-value customers from RFM features using Linear Regression & XGBoost; deployed via Streamlit.',
      tech: ['Python', 'scikit-learn', 'NumPy', 'Pandas', 'XGBoost', 'Streamlit', 'Git'],
      image: clvImg,
      github: 'https://github.com/MathurakshiMahendrarajah/Customer-Lifetime-Value-CLV-Prediction-.git'
    },
    {
      title: 'Bangalore Home Price Predictor',
      deployed: true,
      live: 'http://13.51.55.82',
      description: 'ML model predicts home prices with Flask API and responsive HTML/CSS/JS frontend; deployed on AWS.',
      tech: ['Python', 'Flask', 'HTML', 'CSS', 'JavaScript', 'AWS'],
      image: homePriceImg,
      github: 'https://github.com/MathurakshiMahendrarajah/House_Price_Prediction.git'
    },
    {
      title: 'Restaurant Profit Predictor',
      deployed: false,
      description: 'Predicts potential profits for new restaurants using Linear Regression and Flask API.',
      tech: ['Python', 'Flask', 'Bootstrap', 'Linear Regression'],
      image: restaurantImg,
      github: 'https://github.com/MathurakshiMahendrarajah/Restaurant-Profit-Predictor.git'
    },
    {
      title: 'University Admission Predictor',
      deployed: false,
      description: 'Predicts student admission probabilities using logistic regression implemented from scratch with Flask frontend.',
      tech: ['Python', 'Flask', 'Bootstrap', 'Logistic Regression'],
      image: admissionImg,
      github: 'https://github.com/MathurakshiMahendrarajah/University-Admission-Predictor.git'
    },
    {
      title: 'Customer Complaint Intelligence System',
      deployed: true,
      live: 'https://huggingface.co/spaces/MathurakshiM/Customer_Complaint_Intelligence_System', 
      description: 'AI system flags urgent complaints in banking domain; deployed as an interactive Gradio app.',
      tech: ['Python', 'Gradio', 'Scikit-Learn', 'NLP'],
      image: complaintImg,
      github: 'https://github.com/MathurakshiMahendrarajah/Complaint-intelligence-system.git'
    },
    {
      title: 'Movie Review Sentiment Analysis',
      deployed: true,
      live: 'https://movie-review-sentiment-analysis-lk8t.onrender.com',
      description: 'Web app predicts sentiment of reviews (Positive/Negative) using Logistic Regression; dynamic star rating UI.',
      tech: ['Python', 'Flask', 'Scikit-Learn', 'HTML', 'CSS', 'JavaScript'],
      image: sentimentImg,
      github: 'https://github.com/MathurakshiMahendrarajah/Movie_Review_Sentiment_Analysis.git'
    },
    {
      title: 'Pneumonia Detection from Chest X-rays',
      deployed: true,
      live: 'https://huggingface.co/spaces/MathurakshiM/Pneumonia_Detection', 
      description: 'CNN model (MobileNetV2) classifies X-rays as Normal or Pneumonia; deployed as a web app with Flask.',
      tech: ['Python', 'Flask', 'CNN', 'MobileNetV2'],
      image: pneumoniaImg,
      github: 'https://github.com/MathurakshiMahendrarajah/Pneumonia-Detection.git'
    }
  ],
  'Full-Stack / IoT / Mobile': [
    {
      title: 'Cookify - Smart Recipe Finder App',
      deployed: false,
      description: 'Mobile app finds recipes using Flutter & Firebase integrated with Spoonacular API.',
      tech: ['Flutter', 'Firebase', 'Spoonacular API'],
      image: cookifyImg,
      github: 'https://github.com/MathurakshiMahendrarajah/MobileApp.git'
    },
    {
      title: 'DustBin Monitoring System',
      deployed: false,
      description: 'IoT system monitors dustbin levels using NodeMCU, sensors, GPS & Firebase.',
      tech: ['NodeMCU', 'Ultrasonic Sensor', 'GPS', 'Firebase'],
      image: dustbinImg,
      github: 'https://github.com/MathurakshiMahendrarajah/SmartBin_Website.git'
    },
    {
      title: 'Portfolio Website',
      deployed: true,
      live: 'https://portfolio-chi-five-jmjryrrvgz.vercel.app',
      description: 'Personal portfolio built with React showcasing projects & skills.',
      tech: ['React', 'HTML', 'CSS', 'JavaScript'],
      image: portfolioImg,
      github: 'https://github.com/MathurakshiMahendrarajah/Portfolio.git'
    },
    {
      title: 'Policy-Driven API Access Management System',
      deployed: false,
      description: 'Backend system managing API access with policy rules, JWT authentication, rate limiting, and usage logging; REST APIs built with Spring Boot & MySQL.',
      tech: ['Java', 'Spring Boot', 'REST APIs', 'JWT', 'MySQL'],
      image: apiAccessImg,
      github: 'https://github.com/MathurakshiMahendrarajah/Policy-Driven-API-Access-Management-System.git'
    }
  ],
};

function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('Machine Learning & AI');

  return (
    <section className="projects" id="projects">
      <h2 className="projects-title">Projects</h2>

      <div className="project-tabs">
        {Object.keys(projectCategories).map((category) => (
          <button
            key={category}
            className={`project-tab ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {projectCategories[selectedCategory].map((proj, index) => (
          <div className="project-card" key={index}>
            <div className="project-image-wrapper">
              <img src={proj.image} alt={proj.title} className="project-image" />
              {proj.deployed && <span className="deployed-badge">Live</span>}
            </div>
            <div className="project-info">
              <h3>{proj.title}</h3>
              <p className="project-description">{proj.description}</p>
              <div className="tech-list">
                {proj.tech.map((t, i) => (
                  <span key={i} className="tech-badge">{t}</span>
                ))}
              </div>
              <div className="project-buttons">
                <a href={proj.github} className="view-more-btn" target="_blank" rel="noopener noreferrer">View Code</a>
                {proj.live && <a href={proj.live} className="view-more-btn live-btn" target="_blank" rel="noopener noreferrer">Live Demo</a>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
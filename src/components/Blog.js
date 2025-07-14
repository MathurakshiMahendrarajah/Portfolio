// src/components/Blog.js
import React from 'react';
import './Blog.css';
import aiImg from '../assets/ai.jpg';
import futureImg from '../assets/future.jpg';
import interviewImg from '../assets/interview.jpg';

const blogPosts = [
  {
    title: 'What is AI and How Does It Work?',
    description: 'A beginner-friendly introduction to Artificial Intelligence: what it is, how it functions, and real-world applications.',
    image: aiImg
  },
  {
    title: 'Why AI Matters Today: Shaping Our Lives, Jobs & Future',
    description: 'Explore how AI is transforming various industries and shaping the future of work, society, and innovation.',
    image: futureImg
  },
  {
    title: 'How AI and Interviews Are Shaping My Future: A Student’s Journey',
    description: 'Personal reflections on how AI has influenced my learning path and preparation for tech interviews.',
    image: interviewImg
  }
];

function Blog() {
  return (
    <section className="blog" id="blog">
      <h2 className="blog-title">Blog</h2>
      <div className="blog-grid">
        {blogPosts.map((post, index) => (
          <div className="blog-post" key={index}>
            <img src={post.image} alt={post.title} className="blog-image" />
            <h3>{post.title}</h3>
            <p>{post.description}</p>
          </div>
        ))}
      </div>
      <a href="https://medium.com/@MathurakshiM" target="_blank" rel="noopener noreferrer" className="medium-link">
        See More on Medium
      </a>
    </section>
  );
}

export default Blog;

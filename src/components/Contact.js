// src/components/Contact.js
import React from 'react';
import './Contact.css';
import emailjs from 'emailjs-com';
import { FaLinkedin, FaEnvelope, FaMedium, FaGithub } from 'react-icons/fa';

function Contact() {
const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      'service_pzgj202',      // Replace with your EmailJS service ID
      'template_vxadnrf',     // Replace with your template ID
      e.target,
      'liI9cS3Ilmfv5c3ai'       // Replace with your public key (from EmailJS dashboard)
    )
    .then(
      (result) => {
        alert('Message sent successfully!');
        e.target.reset();
      },
      (error) => {
        alert('Failed to send message. Please try again.');
        console.error(error);
      }
    );
};

  return (
    <section className="contact" id="contact">
      <h2>Contact</h2>
      <div className="contact-container">
        <div className="contact-info">
          <div className="info-item">
            <FaLinkedin className="icon" />
            <a href="https://www.linkedin.com/in/mathurakshi-p/" target="_blank" rel="noopener noreferrer">linkedin.com/in/MathurakshiM</a>
          </div>
          <div className="info-item">
            <FaEnvelope className="icon" />
            <a href="mailto:pmathu2126@gmail.com">pmathu2126@gmail.com</a>
          </div> 
          <div className="info-item">
            <FaMedium className="icon" />
            <a href="https://medium.com/@MathurakshiM" target="_blank" rel="noopener noreferrer">medium.com/@MathurakshiM</a>
          </div>
          <div className="info-item">
            <FaGithub className="icon" />
            <a href="https://github.com/MathurakshiMahendrarajah" target="_blank" rel="noopener noreferrer">github.com/MathurakshiM</a>
          </div>
        </div>

        <form className="contact-form" onSubmit={sendEmail}>
          <input type="text" placeholder="Your Name" name='from_name'required />
          <input type="email" placeholder="Your Email" name='reply_to'required />
          <textarea placeholder="Your Message" rows="4" name='message'required></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    

    </section>
    
  );
}

export default Contact;
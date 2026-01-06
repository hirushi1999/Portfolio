import React from 'react';
import './Hero.css';
import HeroImg from './assets/my_photo.png';
import { FaReact, FaJava, FaHtml5 } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";

const Hero = () => {
  return (
    <section id="hero" className='hero-container'>
      <div className='hero-content'>
        <span className="greeting-tag">Available for Hire</span>
        <h2>Hi, I am <span className="highlight">Hirushi Nethmini</span></h2>
        <h4>Software Engineer & Full-Stack Developer</h4>
        
        <p>
          Passionate about building meaningful digital solutions, I am a self-driven Software Engineer with solid experience in 
          full-stack development and real-world fintech projects. I thrive in fast-paced environments and consistently deliver quality solutions on time.
        </p>

        <div className="hero-btns">
          <button className="primary-btn" onClick={() => document.getElementById('contactMe').scrollIntoView()}>Get in Touch</button>
          <button className="outline-btn" onClick={() => document.getElementById('projects').scrollIntoView()}>View Projects</button>
        </div>
      </div>

      <div className='hero-img-wrapper'>
        <div className='image-card'>
          <img src={HeroImg} alt="Hirushi Nethmini" className="profile-photo" />
          
          {/* Floating Tech Icons */}
          <div className='tech-badge icon-1'><FaReact /></div>
          <div className='tech-badge icon-2'><IoLogoJavascript /></div>
          <div className='tech-badge icon-3'><FaJava /></div>
          <div className='tech-badge icon-4'><FaHtml5 /></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
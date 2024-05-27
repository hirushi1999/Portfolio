import React from 'react'
import "./MobileNavbar.css";
import { TbChartArcs3 } from "react-icons/tb";

const MobileNavBar = ({ isOpen, toggleMenu }) => {

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 60, 
        behavior: 'smooth'
      });
    }
  };

  const handleMobileHireMe = () => {
    window.location.href = 'https://drive.google.com/drive/folders/1r3qUFRpJyxgI2bDgdpeHauZUYVITyrnS?usp=sharing';
  }

  return (
    <div className={`mobile-menu ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
      <div className='mobile-menu-container'>
        <div className="logo">
          <p><TbChartArcs3 /> Portfolio</p>
        </div>

        <ul>
          <li>
            <a className='menu-item' onClick={() => scrollToSection('hero')}>Home</a>
          </li>

          <li>
            <a className="menu-item" onClick={() => scrollToSection('skills')}>Skills</a>
          </li>

          <li>
            <a className="menu-item" onClick={() => scrollToSection('workExperience')}>Work Experience</a>
          </li>

          <li>
            <a className="menu-item" onClick={() => scrollToSection('projects')}>Projects</a>
          </li>

          <li>
            <a className="menu-item" onClick={() => scrollToSection('contactMe')}>Contact Me</a>
          </li>

          <button className='contact-btn' onClick={handleMobileHireMe}>Hire Me</button>
        </ul>
      </div>
    </div>
  )
}

export default MobileNavBar
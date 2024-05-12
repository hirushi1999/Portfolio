import React from 'react'
import "./MobileNavbar.css";
import { TbChartArcs3 } from "react-icons/tb";

const MobileNavBar = ({ isOpen, toggleMenu }) => {
  return (
    <div className={`mobile-menu ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
      <div className='mobile-menu-container'>
        <div className="logo">
          <p><TbChartArcs3 /> Portfolio</p>
        </div>

        <ul>
          <li>
            <a className='menu-item'>Home</a>
          </li>

          <li>
            <a className="menu-item">Skills</a>
          </li>

          <li>
            <a className="menu-item">Work Experience</a>
          </li>

          <li>
            <a className="menu-item">Projects</a>
          </li>

          <li>
            <a className="menu-item">Contact Me</a>
          </li>

          <button className='contact-btn' onClick={() => {}}>Hire Me</button>
        </ul>
      </div>
    </div>
  )
}

export default MobileNavBar
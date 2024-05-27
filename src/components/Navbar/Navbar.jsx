import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { TbChartArcs3 } from "react-icons/tb";
import "./Navbar.css";
import MobileNavBar from "./MobileNav/MobileNavbar";
import { RiCloseFill } from "react-icons/ri";

const Navbar = () => {

  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu(!openMenu)
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 60, 
        behavior: 'smooth'
      });
    }
  };

  const handleHireMe = () => {
    window.location.href = 'https://drive.google.com/drive/folders/1r3qUFRpJyxgI2bDgdpeHauZUYVITyrnS?usp=sharing';
  }

    return (
        <>
        <MobileNavBar isOpen={openMenu} toggleMenu={toggleMenu} />
         <nav className="nav-wrapper">
          <div className="nav-content">
            <div className="logo">
              <p><TbChartArcs3 /> Portfolio</p>
            </div>

            <ul>
              <li>
                <a className="menu-item" onClick={() => scrollToSection('hero')}>Home</a>
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

              <button className="contact-btn" onClick={handleHireMe}>Hire Me</button>
            </ul>

            <div className="menu-btn" onClick={toggleMenu}>
              <span style={{ fontSize: "1.8rem" }}>{openMenu ? <RiCloseFill /> : <GiHamburgerMenu />}</span>
            </div>
          </div>
         </nav>
        </>
      );
}

export default Navbar
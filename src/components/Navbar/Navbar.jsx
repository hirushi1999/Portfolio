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
                <a className="menu-item">Home</a>
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

              <button className="contact-btn" onClick={() => {}}>Hire Me</button>
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
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { TbChartArcs3 } from "react-icons/tb";
import "./Navbar.css";

const Navbar = () => {
    return (
        <>
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
                <a className="menu-item">Contact Me</a>
              </li>

              <button className="contact-btn" onClick={() => {}}>Hire Me</button>
            </ul>

            <div className="menu-btn" onClick={() => {}}>
              <span style={{ fontSize: "1.8rem" }}><GiHamburgerMenu /></span>
            </div>
          </div>
         </nav>
        </>
      );
}

export default Navbar
import React from "react";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-credits">
        © {currentYear} Hirushi Nethmini. All Rights Reserved.
      </div>
      <div className="footer-tech">
        Built with React.js & Passion
      </div>
    </footer>
  );
};

export default Footer;
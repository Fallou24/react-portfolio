import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <h1 className="footer__title">Fallou</h1>
      <div className="footer__socials">
        <a
          href="https://twitter.com/React_js_lover"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bx bxl-twitter"></i>
        </a>
        <a
          href="https://github.com/Fallou24"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bx bxl-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/fallou-ndiaye-21453b229/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bx bxl-linkedin-square"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;

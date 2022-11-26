import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <h1 className="footer__title">Fallou</h1>
      <div className="footer__socials">
        <i className="bx bxl-twitter"></i>
        <i className="bx bxl-github"></i>
        <i className="bx bxl-linkedin-square"></i>
      </div>
      <p>Designed & build by Fallou Ndiaye</p>
    </div>
  );
};

export default Footer;

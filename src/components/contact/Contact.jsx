import React from "react";
import ContactForm from "../contactForm/ContactForm";
import "./contact.scss";

const Contact = () => {
  return (
    <div className="contact section" id="contact">
      <h1 className="talk__me-title">Contactez moi</h1>
      <h3 className="contact__text">N'hesiter pas à me contacter via les moyens ci-dessous</h3>
      <div className="contact__container container">
        <div className="talk__me">
          <div className="contact__box">
            <i className="bx bx-envelope"></i>
            <span>Email</span>
            <span>falloundiaye0221@gmail.com</span>
            <a href="mailto:falloundiaye0221@gmail.com" target="_blank">
              <span>Écrivez moi </span>
              <i className="bx bx-right-arrow-alt"></i>
            </a>
          </div>
          <div className="contact__box">
            <i className="bx bxl-whatsapp"></i>
            <span>Whatshap</span>
            <span>70 337 79 59</span>
            <a href="https://wa.me/703377959" target="_blank">
              <span>Écrivez moi </span>
              <i className="bx bx-right-arrow-alt"></i>
            </a>
          </div>

          <div className="contact__box">
            <i className="bx bxl-twitter"></i>
            <span>Twitter</span>

            <a
              href="https://twitter.com/messages/1528020897105313800"
              target="_blank"
            >
              <span>Écrivez moi </span>
              <i className="bx bx-right-arrow-alt"></i>
            </a>
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;

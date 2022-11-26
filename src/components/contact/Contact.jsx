import React from "react";
import ContactForm from "../contactForm/ContactForm";
import "./contact.scss";

const Contact = () => {
  return (
    <div className="contact section" id="contact">
      <h1 className="section__title">Contact Me</h1>
      <div className="contact__container container">
        <div className="talk__me">
          <h3 className="talk__me-title">Talk me</h3>
          <div className="contact__box">
            <i className="bx bx-envelope"></i>
            <span>Email</span>
            <span>falloundiaye0221@gmail.com</span>
            <button>
              <span>Write me </span>
              <i className="bx bx-right-arrow-alt"></i>
            </button>
          </div>
          <div className="contact__box">
            <i className="bx bxl-whatsapp"></i>
            <span>Whatshap</span>
            <span>70 337 79 59</span>
            <button>
              <span>Write me </span>
              <i className="bx bx-right-arrow-alt"></i>
            </button>
          </div>

          <div className="contact__box">
            <i className="bx bxl-twitter"></i>
            <span>Twitter</span>

            <button>
              <span>Write me </span>
              <i className="bx bx-right-arrow-alt"></i>
            </button>
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;

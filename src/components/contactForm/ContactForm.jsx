import React from "react";

const ContactForm = () => {
  return (
    <div className="contact__form">
      <h3>Write me your project</h3>
      <form>
        <fieldset>
          <legend>Name</legend>
          <input type="text" placeholder="Insert your name" />
        </fieldset>
        <fieldset>
          <legend>Mail</legend>
          <input type="email" placeholder="Insert your email" />
        </fieldset>
        <fieldset className="textarea">
          <legend>Project</legend>
          <textarea placeholder="Insert your project"></textarea>
        </fieldset>
        <button className="button send">
          Send Message <i className="bx bxs-send"></i>
        </button>
      </form>
    </div>
  );
};

export default ContactForm;

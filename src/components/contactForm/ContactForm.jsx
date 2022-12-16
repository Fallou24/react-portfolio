import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";

const ContactForm = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [alert, setAlert] = useState("");
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    setIsFetching(true);
    emailjs
      .sendForm(
        "service_n3e739r",
        "template_vienyb8",
        form.current,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          setIsFetching(false);
          setAlert("Votre message est bien envoyé");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact__form">
      <form onSubmit={sendEmail} ref={form}>
        <fieldset>
          <legend>Nom</legend>
          <input
            required
            type="text"
            name="name"
            placeholder="Entrez votre nom"
          />
        </fieldset>
        <fieldset>
          <legend>Email</legend>
          <input
            required
            type="email"
            name="email"
            placeholder="Entrez votre email"
          />
        </fieldset>
        <fieldset className="textarea">
          <legend>Message</legend>
          <textarea
            required
            name="message"
            placeholder="Entrez votre message"
          ></textarea>
        </fieldset>
        <button className="button" disabled={isFetching}>
          {isFetching ? (
            "Envoi en cours..."
          ) : (
            <span className="send">
              Envoyer <i className="bx bxs-send"></i>{" "}
            </span>
          )}
        </button>
      </form>
      {alert && <p className="alert">{alert}</p>}
    </div>
  );
};

export default ContactForm;

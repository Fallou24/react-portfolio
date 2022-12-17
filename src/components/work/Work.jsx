import React from "react";
import "./work.scss";

const Work = () => {
  const projects = [
    {
      id: 1,
      title: "Une application de messagerie",
      github: "https://github.com/Fallou24/react-chat-app",
      link:"https://react-messaging99-app.netlify.app",
      desc: "Dans cette application, deux personnes peuvent avoir une conversation où les messages seront envoyés en temps réel.",
    },
    {
      id: 2,
      title: "Un clone d'instagram",
      github: "https://github.com/Fallou24/react-instagram-clone",
      link:"https://react-instagram-clone99.netlify.app",
      desc: "Dans cette application, les utilisateurs peuvent aimer et commenter les publications. Deux utilisateurs peuvent égalemnt s'envoyer des messages avec un flux direct de ces messages. Chaque utilisateur a un profil où il peut gérer les utilisateurs qu'il suit",
    },
    {
      id: 3,
      title: "Un site e-commerce",
      github: "https://github.com/Fallou24/react-ecommerce",
      link:"https://react-ecommerce-website99.netlify.app",
      desc: "On propose à l'acheteur la liste des produits disponible. Cette dernière peut être triée en fonction du prix ou de l'ordre alphabétique. L'utilisateur peut acheter un produit en accédant d'abord aux détails de celui-ci. Enfin un panier est disponible pour permettre à l'acheteur de gérer les produits qu'il souhaite acheter",
    },
  ];
  return (
    <section className="section work" id="work">
      <h1 className="section__title">Projets</h1>
      <div className="work__container container">
        {projects.map((project) => {
          return (
            <article key={project.id}>
              <div className="wrapper">
                <h1>{project.title}</h1>
                <p className="desc">{project.desc}</p>
                <p className="links">
                  <a href={project.github} target="_blank" rel="noreferrer">
                    <i className="bx bxl-github"></i>
                  </a>
                  <a href={project.link} target="_blank" rel="noreferrer">
                    <i className="bx bx-link-external"></i>
                  </a>
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Work;

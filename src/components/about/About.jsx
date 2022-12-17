import React from "react";
import "./about.scss";
const About = () => {
  return (
    <div className="about section" id="about">
      <h1 className="section__title">À propos de moi</h1>
      <div className="about__container container">
        <p className="about__img-bg">
          <img src="/img/img.png" alt="" className="about__img" />
        </p>
        <div className="about__info">
          <p className="about__desc">
            Bonjour, je m'appelle Fallou Ndiaye.Je suis un etudiant qui est basé
            à Dakar. J'aime construire des sites web avec une excellente
            expérience utilisateur. Ma curiosité et ma passion m'ont toujours
            poussé à m'autoformer continuellement en vue d'atteindre la
            meilleure de moi-même. Aprés la réalisation de quelques projets avec
            du ReactJS, j'ai senti que la prochaine étape pour assurer une bonne
            continuité de mon apprentissage était de trouver un stage.Je serai
            ravi d'integrer une entreprise afin de gagner en expérience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

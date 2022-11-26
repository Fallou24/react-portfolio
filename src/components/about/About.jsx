import React from "react";
import "./about.scss";
const About = () => {
  return (
    <div className="about section" id="about">
      <h1 className="section__title">About Me</h1>
      <div className="about__container container">
        <p className="about__img-bg">
          <img src="/img/about.jpg" alt="" className="about__img" />
        </p>
        <div className="about__info">
          <p className="about__desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
            delectus maiores fugit unde accusantium odit beatae at porro.
            Voluptas numquam pariatur, reiciendis aperiam consectetur incidunt
            officiis et possimus laudantium? Obcaecati laudantium officia
            dolorem esse, suscipit libero
          </p>
          <button className="button">
            Download cv <i className="bx bx-download"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;

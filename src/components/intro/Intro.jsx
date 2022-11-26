import React from "react";
import "./intro.scss";

const Intro = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container container">
        <div className="social__media">
          <i className="bx bxl-twitter"></i>
          <i className="bx bxl-github"></i>
          <i className="bx bxl-linkedin-square"></i>
        </div>
        <p className="hero__img">
          <svg
            className="intro__blob"
            viewBox="0 0 479 467"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask id="mask0" mask-type="alpha">
              <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z"></path>
            </mask>
            <g mask="url(#mask0)">
              <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z"></path>
              <image
                className="intro-img"
                x="50"
                y="60"
                href="img/perfil.png"
              ></image>
            </g>
          </svg>
        </p>
        <div className="hero__intro">
          <h1 className="intro__title">Fallou Ndiaye</h1>
          <h3>Front end developer</h3>
          <p className="intro__desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            corporis tenetur, aperiam suscipit quod labore?
          </p>
          <a className="button intro__btn" href="#contact">
            Contact
            <i className="bx bxs-send button__left"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;

import React from "react";
import "./skills.scss";

const Skills = () => {
  const front = ["HTML", "CSS", "Sass", "Javascript", "ReactJS", "Git"];
  const back = ["NodeJs","Firebase","PHP","SQL","MongoDB"]
  return (
    <section className="section skills" id="skills">
      <h1 className="section__title">Compétences</h1>
      <div className="skills__container container">
        <div className="front">
          <div className="wrapper">
            <h3>Front-end</h3>
            <div className="box">
              {front.map((skill,index) => (
                <p key={index}>
                  <span>
                  <i className='bx bxs-badge-check'></i>                  </span>
                  <span>{skill}</span>
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className="back">
          <div className="wrapper">
            <h3>Back-end</h3>
            <div className="box">
            {back.map((skill,index) => (
                <p key={index}>
                  <span>
                  <i className='bx bxs-badge-check'></i>                  </span>
                  <span>{skill}</span>
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

import React from "react";
import "./skills.scss";

const Skills = () => {
  const front = ["HTML", "CSS", "Git", "Sass", "Javascript", "React"];
  const back = ["Node Js","Firebase","PHP","SQL"]
  return (
    <section className="section skills" id="skills">
      <h1 className="section__title">Skills</h1>
      <div className="skills__container container">
        <div className="front">
          <div className="wrapper">
            <h3>Frontend</h3>
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
            <h3>Backend</h3>
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

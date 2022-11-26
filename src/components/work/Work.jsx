import React from "react";
import "./work.scss";

const Work = () => {
  const projects = [
    {
      id: 1,
      title: "Lorem ipsum",
      desc: "Lorem ipsum aliquid architecto ab nostrum a harum praesentium tempore rem blanditiis sit accusantium, quidem accusamus ullam! Nobis modi, hic autem impedit quo minima. Eum, eos! Iusto tempore est eius!      ",
    },
    {
      id: 2,
      title: "Lorem ipsum",
      desc: "Lorem ipsum aliquid architecto ab nostrum a harum praesentium tempore rem blanditiis sit accusantium, quidem accusamus ullam! Nobis modi, hic autem impedit quo minima. Eum, eos! Iusto tempore est eius!      ",
    },
    {
      id: 3,
      title: "Lorem ipsum",
      desc: "Lorem ipsum aliquid architecto ab nostrum a harum praesentium tempore rem blanditiis sit accusantium, quidem accusamus ullam! Nobis modi, hic autem impedit quo minima. Eum, eos! Iusto tempore est eius!      ",
    },
  ];
  return (
    <section className="section work" id="work">
      <h1 className="section__title">Work</h1>
      <div className="work__container container">
        {projects.map((project) => {
          return (
            <article key={project.id}>
              <div className="wrapper">
                <h1>{project.title}</h1>
                <p className="desc">{project.desc}</p>
                <p className="links">
                  <span>
                    <i className="bx bxl-github"></i>
                  </span>
                  <span>
                  <i className='bx bx-link-external'></i>
                  </span>
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

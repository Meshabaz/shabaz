import React from "react";
import "./portfolio.css";
import todo__img from "../../assets/todo__img.png";
import editor__img from "../../assets/editor__img.png";
import netmeds__img from "../../assets/netmeds__img.png";
import myntra__img from "../../assets/myntra__img.png";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My recent work</h5>
      <h2>Portfolio</h2>
      <div className="container protfolio__container">
        <article className="portfolio__item">
          <h2>Todo App</h2>
          <div className="portfolio__item__image">
            <img src={todo__img} alt="" />
          </div>
          <h3>
            A task manager application. React-based based application. Where
            user can create a listoftasks according to priorities and can
            modify, remove tasks.
          </h3>
          <div className="portfolio__item__cta">
            <a
              href="https://github.com/Meshabaz/todoapp"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://meshabaz.github.io/todoapp/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <h2>Editor</h2>
          <div className="portfolio__item__image">
            <img src={editor__img} alt="" />
          </div>
          <h3>
            A texteditor application. React-based based application. Where user
            can edit text in various ways like remove extra spaces, capital case
            etc.
          </h3>
          <div className="portfolio__item__cta">
            <a
              href="https://github.com/Meshabaz/editor"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://meshabaz.github.io/editor/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <h2>Netmeds Clone</h2>
          <div className="portfolio__item__image">
            <img src={netmeds__img} alt="" />
          </div>
          <h3>
            This projectis the clone of Netmeds.com which is a pharmacy and
            medicine selling website. Built by a team of 5 Full stack web
            developers executed in 6 days.
          </h3>
          <div className="portfolio__item__cta">
            <a
              href="https://github.com/Meshabaz/Netmeds-clone"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://zippy-centaur-80f08f.netlify.app/index.html"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <h2>Myntra Clone</h2>
          <div className="portfolio__item__image">
            <img src={myntra__img} alt="" />
          </div>
          <h3>
            An e-commerce website, especially for fashion & lifestyle products.
            A collaborative project built by a team of 5 Full stack web
            developers executed in 5 days.
          </h3>
          <div className="portfolio__item__cta">
            <a
              href="https://github.com/anuragn0507/myntra-clone"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://wondrous-crepe-903a32.netlify.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;

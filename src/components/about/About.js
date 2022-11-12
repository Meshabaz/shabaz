import React from "react";
import "./about.css";
import ME from "../../assets/me.jpg";
import { FaMedal } from "react-icons/fa";
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <img src={ME} alt="About Image" />
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaMedal className="about__icon" />
              <h5>Experience</h5>
              <small>Currently Working</small>
            </article>
            <article className="about__card">
              <FaMedal className="about__icon" />
              <h5>Education</h5>
              <small>
                Full Stack Developer ,&nbsp; Degree :
                &nbsp;&nbsp;B.Tech(Mechanical Domain)
              </small>
            </article>
            <article className="about__card">
              <FaMedal className="about__icon" />
              <h5>Projects</h5>
              <small>5+&nbsp; Completed Projects</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            nam quod veritatis dicta porro similique, quos saepe eum. Aliquam
            nulla aut quisquam quidem placeat facere odit velit perferendis
            deleniti recusandae!
          </p>

          <a href="#contact" className="btn btn-primary">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;

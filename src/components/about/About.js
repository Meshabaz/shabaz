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
            I am aiming to use the knowledge gained till now, my curiosity to
            gain new knowledge and to utilize my skills and abilities in the
            industry that offers professional growth while being resourceful,
            innovative, flexible and helpful to others. With this utilizing my
            skills that lead to not only my development, but rather overall
            development of the organization. As a Mechanical engineer, I have
            both theoretical and practical knowledge. 1st of all I have interest
            in Coding and web Development that's why I have learn Full Stack Web
            development in Masai School.
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

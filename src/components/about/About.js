import React from "react";
import "./about.css";
import ME from "../../assets/profile.jpeg";
import { FaMedal } from "react-icons/fa";
import transition from "../../transition";
import { Link } from "react-router-dom";
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
              <br />
              <span>
                <code>Infosys Limited.</code>
              </span>
            </article>
            <article className="about__card">
              <FaMedal className="about__icon" />
              <h5>Education</h5>
              <small>Full Stack Developer ,&nbsp; Degree - B.Tech</small>
            </article>
            <article className="about__card">
              <FaMedal className="about__icon" />
              <h5>Projects</h5>
              <small>5+&nbsp; Completed Projects</small>
            </article>
          </div>
          <br />

          <p>
            Highly Motivated Full Stack Developer with 2 Years of Experience in
            Application Development and Management As a dedicated and
            detail-oriented full stack developer at Infosys, I possess a strong
            passion for building scalable, efficient, and innovative software
            solutions. With 2 years of experience in the application development
            and management domain, I have honed my skills in:
            <li>
              - Designing and developing robust front-end and back-end
              applications using cutting-edge technologies
            </li>
            <li>
              - Collaborating with cross-functional teams to deliver
              high-quality solutions that meet client requirements
            </li>
            <li>
              - Troubleshooting and resolving complex technical issues with ease
            </li>
            <li>
              - Staying up-to-date with industry trends and emerging
              technologies to continuously improve skills
            </li>
            <li></li>
          </p>
          <br />

          <Link to="/contact" className="btn btn-primary">
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
};

export default transition(About);

import React from "react";
import "./experiance.css";
import { BiCodeAlt } from "react-icons/bi";
import { FaBootstrap } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { IoLogoCss3 } from "react-icons/io";
import { SiJava } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";


function Experiance() {
  return (
    <section id="experiance">
      <h5>My Skills And Expertice</h5>
      <h2>My Experience</h2>

      <div className="container experiance__container">
        <div className="experiance__frontend">
          <h3>Frontend Development</h3>
          <div className="experiance__content">
            <article className="experiance__details">
              <BiCodeAlt className="experiance__details__icons" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experiance__details">
              <IoLogoCss3 className="experiance__details__icons" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>{" "}
            <article className="experiance__details">
              <DiJavascript className="experiance__details__icons" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>{" "}
            <article className="experiance__details">
              <FaReact className="experiance__details__icons" />
              <div>
                <h4>React.js</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>{" "}
            <article className="experiance__details">
              <FaBootstrap className="experiance__details__icons" />
              <div>
                <h4>BootStrap</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experiance__backend">
          <h3>Backend Development</h3>
          <div className="experiance__content">
            <article className="experiance__details">
              <SiJava className="experiance__details__icons" />
              <div>
                <h4>JAVA</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experiance__details">
              <FaNodeJs className="experiance__details__icons" />
              <div>
                <h4>Node-Express</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>{" "}
            <article className="experiance__details">
              <DiMongodb className="experiance__details__icons" />
              <div>
                <h4>Mongodb</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experiance;

import React from "react";
import "./experiance.css";
import { LiaReact } from "react-icons/lia";
import { IoLogoAngular } from "react-icons/io";
import { SiDbeaver, SiEclipseide, SiHtml5, SiJira, SiMui, SiPostman, SiPreact, SiPrimeng, SiPrimereact, SiSpringboot, SiTypescript } from "react-icons/si";
import { FaAws, FaCss3, FaGitAlt, FaGithub, FaGitlab, FaJava } from "react-icons/fa";
import { RiJavascriptFill, RiNodejsLine } from "react-icons/ri";
import { DiJava } from "react-icons/di";
import { BiLogoMongodb, BiLogoPostgresql, BiLogoTypescript } from "react-icons/bi";
import { BsBootstrap } from "react-icons/bs";
import { GiAngularSpider, GiToadTeeth } from "react-icons/gi";
import { VscVscodeInsiders } from "react-icons/vsc";
import { TbBrandMongodb } from "react-icons/tb";
import transition from "../../transition";
// import { BiCodeAlt } from "react-icons/bi";
// import { FaAngular, FaBootstrap } from "react-icons/fa";
// import { FaReact } from "react-icons/fa";
// import { DiJavascript } from "react-icons/di";
// import { IoLogoCss3 } from "react-icons/io";
// import { SiAngularjs, SiJava } from "react-icons/si";
// import { DiMongodb } from "react-icons/di";
// import { FaNodeJs } from "react-icons/fa";
// import { SiPrimeng } from "react-icons/si";




function Experiance() {
  return (
    <section id="experiance">
      <h5>My Skills And Expertice</h5>
      <h2>My Skills</h2>

      <div className="container experiance__container">
        <div className="experiance__frontend">
          <h3>Frontend & UI</h3>
          <div className="experiance__content">
            <article className="experiance__details">
              <LiaReact className="experiance__details__icons" />
              <div>
                <h4>React.js</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>{" "}
            <article className="experiance__details">
              <IoLogoAngular className="experiance__details__icons" />
              <div>
                <h4>Angular</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>{" "}
            <article className="experiance__details">
              <SiPrimereact className="experiance__details__icons" />
              <div>
                <h4>PrimeReact</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>{" "}
            <article className="experiance__details">
              <SiPrimeng className="experiance__details__icons" />
              <div>
                <h4>PrimeNG</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>{" "}
            <article className="experiance__details">
              <SiPreact className="experiance__details__icons" />
              <div>
                <h4>React Native</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>{" "}
            <article className="experiance__details">
              <GiAngularSpider className="experiance__details__icons" />
              <div>
                <h4>Angular Material</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>{" "}
            <article className="experiance__details">
              <SiHtml5 className="experiance__details__icons" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experiance__details">
              <FaCss3 className="experiance__details__icons" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>{" "}
            <article className="experiance__details">
              <BsBootstrap className="experiance__details__icons" />
              <div>
                <h4>BootStrap</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experiance__details">
              <SiMui className="experiance__details__icons" />
              <div>
                <h4>MUI</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experiance__backend">
          <h3>Tools</h3>
          <div className="experiance__content">
            <article className="experiance__details">
              <FaGitAlt className="experiance__details__icons" />
              <div>
                <h4>Git</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experiance__details">
              <FaGitlab className="experiance__details__icons" />
              <div>
                <h4>Gitlab</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>{" "}
            <article className="experiance__details">
              <FaGithub className="experiance__details__icons" />
              <div>
                <h4>GitHub desktop</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>{" "}
            <article className="experiance__details">
              <SiEclipseide className="experiance__details__icons" />
              <div>
                <h4>Eclipse</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>{" "}
            <article className="experiance__details">
              <VscVscodeInsiders className="experiance__details__icons" />
              <div>
                <h4>VScode</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>{" "}
            <article className="experiance__details">
              <SiPostman className="experiance__details__icons" />
              <div>
                <h4>Postman</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>{" "}
            <article className="experiance__details">
              <GiToadTeeth className="experiance__details__icons" />
              <div>
                <h4>Toad</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>{" "}
            <article className="experiance__details">
              <SiDbeaver className="experiance__details__icons" />
              <div>
                <h4>DBeaver</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>{" "}
            <article className="experiance__details">
              <TbBrandMongodb className="experiance__details__icons" />
              <div>
                <h4>MongoDB Atlas</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>{" "}
            <article className="experiance__details">
              <SiJira className="experiance__details__icons" />
              <div>
                <h4>Jira</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>{" "}
          </div>
        </div>
        <div className="experiance__backend">
          <h3>Backend & Language</h3>
          <div className="experiance__content">
            <article className="experiance__details">
              <FaJava className="experiance__details__icons" />
              <div>
                <h4>JAVA</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experiance__details">
              <RiJavascriptFill className="experiance__details__icons" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>{" "}
            <article className="experiance__details">
              <BiLogoTypescript className="experiance__details__icons" />
              <div>
                <h4>TypeScript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>{" "}
            <article className="experiance__details">
              <RiNodejsLine className="experiance__details__icons" />
              <div>
                <h4>Node-Express</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>{" "}
            <article className="experiance__details">
              <SiSpringboot className="experiance__details__icons" />
              <div>
                <h4>Spring boot</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>{" "}
           
          </div>
        </div>
        <div className="experiance__backend">
          <h3>DB & Cloud</h3>
          <div className="experiance__content">
            <article className="experiance__details">
              <BiLogoMongodb className="experiance__details__icons" />
              <div>
                <h4>Mongodb</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experiance__details">
              <BiLogoPostgresql className="experiance__details__icons" />
              <div>
                <h4>Plsql</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experiance__details">
              <FaAws className="experiance__details__icons" />
              <div>
                <h4>AWS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>{" "}
            
          </div>
        </div>
      </div>
    </section>
  );
}

export default transition(Experiance);

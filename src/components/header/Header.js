import React from "react";
import "./header.css";
import Attachments from "./Attachments";
import me from "../../assets/me.jpg";
import SocialHandels from "./SocialHandels";

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Md Shabaz Ansari</h1>
        <h5 className="text-light">Full Stack Developer</h5>
        <Attachments />
        <SocialHandels />
        <div className="me">
          <img src={me} alt="me" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;

import React from "react";
import "./header.css";
import Attachments from "./Attachments";
import me from "../../assets/me.png";
import SocialHandels from "./SocialHandels";

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Md Shabaz Ansari</h1>
        <ul className="dynamic-txt">
          <li className="text-light">
            And I'm a <span className="span">Full Stack Developer.</span>
          </li>
          {/* <li>
            <span>Fresher</span>
          </li> */}
        </ul>
        <Attachments />
        <SocialHandels />
        <div className="me">
          <img src={me} alt="me" style={{height:"30rem"}} />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;

import React from "react";
import "./header.css";
import Attachments from "./Attachments";
import me from "../../assets/me.jpg";

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Md Shabaz Ansari</h1>
        <h5 className="text-light">Full Stack Developer</h5>
        <Attachments />
        <div className="me">
          <img src={me} alt="" />
        </div>
      </div>
    </header>
  );
};

export default Header;

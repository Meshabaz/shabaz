import React from "react";
import "./nav.css";
import { RiHomeSmileFill } from "react-icons/ri";
import { FaUserAlt } from "react-icons/fa";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import { AiFillMessage } from "react-icons/ai";
import { MdSettingsInputComposite } from "react-icons/md";
import { useState } from "react";
const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <RiHomeSmileFill />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <FaUserAlt />
      </a>
      <a
        href="#experiance"
        onClick={() => setActiveNav("#experiance")}
        className={activeNav === "#experiance" ? "active" : ""}
      >
        <BsFillJournalBookmarkFill />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <AiFillMessage />
      </a>
      <a
        href="#setting"
        onClick={() => setActiveNav("#setting")}
        className={activeNav === "#setting" ? "active" : ""}
      >
        <MdSettingsInputComposite />
      </a>
    </nav>
  );
};

export default Nav;

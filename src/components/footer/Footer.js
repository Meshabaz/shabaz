import React from "react";
import "./footer.css";
import { BsTwitter } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { FaTelegramPlane } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        MeShabaz
      </a>

      <ul className="links">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experiance">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://twitter.com/MeShabaz__" target="_blank">
          <BsTwitter />
        </a>
        <a href="https://www.instagram.com/holyfalcon_/?hl=en" target="_blank">
          <RiInstagramFill />
        </a>
        <a href="https://telegram.com" target="_blank">
          <FaTelegramPlane />
        </a>
      </div>
      <div className="footer__copyright">
        <small>@_MeShabaz. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;

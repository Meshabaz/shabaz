import React from "react";
import "./footer.css";
import { BsTwitter } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { FaGithub, FaLinkedin, FaTelegramPlane } from "react-icons/fa";
import { Link } from "react-router-dom";
import { SiCodingninjas } from "react-icons/si";
import { IoLogoWhatsapp } from "react-icons/io";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        @_MeShabaz.
      </a>

      <ul className="links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/experiance">Experience</Link>
        </li>
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://twitter.com/MeShabaz__" target="_blank">
          <BsTwitter />
        </a>
        {/* <a href="https://www.instagram.com/holyfalcon_/?hl=en" target="_blank">
          <RiInstagramFill />
        </a> */}
        <a
          href="https://www.linkedin.com/in/md-shabaz-a-0399341bb?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
        >
          <FaLinkedin />
        </a>
        <a href="https://github.com/Meshabaz" target="_blank">
          <FaGithub />
        </a>
        <a
          href="https://www.codingninjas.com/codestudio/profile/c862e449-cfd8-458a-9cc1-7845283636fb"
          target="_blank"
        >
          <SiCodingninjas />
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=919534492210"
          target="_blank"
        >
          <IoLogoWhatsapp />
        </a>
      </div>
      <div className="footer__copyright">
        <small>@_MeShabaz. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
// import { GoMarkGithub } from "react-icons/go";
import { SiCodingninjas } from "react-icons/si";
function SocialHandels() {
  return (
    <div className="social_handels">
      <a
        href="https://www.linkedin.com/in/md-shabaz-ansari-0399341bb/"
        target={"_blank"}
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/Meshabaz" target={"_blank"}>
        <FaGithub />
      </a>
      <a
        href="https://www.codingninjas.com/codestudio/profile/c862e449-cfd8-458a-9cc1-7845283636fb"
        target={"_blank"}
      >
        <SiCodingninjas />
      </a>
    </div>
  );
}

export default SocialHandels;

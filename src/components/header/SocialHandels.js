import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { GoMarkGithub } from "react-icons/go";
import { SiCodingninjas } from "react-icons/si";
function SocialHandels() {
  return (
    <div className="social_handels">
      <a href="https://Linkedin.com" target={"_blank"}>
        <BsLinkedin />
      </a>
      <a href="https://Github.com" target={"_blank"}>
        <GoMarkGithub />
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

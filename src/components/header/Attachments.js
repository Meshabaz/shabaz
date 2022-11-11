import React from "react";
import cv from "../../assets/cv.pdf";
function Attachments() {
  return (
    <div className="attach">
      <a href={cv} download className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
}

export default Attachments;

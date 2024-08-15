import React from "react";
import cv from "../../assets/cv.pdf";
import { Link } from "react-router-dom";
function Attachments() {
  return (
    <div className="attach">
      <a href={cv} download className="btn">
        Download CV
      </a>
      <Link to="/contact" className="btn btn-primary">
        Let's Talk
      </Link>
    </div>
  );
}

export default Attachments;

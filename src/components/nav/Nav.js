import React, { Component, useEffect } from "react";
import "./nav.css";
import { RiHomeSmileFill } from "react-icons/ri";
import { FaUserAlt } from "react-icons/fa";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import { AiFillMessage } from "react-icons/ai";
import { MdSettingsInputComposite } from "react-icons/md";
import { MdWork } from "react-icons/md";
import { useState } from "react";
import loveAgain from "../../assets/loveAgain.mp3";
import gimme from "../../assets/gimme.mp3";
import Demons from "../../assets/Imagine-Dragons-Demons.mp3";
import { AiOutlineCloseCircle } from "react-icons/ai";
// import sickick from "../../assets/Infected(PagalWorld).mp3";
// import sickremix from "../../assets/Sickick_-_Body_Language_(Sickmix).mp3";
import { Link } from "react-router-dom";
const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  const [audio, setAudio] = useState(Demons);
  // useEffect(() => {
  // setAudio(loveAgain);
  // document.querySelector("audio").play();
  // }, []);

  // window.onload = function () {
  //   document.querySelector(".audio").play();
  // };

  const handleTransition = async (e) => {
    e.preventDefault();
  };

  return (
    <>
      {/* <div className="setting" style={{ display: "none" }}>
        <div>
          <AiOutlineCloseCircle
            className="closebtn"
            onClick={() => {
              document.querySelector(".setting").style.display = "none";
            }}
          />
        </div>
        <div className="audio">
          <h2>Audio Theme !</h2>
          <audio autoPlay="autoplay" loop controls src={audio}></audio>
          <li
            onClick={() => {
              setAudio(Demons);
            }}
          >
            Imagine-Dragons-Demons
          </li>
         
          <li
            onClick={() => {
              setAudio(loveAgain);
            }}
          >
            Dua Lips-LoveAgain(Slowed+Reverb)
          </li>
          <li
            onClick={() => {
              setAudio(gimme);
            }}
          >
            Gimme! Gimme!
          </li>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <li
              onClick={() => {
                setAudio(sickick);
              }}
            >
              Sickick - Infected{" "}
            </li>
            <button
              onClick={() => {
                setAudio(sickremix);
              }}
              className="btn remix"
            >
              Remix
            </button>
          </div>
          <li
            onClick={() => {
              setAudio("");
            }}
          >
            No Audio
          </li>
        </div>
      </div> */}
      <nav>
       
        {/* <a
          href="#setting"
          onClick={() => {
            setActiveNav("#setting");
            document.querySelector(".setting").style.display = "block";
          }}
          className={activeNav === "#setting" ? "active" : ""}
        >
          <MdSettingsInputComposite />
        </a> */}

        <Link
          to="/"
          onClick={() => {
            setActiveNav("/");
          }}
          className={activeNav === "/" ? "active" : ""}
        >

          <RiHomeSmileFill />
        </Link>
        <Link
          to="/about"
          onClick={() => setActiveNav("/about")}
          className={activeNav === "/about" ? "active" : ""}
        >
          <FaUserAlt />
        </Link>
        <Link
          to="/experiance"
          onClick={() => setActiveNav("/experiance")}
          className={activeNav === "/experiance" ? "active" : ""}
        >
          <BsFillJournalBookmarkFill />
        </Link>
        <Link
          to="/portfolio"
          onClick={() => setActiveNav("/portfolio")}
          className={activeNav === "/portfolio" ? "active" : ""}
        >
          <MdWork />
        </Link>
        <Link
          to="/contact"
          onClick={() => setActiveNav("/contact")}
          className={activeNav === "/contact" ? "active" : ""}
        >
          <AiFillMessage />
        </Link>
      </nav>
    </>
  );
};

export default Nav;

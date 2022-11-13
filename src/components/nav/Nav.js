import React from "react";
import "./nav.css";
import { RiHomeSmileFill } from "react-icons/ri";
import { FaUserAlt } from "react-icons/fa";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import { AiFillMessage } from "react-icons/ai";
import { MdSettingsInputComposite } from "react-icons/md";
import { useState } from "react";
import loveAgain from "../../assets/loveAgain.mp3";
import gimme from "../../assets/gimme.mp3";
import Kurlus_osman from "../../assets/Kuruluş_Osman.mp3";
import osman from "../../assets/osman.mp3";
import { AiOutlineCloseCircle } from "react-icons/ai";
import sickick from "../../assets/Infected(PagalWorld).mp3";
import sickremix from "../../assets/Sickick_-_Body_Language_(Sickmix).mp3";
const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  const [audio, setAudio] = useState(loveAgain);
  return (
    <>
      <div className="setting" style={{ display: "none" }}>
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
              setAudio(osman);
            }}
          >
            Osman Bey Marşı (Anthem)
          </li>
          <li
            onClick={() => {
              setAudio(Kurlus_osman);
            }}
          >
            Kuruluş_Osman
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
      </div>
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
          onClick={() => {
            setActiveNav("#setting");
            document.querySelector(".setting").style.display = "block";
          }}
          className={activeNav === "#setting" ? "active" : ""}
        >
          <MdSettingsInputComposite />
        </a>
      </nav>
    </>
  );
};

export default Nav;

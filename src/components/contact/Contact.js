import React from "react";
import "./contact.css";
import { MdEmail } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { RiWhatsappFill } from "react-icons/ri";

const Contact = () => {
  return (
    <section id="contact">
      <h5>Select a sutaible way you want to talk in</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdEmail />
            <h4>LinkedIn</h4>
            <h5>shabazameen1818@gmail.com</h5>
            <a href="mailto:shabazameen1818@gmail.com" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <BsLinkedin />
            <h4>Linked In</h4>
            <h5>Md Shabaz Ansari</h5>
            <a
              href="https://www.linkedin.com/in/md-shabaz-ansari-0399341bb/"
              target="_blank"
            >
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <RiWhatsappFill />
            <h4>WhatsApp</h4>
            <h5>محمد شہباز انجم منتظر✨💫(Shabaz)</h5>
            <a
              href="https://api.whatsapp.com/send?phone=919534492210"
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </div>
        <form action="">
          <input
            type="text"
            name="name"
            placeholder="Md Shabaz Ansari"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="shabazameen1818@gmail.com"
            required
          />
          <textarea
            name="message"
            placeholder="Your message.."
            rows="10"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

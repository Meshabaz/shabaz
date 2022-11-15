import React from "react";
import "./contact.css";
import { MdEmail } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { RiWhatsappFill } from "react-icons/ri";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ogfkb26",
        "template_w8q6vsj",
        form.current,
        "AVcd-pazLW-vZkkZh"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Select a sutaible way you want to talk in</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdEmail className="contact__ottion__icon" />
            <h4>G-mail</h4>
            <h5>shabazameen1818@gmail.com</h5>
            <a href="mailto:shabazameen1818@gmail.com" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <BsLinkedin className="contact__ottion__icon" />
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
            <RiWhatsappFill className="contact__ottion__icon" />
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
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Name.." required />
          <input
            type="email"
            name="email"
            placeholder="Your Email..."
            required
          />
          <textarea
            name="message"
            placeholder="Your message..."
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

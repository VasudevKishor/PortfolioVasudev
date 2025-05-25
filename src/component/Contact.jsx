import React from "react";
import "./Contact.css"; // Ensure this file has appropriate styling

const Contact = () => {
  return (
    <div className="contact-container" id="contact">
      <h2 className="contact-heading">Reach Out to Me</h2>
      <p className="contact-description">
        I'm always open to collaborating or discussing exciting ideas. Feel free to connect with me through the following platforms:
      </p>
      
      <div className="contact-socials">
        <a
          href="https://www.linkedin.com/in/vasudevkishor"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/vasudevkishor"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          GitHub
        </a>
        <a
          href="mailto:work.vasudevkishor@gmail.com"
          className="contact-link"
        >
          Email Me
        </a>
      </div>
    </div>
  );
};

export default Contact;

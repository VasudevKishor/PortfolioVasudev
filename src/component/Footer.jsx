import React from "react";
import "./Footer.css"; // Import the CSS

const Footer = () => {
  return (
    <footer className="footer">
      <p> {new Date().getFullYear()} Vasudev Kishor.</p>
    </footer>
  );
};

export default Footer;

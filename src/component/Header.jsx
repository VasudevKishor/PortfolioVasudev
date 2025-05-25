import React from "react";
import "./Header.css";

const Header = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openResume = () => {
    window.open(process.env.PUBLIC_URL + "/resume.pdf", "_blank"); // Ensure resume.pdf is in your public/ folder
  };

  return (
    <header className="header">
      <nav className="nav">
        <button onClick={() => scrollToSection("about")}>About</button>
        <button onClick={() => scrollToSection("projects")}>Projects</button>
        <button onClick={() => scrollToSection("skills")}>Skills</button>
        <button onClick={() => scrollToSection("experience")}>Experience</button>
        <button onClick={() => scrollToSection("contact")}>Contact</button>
        <button className="resume-button" onClick={openResume}>Resume</button>
      </nav>
    </header>
  );
};

export default Header;

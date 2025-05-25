import React from "react";
import { TypeAnimation } from "react-type-animation";
import "./PortfolioHome.css"; // Import the CSS

const PortfolioHome = () => {
  return (
    <div className="portfolio-container">
      <img
        src="/your-photo.jpg"
        alt="Profile"
        className="portfolio-image"
      />
      <h1 className="intro-text">Hi, I'm</h1>
      <h2 className="name-text">Vasudev Kishor</h2>
      <TypeAnimation
        sequence={[
          "Full Stack Developer", 
          2000, 
          "AI/ML Researcher", 
          2000
        ]}
        wrapper="span"
        speed={50}
        repeat={Infinity}
        className="typewriter-text"
      />
    </div>
  );
};

export default PortfolioHome;

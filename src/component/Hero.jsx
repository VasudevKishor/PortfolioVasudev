import React from "react";
import { TypeAnimation } from "react-type-animation";
import "./Hero.css"; // Import the CSS file

const Hero = () => {
  return (
    <div className="hero-container">
      <img
        src={require("./vasudev.jpg")} // Corrected path to your image
        alt="Vasudev Kishor"
        className="hero-image"
      />
      <h1 className="hero-title">Vasudev Kishor</h1>
      <TypeAnimation
        sequence={["Full Stack Developer", 2000, "AI/ML Researcher", 2000]}
        wrapper="span"
        speed={50}
        repeat={Infinity}
        className="hero-subtitle"
      />
    </div>
  );
};

export default Hero;

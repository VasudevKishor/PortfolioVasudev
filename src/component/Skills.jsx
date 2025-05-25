import React from "react";
import "./Skills.css"; // Import the CSS file

const skills = [
  "C", "C++", "Python", "Java", "MySQL", "JavaScript", "HTML5", "CSS3", "Flask", 
  "React.js", "Android", "Node.js", "Flutter", "TailwindCSS", "Express.js", "Bootstrap", 
  "Next.js", "Haskell", "Vue.js", "Django", "AngularJS", "SCSS", "Go", "Electron.js", 
  "Git", "Linux", "Figma", "Raspberry Pi", "Eclipse", "Visual Studio", "Arduino", "Android Studio"
];

const Skills = () => {
  return (
    <div className="skills-container" id="skills">
      <h2 className="skills-heading">Skills</h2>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <div key={index} className="skill-badge">
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

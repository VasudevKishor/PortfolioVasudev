import React from "react";
import "./Experience.css";

const experiences = [
  {
    role: "Software Engineering Intern",
    company: "Triassic Solutions, Trivandrum, Kerala",
    duration: "April 2025 - Present",
    description:
      "Worked on real-life projects with technologies including MySQL, NoSQL, Django, Flask, Next.js, Node.js, React.js, TypeScript, JavaScript, and Python.",
  },
  {
    role: "Student Researcher",
    company: "Amrita Vishwa Vidyapeetham, Coimbatore, Tamil Nadu",
    duration: "February 2024 - Present",
    description:
      "",
  },
  {
    role: "Tech and Design Team Co-Head",
    company: "Genesis ’25",
    duration: "January 2025 - April 2025",
    description:
      "Co-led the Tech and Design team for Genesis ’25, overseeing technical execution and design strategies.",
  },
  {
    role: "Core Member",
    company: "IIC Amrita Chapter (Govt of India Initiative)",
    duration: "December 2024 - Present",
    description:
      "Contributed to the initiative’s projects and helped implement key technological solutions.",
  },
  {
    role: "USG (Under Secretary General)/ Head of Web & Technology Team",
    company: "Amrita MUN’25",
    duration: "April 2025 - Present",
    description:
      "Led the Web & Technology Team, managing the tech infrastructure and platform for Amrita MUN'25.",
  },
  {
    role: "Student core Team Member",
    company: "ACM Amrita Chapter",
    duration: "February 2025 - Present",
    description:
      "Worked on various technical initiatives and events within the ACM Amrita Chapter.",
  },
  {
    role: "Organizer",
    company: "IGNITE [College-level Business Fest]",
    duration: "November 2024 - December 2024",
    description:
      "Organized the IGNITE business fest, worked mainly on coordinating and maintaining the e-fair aspects.",
  },
  {
    role: "Media Team Lead",
    company: "Anokha 2024",
    duration: "October 2024",
    description:
      "Led the media team for Anokha 2024, creating content and handling social media presence for the event.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <h2 className="experience-title">Experience</h2>
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-card">
            <h3>{exp.role}</h3>
            <p className="company">{exp.company}</p>
            <p className="duration">{exp.duration}</p>
            <p className="description">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;

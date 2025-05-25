import React, { useEffect } from "react";
import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import Experience from "./Experience";
import Contact from "./Contact";
import Footer from "./Footer";
import './Layout.css'; // Import your layout styles

const Layout = () => {
  useEffect(() => {
    const sections = document.querySelectorAll('.section');
    
    const observerOptions = {
      root: null, // Observe in the viewport
      threshold: 0.1, // Trigger animation when 10% of the element is visible
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach(section => {
      observer.observe(section);
    });
  }, []);

  return (
    <div className="layout">
      <Header />
      <Hero />
      <About className="section" />
      <Projects className="section" />
      <Skills className="section" />
      <Experience className="section" />
      <Contact className="section" />
      <Footer className="section" />
    </div>
  );
};

export default Layout;

// About.jsx

import React from "react";
import Navbar from "./Navbar"; 
import "../Page Styles/About.css";

const AboutMe = () => {
  const handleResumeClick = () => {
    window.open("/resume.pdf", "_blank");
  };

  const handleProjectsClick = () => {
    window.location.href = "/projects";
  };

  return (
    <div className="about-me-page">
      <Navbar />
      <div className="content">
        <h1 className="title">ABOUT ME</h1>
        <div className="paragraphs">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit...
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit...
          </p>
        </div>
        <div className="photo-collage">
          <img src="/photos/profile.jpg" alt="Me" />
          <img src="/photos/cat.jpg" alt="Cat" />
          <img src="/photos/poke.jpg" alt="Food 1" />
          <img src="/photos/steak.jpg" alt="Food 2" />
          {/* Add more <img> tags for scrollable effect */}
        </div>
        <div className="bottom-buttons">
          <button onClick={handleProjectsClick}>PROJECTS →</button>
          <button onClick={handleResumeClick}>RESUME →</button>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

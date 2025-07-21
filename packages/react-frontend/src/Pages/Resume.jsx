//Resume.jsx
import React from "react";
import "../Page Styles/Resume.css";
import Navbar from "../Components/Navbar.jsx";
import resumePDF from "../../public/resume.pdf"; 

const Resume = () => {
  return (
    <div className="resume-page">
      <Navbar />
      <div className="resume-content">
        <h1 className="resume-heading">RESUME</h1>
        <div className="heading-underline"></div>
        <a href={resumePDF} className="download-button" download>
          DOWNLOAD <span className="download-icon">⬇️</span>
        </a>
      </div>
      <div className="resume-container">
          <iframe
            //src={`${resumePDF}#zoom=100`}
            className="resume-frame"
            title="Resume"
          />
        </div>
    </div>
  );
};

export default Resume;
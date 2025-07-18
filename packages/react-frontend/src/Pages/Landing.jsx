// Landing.jsx 

import React from "react";
import "../Page Styles/Landing.css";
import backgroundVideo from "../assets/videos/landing_background.mp4";

const Landing = () => {
  return (
    <div className="landing-container">
      <video className="background-video" autoPlay loop muted>
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="overlay-content">
        <h1 className="landing-name">WILL MAYER</h1>
        <h2 className="landing-title">SOFTWARE ENGINEER</h2>
        <p className="landing-cta">Click to Continue</p>
      </div>
    </div>
  );
};

export default Landing;
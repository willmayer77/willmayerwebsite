// About.jsx

import React from "react";
import Navbar from "../Components/Navbar.jsx"; 
import "../Page Styles/About.css";

//images import
import Headshot from "../assets/images/headshot.jpg";
import MeAndCat from "../assets/images/MeAndCat.jpeg";
import MeAndGrant from "../assets/images/MeAndGrant.jpeg";
import Dog from "../assets/images/Dog.jpeg";
import Food from "../assets/images/Food.jpg";
import MeAndSiena from "../assets/images/MeAndSiena.jpeg";
import BBQ from "../assets/images/BBQ.jpg";
import Camping from "../assets/images/Camping.jpeg";
import Cat1 from "../assets/images/Cat1.jpeg";
import Cat2 from "../assets/images/Cat2.jpeg";
import Ducks from "../assets/images/Ducks.jpg";
import Food2 from "../assets/images/Food2.jpg";
import Food3 from "../assets/images/Food3.jpg";
import Food4 from "../assets/images/Food4.jpg";
import Food5 from "../assets/images/Food5.jpg";
import Hawaiin from "../assets/images/Hawaiin.jpeg";
import MeAndRowan from "../assets/images/MeAndRowan.jpeg";
import MeAndSam from "../assets/images/MeAndSam.jpeg";
import Running from "../assets/images/Running.jpg";
import Snow1 from "../assets/images/Snow1.jpeg";
import Snow2 from "../assets/images/Snow2.jpeg";
import Spikeball from "../assets/images/Spikeball.jpg";

const About = () => {
  const handleResumeClick = () => {
    window.open("/resume.pdf", "_blank");
  };

  const handleProjectsClick = () => {
    window.location.href = "/projects";
  };

  return (
    <div className="about-me-page">
  <Navbar />
  <div className="title-container">
    <h1 className="title">ABOUT ME</h1>
    <div className="title-underline"></div>
  </div>

  <div className="about-body">
    <div className="paragraphs">
      <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
 </p>
      <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
 </p>
 <div className="bottom-buttons">
    <button onClick={handleProjectsClick}>PROJECTS →</button>
    <button onClick={handleResumeClick}>RESUME →</button>
  </div>
    </div>
    
    <div className="photo-collage-container">
      <div className="photo-collage">
          <img src= {Headshot} alt="Me" />
          <img src= {MeAndCat} alt="MeAndCat" />
          <img src= {MeAndGrant} alt="MeAndGrant" />
          <img src= {Dog} alt="Dog" />
          <img src= {BBQ} alt="BBQ" />
          <img src= {Camping} alt="Camping" />
          <img src= {Food} alt="Food" />
          <img src= {MeAndSiena} alt="MeAndSiena" />
          <img src= {Cat1} alt="Cat1" />
          <img src= {Cat2} alt="Cat2" />
          <img src= {Ducks} alt="Ducks" />
          <img src= {Food3} alt="Food3" />
          <img src= {Food4} alt="Food4" />
          <img src= {Food5} alt="Food5" />
          <img src= {MeAndRowan} alt="MeAndRowan" />
          <img src= {MeAndSam} alt="MeAndSam" />
          <img src= {Food2} alt="Food2" />
          <img src= {Running} alt="Running" />
          <img src= {Hawaiin} alt="Hawaiin" />
          <img src= {Snow1} alt="Snow1" />
          <img src= {Snow2} alt="Snow2" />
          <img src= {Spikeball} alt="Spikeball" />
      </div>
    </div>
  </div>
</div>
  );
};

export default About;

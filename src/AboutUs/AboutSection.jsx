import React from "react";
import "./AboutSection.css";
import aboutImage1 from "../assets/group.jpg";

const AboutSection = () => {
  return (
    <div className="about-section">
      <div className="about-text">
        <h1 className="about-heading">This is AI Learning Solution</h1>
        <p className="about-description">
          At AI Learning Solution, we simplify the complexity of business to create connections.
          We unlock the power of everyday customer interactions, turning them into extraordinary experiences.
        </p>
        <p className="about-description">
          Life is better when customer experiences are painless, frictionless, and more helpful.
        </p>
      </div>
      <div className="about-image">
        <img src={aboutImage1} alt="About Us" />
      </div>
    </div>
  );
};

export default AboutSection;

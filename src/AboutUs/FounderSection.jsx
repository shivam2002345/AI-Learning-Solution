import React from "react";
import "./FounderSection.css";
import aboutImage2 from "../assets/shalinipic.jpg";
import badge1 from "../assets/badge1.png"; // Replace with actual badge images
import badge2 from "../assets/badge2.png";
import badge3 from "../assets/badge3.png";
import badge4 from "../assets/badge4.png";
import badge5 from "../assets/badge5.png";
import badge6 from "../assets/badge6.png";
import badge7 from "../assets/badge7.png";
import badge8 from "../assets/badge8.png";

const FounderSection = () => {
  return (
    <div className="founder-section">
      {/* Left Side: Image */}
      <div className="founder-image">
        <img src={aboutImage2} alt="Founder" />
      </div>

      {/* Right Side: Intro and Badges */}
      <div className="founder-content">
        <div className="founder-text">
          <h1 className="founder-heading">Founder</h1>
          <h2>~Shalini Gupta</h2>
          <p className="founder-description">
            Shalini Gupta, a Microsoft Certified Trainer, has over 17 years of experience in IT training. She specializes in Microsoft Power Platform, BI, and diverse technologies, including programming languages, web development, big data, and machine learning. Passionate about teaching and learning, she delivers interactive, hands-on training programs tailored to her audience.
          </p>
        </div>

        {/* Badges Section */}
        <div className="badges-section">
          <h2 className="badges-heading">Achievements</h2>
          <div className="badges-grid">
            <img src={badge1} alt="Badge 1" />
            <img src={badge2} alt="Badge 2" />
            <img src={badge3} alt="Badge 3" />
            <img src={badge4} alt="Badge 4" />
            <img src={badge5} alt="Badge 5" />
            <img src={badge6} alt="Badge 6" />
            <img src={badge7} alt="Badge 7" />
            <img src={badge8} alt="Badge 8" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FounderSection;

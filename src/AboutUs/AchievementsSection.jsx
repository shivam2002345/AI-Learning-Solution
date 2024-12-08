import React from "react";
import "./AchievementsSection.css";
import badge1 from "../assets/badge1.png";
import badge2 from "../assets/badge2.png";
// Add other badge imports

const AchievementsSection = () => {
  return (
    <div className="achievements-section">
      <h1 className="achievements-heading">Our Achievements</h1>
      <p className="achievements-description">
        We've achieved remarkable milestones, recognized by industry leaders, making a meaningful impact.
      </p>
      <div className="achievements-grid">
        <img src={badge1} alt="Badge 1" />
        <img src={badge2} alt="Badge 2" />
        {/* Add other badges */}
      </div>
    </div>
  );
};

export default AchievementsSection;

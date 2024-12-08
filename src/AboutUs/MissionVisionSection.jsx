import React from "react";
import "./MissionVisionSection.css";


const MissionVisionSection = () => {
  return (
    <div className="vision-mission-section">
      {/* Full background image */}
      <div className="vision-mission-image">
        {/* Overlay Rectangle with Mission and Vision */}
        <div className="vision-mission-overlay">
          <h1>We believe in what people make possible</h1>
          <p>
            Our mission is to empower every person and every organization on
            the planet to achieve more.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MissionVisionSection;


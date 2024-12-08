import React, { useState, useEffect } from "react";
import "./HeroSection.css";
import heroImage from "../../assets/hero.jpg"; // Adjust path as needed

const HeroSection = () => {
  const [visibleHeading, setVisibleHeading] = useState(0);

  // Cycle between headings every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleHeading((prev) => (prev === 0 ? 1 : 0)); // Toggle index
    }, 3000);
    return () => clearInterval(interval); // Cleanup
  }, []);

  return (
    <div className="hero-section">
      <img src={heroImage} alt="Hero Background" className="hero-image" />
      <div className="hero-overlay">
        {/* Heading Container */}
        <div className="hero-heading-container">
          <h1
            className={`hero-heading ${
              visibleHeading === 0 ? "visible" : "hidden"
            }`}
          >
            Master Tomorrow’s Tech Today – <br />Power Up with AI Learning Solutions!
          </h1>
          <h1
            className={`hero-heading ${
              visibleHeading === 1 ? "visible" : "hidden"
            }`}
          >
            Explore Cutting-Edge Courses to <br /> Transform Your Career!
            <br />
          </h1>
        </div>
        <button className="hero-button">Explore our Webinars!</button>
      </div>
    </div>
  );
};

export default HeroSection;
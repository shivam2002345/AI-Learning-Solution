import React from "react";
import "./OurCompaniesSection.css";
import yttaLogo from "../assets/yttalogo.png"; // Replace with YTTA logo path
import ailsLogo from "../assets/ails.jpg"; // Replace with AILS logo path

const OurCompaniesSection = () => {
  return (
    <div className="our-companies-section">
      <h1 className="section-title">Our Initiatives</h1>
      <p className="section-subtitle">
        We’re committed to providing innovative training solutions for learners of all ages through our two companies.
      </p>
      <div className="companies-container">
        {/* YTTA Section */}
        <div className="company-card">
          <img src={yttaLogo} alt="YTTA Logo" className="company-logo" />
          <h2>YTTA</h2>
          <p className="company-description">
            <strong>Young Technical Training Academy (YTTA)</strong> is designed to inspire school students to explore and excel in technology. 
            We focus on foundational skills in programming, robotics, and digital literacy tailored for young learners.
          </p>
        </div>
        {/* AILS Section */}
        <div className="company-card highlighted">
          <img src={ailsLogo} alt="AILS Logo" className="company-logo" />
          <h2>AILS</h2>
          <p className="company-description">
            <strong>AI Learning Solutions (AILS)</strong> empowers college students and professionals with cutting-edge training in 
            AI, data science, programming, and advanced technologies. This platform is dedicated to transforming your professional journey.
          </p>
        </div>
      </div>
      <p className="focused-message">
        This website is exclusively designed for <strong>AILS</strong>. Explore our programs tailored for college students and professionals.
      </p>
    </div>
  );
};

export default OurCompaniesSection;

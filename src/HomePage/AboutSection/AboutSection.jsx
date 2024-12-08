import React from "react";
import "./AboutSection.css";
import robotImage from "../../assets/aboutus-image.png"; // Replace with your image path

const AboutSection = () => {
  return (
    <div className="homeabout-section">
      <div className="about-content">
        <h2 className="homeabout-heading">About Us</h2>
        <p className="about-text">
          AI Learning Solutions is your trusted partner in mastering Microsoft
          technologies. We offer specialized courses, webinars, and training in
          Power BI, Azure, and other tools to help you stay ahead in the
          tech-driven world.
        </p>
        <p className="about-text">
          Our flexible programs are designed for all skill levels, providing
          hands-on learning led by certified experts. Whether you're upskilling,
          pursuing certifications, or advancing your career, we're here to
          empower your journey.
        </p>
        <p className="about-text">
          Transform your potential with us and unlock new opportunities today!
        </p>
        <button className="about-button">know more...</button>
      </div>
      <div class="homeabout-image">
  <div class="light-rays"></div> 
  <img src={robotImage} alt="Robot holding a bulb" />
</div>
    </div>
  );
};

export default AboutSection;

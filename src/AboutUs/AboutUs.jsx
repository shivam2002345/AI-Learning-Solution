import React from "react";
import AboutSection from "./AboutSection";
import FounderSection from "./FounderSection";
import MissionVisionSection from "./MissionVisionSection";
import "./AboutUs.css";
import OurCompaniesSection from "./OurCompaniesSection";

const AboutUs = () => {
  return (
    <div className="aboutUs-page">
      <AboutSection />
      <FounderSection />
      <MissionVisionSection />
      <OurCompaniesSection />
    </div>
  );
};

export default AboutUs;

import React, { useEffect, useState, useMemo } from "react";
import "./Webinar.css";
import webinar1 from "../../assets/webinar-1.jpg";
import webinar2 from "../../assets/webinar-2.jpg";
import webinar3 from "../../assets/webinar-3.jpg";
import webinar4 from "../../assets/webinar-4.jpg";
import webinar5 from "../../assets/webinar-5.jpg";
import webinar6 from "../../assets/webinar-6.jpg";

const Webinars = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const webinars = useMemo(() => [
    { id: 1, title: "Learn Power BI", image: webinar1, description: "Discover the power of data visualization..." },
    { id: 2, title: "Business Strategy", image: webinar2, description: "Discover strategies for success..." },
    { id: 3, title: "Marketing Mastery", image: webinar3, description: "Master digital marketing techniques..." },
    { id: 4, title: "AI and Analytics", image: webinar4, description: "Learn AI-driven analytics methods..." },
    { id: 5, title: "Startup Secrets", image: webinar5, description: "Startup strategies and funding tips..." },
    { id: 6, title: "Leadership Skills", image: webinar6, description: "Develop key leadership skills..." },
  ], []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 3) % webinars.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [webinars.length]);

  const visibleWebinars = useMemo(() => {
    return webinars.slice(currentIndex, currentIndex + 3);
  }, [currentIndex, webinars]);

  return (
    <div className="webinars-section">
      <h2 className="webinars-heading">UPCOMING WEBINARS</h2>
      <div className="webinars-carousel">
        <div className="webinars-grid">
          {visibleWebinars.map((webinar) => (
            <div key={webinar.id} className="webinar-card">
              <div className="image-container">
                <img src={webinar.image} alt={webinar.title} className="webinar-image" loading="lazy" />
              </div>
              <div className="webinar-details">
                <h3 className="webinar-title">{webinar.title}</h3>
                <p className="webinar-description">{webinar.description}</p>
                <button className="register-button">Register</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button className="explore-button">Explore All</button>
    </div>
  );
};

export default Webinars;

import React from "react";
import "./WebinarCard.css";
import WebinarImage from "../../assets/webinar_card.png"; // Replace with your image path

const webinars = [
  {
    title: "Learn POWER BI !",
    description:
      "Discover the power of data with our Power BI Webinar! Learn to transform raw data into actionable insights through dynamic dashboards and reports, guided by industry experts.",
    date: "November",
    time: "8:00 PM IST",
    duration: "1:00 hour",
    status: "UPCOMING",
    image: WebinarImage,
  },
  {
    title: "Learn Data Analytics !",
    description:
      "Get insights into data analytics techniques and tools to help you make data-driven decisions in your business.",
    date: "December",
    time: "6:00 PM IST",
    duration: "1:30 hours",
    status: "UPCOMING",
    image: WebinarImage,
  },
  {
    title: "Learn Microsoft 365 !",
    description:
      "Get insights into data analytics techniques and tools to help you make data-driven decisions in your business.",
    date: "December",
    time: "6:00 PM IST",
    duration: "1:30 hours",
    status: "UPCOMING",
    image: WebinarImage,
  },
];

const WebinarCard = () => {
  return (
    
    <div className="webinar-section">
      <h1>Our Webinars</h1>
      
      {webinars.map((webinar, index) => (
        <div
          className={`webinar-card ${
            index % 2 === 0 ? "webinar-card-normal" : "webinar-card-reverse"
          }`}
          key={index}
        >
          <div className="webinar-side webinar-details">
            <button className="status">{webinar.status}</button>
            <h3>{webinar.date}</h3>
            <p>{webinar.time}</p>
            <p>{webinar.duration}</p>
          </div>

          <div className="webinar-center webinar-content">
            <h2>{webinar.title}</h2>
            <p>{webinar.description}</p>
            <button className="register-btn">Register Now</button>
          </div>

          <div className="webinar-side webinar-image">
            <img src={webinar.image} alt={webinar.title} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default WebinarCard;
import React from "react";
import "./Deliveries.css";
import onlineIcon from "../../assets/online-icon.png"; // Replace with actual paths
import oneOnOneIcon from "../../assets/offline-icon.png";
import locationIcon from "../../assets/BTL-3.png";
import flexiIcon from "../../assets/cunstomized.png";

const deliveries = [
  {
    id: 1,
    title: "Live Online Training",
    icon: onlineIcon,
    description: "Join live, interactive sessions from anywhere.",
  },
  {
    id: 2,
    title: "1-on-1 Training",
    icon: oneOnOneIcon,
    description: "Personalized sessions tailored to your needs.",
  },
  {
    id: 3,
    title: "Bring Trainer to Your Location",
    icon: locationIcon,
    description: "Let us bring our expert trainers to your workplace.",
  },
  {
    id: 4,
    title: "Flexi",
    icon: flexiIcon,
    description: "Flexible learning at your own pace and convenience.",
  },
];

const Deliveries = () => {
  return (
    <div className="deliveries-section">
      <h2 className="deliveries-heading">Delivery Methods</h2>
      <div className="deliveries-grid">
        {deliveries.map((delivery) => (
          <div key={delivery.id} className="delivery-card">
            <div className="icon-container">
              <img
                src={delivery.icon}
                alt={delivery.title}
                className="delivery-icon"
              />
            </div>
            <h3 className="delivery-title">{delivery.title}</h3>
            <p className="delivery-description">{delivery.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Deliveries;

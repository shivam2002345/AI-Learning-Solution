import React from "react";
import "./OfferingsCard.css";

const OfferingsCard = ({ offering, animationType }) => {
  return (
    <div className={`offerings-card ${animationType}`}>
      <img src={offering.image} alt={offering.title} className="card-image" />
      <div className="card-content">
        <h3>{offering.title}</h3>
      </div>
    </div>
  );
};

export default OfferingsCard;

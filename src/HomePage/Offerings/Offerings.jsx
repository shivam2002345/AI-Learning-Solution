import React, { useEffect, useState } from "react";
import "./Offerings.css";
import OfferingsCard from "./OfferingsCard";
import quench from '../../assets/quench.jpg'
import ignite from '../../assets/ignite.jpeg'
import long from '../../assets/long.jpg'
import custom from '../../assets/custom.jpg'

const Offerings = () => {
  const offerings = [
    {
      id: 1,
      title: "Quench Your Technical Thirst with Our One Day Programs",
      image: quench,
    },
    {
      id: 2,
      title: "Ignite Your Skills with Our Short-Term Courses",
      image: ignite,
    },
    {
      id: 3,
      title: "Satisfy your Learning hunger with our mouthwatering main courses",
      image: long,
    },
    {
      id: 4,
      title: "Tailor your experience with our custom programs, curated just for you",
      image: custom,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % offerings.length);
    }, 4000); // Change every 4 seconds
    return () => clearInterval(interval);
  }, [offerings.length]);

  const getVisibleCards = () => {
    const firstCard = currentIndex;
    const secondCard = (currentIndex + 1) % offerings.length;
    return [offerings[firstCard], offerings[secondCard]];
  };

  const visibleCards = getVisibleCards();

  return (
    <div className="offerings-section">
      <h2 className="offerings-heading">OUR OFFERINGS</h2>
      <div className="offerings-wrapper">
        {visibleCards.map((offering, index) => (
          <OfferingsCard
            key={offering.id}
            offering={offering}
            animationType={index === 0 ? "zoom-out" : "zoom-in"}
          />
        ))}
      </div>
    </div>
  );
};

export default Offerings;

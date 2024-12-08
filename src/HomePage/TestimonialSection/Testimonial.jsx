import React, { useState, useEffect } from "react";
import "./Testimonial.css";
import avatar1 from "../../assets/avatar1.jpg"; // Replace with actual image paths
import avatar2 from "../../assets/avatar2.jpg";
import avatar3 from "../../assets/avatar3.png";
import avatar4 from "../../assets/avatar4.png";


const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      image: avatar1,
      feedback:
        "I had the pleasure of using this form for our customer feedback process, and I must say, the experience has been fantastic.",
    },
    {
      id: 2,
      name: "Jane Smith",
      image: avatar2,
      feedback:
        "This tool has been an absolute game-changer for our team. The process was seamless and easy to implement.",
    },
    {
      id: 3,
      name: "Alice Johnson",
      image: avatar3,
      feedback:
        "Highly recommended! It's user-friendly, and the results were far beyond what we expected.",
    },
    {
      id: 4,
      name: "Mark Taylor",
      image: avatar4,
      feedback:
        "Our productivity has increased significantly thanks to this tool. The support team was fantastic as well!",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 2) % testimonials.length);
    }, 5000); // 5 seconds for each transition
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const visibleTestimonials = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length],
  ];

  return (
    <div className="testimonial-section">
      <h2 className="testimonial-heading">TESTIMONIALS</h2>
      <div className="testimonial-slider">
        <div className="testimonial-wrapper">
          {visibleTestimonials.map((testimonial, index) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-image-container">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="testimonial-image"
                />
              </div>
              <p className="testimonial-feedback">{testimonial.feedback}</p>
              <p className="testimonial-name">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

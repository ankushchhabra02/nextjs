// ImageSlider.js
import React, { useState, useEffect } from "react";
import wall1 from "../Assets/Images/wall/wall1.jpg";
import wall2 from "../Assets/Images/wall/wall2.jpg";
import wall3 from "../Assets/Images/wall/wall3.jpg";
import "./Slider.css";

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    wall1,
    wall2,
    wall3,
    // Add more image paths as needed
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 2000); // Change the interval time as needed

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="a">
      <div className="image-slider-container">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`slide ${index + 1}`}
            className={`image ${index === currentSlide ? "image-visible" : ""}`}
            style={{
              transform: `translateX(${-100 * currentSlide}%)`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;

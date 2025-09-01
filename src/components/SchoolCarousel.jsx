import React, { useState, useEffect } from "react";
import thalesimage from "../assets/thalesimage.jpg";
import thales from "../assets/thalesproject.jpg";
import "../styles/SchoolCarousel.css"; // CSS styles

const photos = [
  thalesimage,
  thales,
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-6hc9c2pOdcqDHLfxU-EY86w2CnUXcqSGxw&s",
];

const SchoolCarousel = () => {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((index - 1 + photos.length) % photos.length);
  const next = () => setIndex((index + 1) % photos.length);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % photos.length);
    }, 3000); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="carousel-container">
      <div className="carousel-slide">
        <img src={photos[index]} alt="School" className="carousel-image" />
      </div>
      <div className="carousel-buttons">
        <button className="carousel-btn" onClick={prev}>⬅ Prev</button>
        <button className="carousel-btn" onClick={next}>Next ➡</button>
      </div>
      <div className="carousel-dots">
        {photos.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === index ? "active" : ""}`}
            onClick={() => setIndex(i)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default SchoolCarousel;

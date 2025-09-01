import React from "react";
import "../styles/SchoolInfo.css"; // Import CSS

const SchoolInfo = () => {
  return (
    <div className="school-info">
      <img
        src="https://i.ytimg.com/vi/sr6w1Ja8pQo/maxresdefault.jpg"
        alt="Thales School"
        className="school-logo"
      />
      <h1>Thales International School</h1>
      <p>
        Located in the heart of France, Thales International School is committed
        to academic excellence, cultural diversity, and holistic development of
        every student. Our school fosters innovation, creativity, and values that
        prepare students for global opportunities.
      </p>
    </div>
  );
};

export default SchoolInfo;

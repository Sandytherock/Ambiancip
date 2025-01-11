import React from 'react';
import './SchoolCardByr.css';

function SchoolCardByr({ image, title, alt }) {
  return (
    <div className="school-card-byr">
      <div className="school-image-byr">
        <img src={image} alt={alt} />
      </div>
      <div className="school-title-byr">
        <h2>{title}</h2>
      </div>
    </div>
  );
}

export default SchoolCardByr;


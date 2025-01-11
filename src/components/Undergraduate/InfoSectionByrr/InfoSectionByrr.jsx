import React from 'react';
import './InfoSectionByrr.css';

const InfoSectionByrr = ({ title, description, link }) => {
  return (
    <div className="info-section-byrr">
      <a href={link} className="info-title-byrr">
        {title}
      </a>
      <p className="info-description-byrr">{description}</p>
    </div>
  );
};

export default InfoSectionByrr;


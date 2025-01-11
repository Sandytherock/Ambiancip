import React from 'react';
import './StateCardByrrr.css';

const StatCardByrrr = ({ number, description }) => {
  return (
    <div className="stat-card-byrrr">
      <span className="number-byrrr">{number}</span>
      <p className="description-byrrr">{description}</p>
    </div>
  );
};

export default StatCardByrrr;


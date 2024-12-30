import React from 'react';
import './AnnualResearch.css';
import nano_room from '../../../assets/nano-room.jpg';
const AnnualResearch = () => {
  return (
    
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">

          <h2>Research at Penn</h2>
          <p>
            As one of the top research universities in the world, Penn generates
            important new knowledge in medicine, technology, business, social science,
            humanities, and beyond, and applies this knowledge to improve the lives of
            individuals and communities at home and around the globe.
          </p>
          <p className="italic">
            Research at Penn is an annual publication that highlights some of the groundbreaking
            and innovative research happening across the University's 12 schools.
          </p>
          <a href="#download" className="download-link">
            Download the PDF
          </a>
        </div>
        <div className="hero-image">
          <img 
            src={nano_room}
            alt="Researcher in protective gear working in a laboratory"
          />
        </div>
      </div>
    </section>
  );
};

export default AnnualResearch;


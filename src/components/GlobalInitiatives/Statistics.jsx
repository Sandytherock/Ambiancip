import React from "react";
import "./Statistics.css";

const Statistics = () => {
  const stats = [
    {
      number: "32,200+",
      description: "Penn alumni located abroad",
    },
    {
      number: "6,900+",
      description: "International students study at Penn",
    },
    {
      number: "2,600+",
      description:
        "Penn students study abroad, on average, on credit-bearing programs annually",
    },
    {
      number: "1,400+",
      description:
        "Penn faculty work abroad in more than 190 countries and on all seven continents",
    },
  ];

  return (
    <div className="statistics-container">
      <div className="statistics-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-item">
            <h2 className="stat-number">{stat.number}</h2>
            <p className="stat-description">{stat.description}</p>
          </div>
        ))}
      </div>
      <button className="engagement-button">PENN GLOBAL ENGAGEMENT MAP</button>
    </div>
  );
};

export default Statistics;

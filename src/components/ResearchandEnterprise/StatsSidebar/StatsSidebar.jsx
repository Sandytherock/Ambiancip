import React from 'react';
import './StatsSidebar.css';

export function StatsSidebar() {
  const stats = [
    { number: '5,000', description: 'research faculty members' },
    { number: '195', description: 'research centers and institutes' },
    { number: '1,300', description: 'postdoctoral fellows' },
    { number: '$1.37B', description: 'in research funding' }
  ];

  return (
    <div className="stats-sidebar">
      <h2 className="stats-title">Research Facts & Figures</h2>
      {stats.map((stat, index) => (
        <div key={index} className="stat-item">
          <div className="stat-number">{stat.number}</div>
          <div className="stat-description">{stat.description}</div>
        </div>
      ))}
    </div>
  );
}


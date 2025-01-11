import React from 'react';
import StatCardByrrr from '../StateCardByrrr/StateCardByrrr';
import './StateGridByrrr.css';

const StatGridByrrr = () => {
  const stats = [
    {
      number: '7,406',
      description: 'undergraduate students enrolled at the College.'
    },
    {
      number: '1,810',
      description: 'undergraduate students enrolled at Penn Engineering.'
    },
    {
      number: '599',
      description: 'undergraduate students enrolled at Penn Nursing.'
    },
    {
      number: '1,796',
      description: 'students in the incoming class.'
    },
    {
      number: '8:1',
      description: 'student-to-faculty ratio.'
    },
    {
      number: '90',
      description: 'percent of students graduate within 4 years.'
    }
  ];

  return (
    <div className="stats-container-byrrr">
      <h1 className="title-byrrr">Undergraduate Facts</h1>
      <div className="stats-grid-byrrr">
        {stats.map((stat, index) => (
          <div key={index} className="stat-item-byrrr">
            <StatCardByrrr number={stat.number} description={stat.description} />
            {index !== stats.length - 1 && <div className="divider-byrrr" />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatGridByrrr;


import React from 'react';
import SchoolCardByr from '../SchoolCardByr/SchoolCardByr';
import './SchoolListByr.css';

function SchoolListByr() {
  const schools = [
    {
      title: 'College of Arts & Sciences',
      image: '/images/arts-sciences.jpg',
      alt: 'College of Arts & Sciences Building'
    },
    {
      title: 'The Wharton School',
      image: '/images/wharton.jpg',
      alt: 'Wharton School Building'
    },
    {
      title: 'School of Engineering and Applied Science',
      image: '/images/engineering.jpg',
      alt: 'Engineering School Building'
    },
    {
      title: 'School of Nursing',
      image: '/images/nursing.jpg',
      alt: 'School of Nursing Building'
    }
  ];

  return (
    <div className="school-list-byr">
      {schools.map((school, index) => (
        <SchoolCardByr
          key={index}
          title={school.title}
          image={school.image}
          alt={school.alt}
        />
      ))}
    </div>
  );
}

export default SchoolListByr;


import React from 'react';
import ImageCard from '../ImageCard/ImageCard';
import './ResearchCentre.css';
import pennovation from '../../../../assets/pennovation-aerial.jpg';
import microscope from '../../../../assets/research-microscope.jpg';
const ResearchCenters = () => {
  const centers = [
    {
      image: pennovation,
      title: 'Penn Center for Innovation',
      description: 'PCI works in partnership with Penn faculty, staff, and students to advance scientific breakthroughs and technological advances toward new products, services, and/or businesses that provide benefits back to Penn, its inventors, and society.'
    },
    {
      image: microscope,
      title: 'Center for Undergraduate Research and Fellowships',
      description: 'CURF supports students as they pursue transformative experiences through fellowships, scholars programs, and undergraduate research. CURF promotes connections between faculty and students, encourages mentorship, and educates the Penn community about opportunities.'
    }
  ];

  return (
    <div className="research-centers">
      {centers.map((center, index) => (
        <ImageCard
          key={index}
          image={center.image}
          title={center.title}
          description={center.description}
        />
      ))}
    </div>
  );
};

export default ResearchCenters;


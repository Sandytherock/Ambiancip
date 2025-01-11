import React from 'react';
import HeaderByrr from '../HeaderByrr/HeaderByrr';
import InfoSectionByrr from '../InfoSectionByrr/InfoSectionByrr';
import ImageCardByrr from '../ImageCardByrr/ImageCardByrr';
import './LayoutByrr.css';

const LayoutByrr = () => {
  const sections = [
    {
      title: 'Dual Degree',
      description: 'Supported by dedicated faculty advisers, students may pursue more than one Penn degree, still graduate in four years, and enjoy an active life beyond the classroom.',
      link: '#'
    },
    {
      title: 'University Catalog',
      description: 'Find detailed information about traditional undergraduate programs at Penn as well as important academic policies and resources.',
      link: '#'
    },
    {
      title: 'A-Z Listing of Programs',
      description: 'Discover programs offered for academic credit. Interested users can narrow results by academic level and school.',
      link: '#'
    }
  ];

  return (
    <div className="layout-container-byrr">
      <div className="left-content-byrr">
        <HeaderByrr />
        {sections.map((section, index) => (
          <InfoSectionByrr
            key={index}
            title={section.title}
            description={section.description}
            link={section.link}
          />
        ))}
      </div>
      <div className="right-content-byrr">
        <ImageCardByrr
          image="/placeholder.svg"
          title="What every first-year needs to know: Student tour guides offer tips, advice"
          description="A half-dozen student tour guides share a few things they wish they'd known as they started at Penn."
        />
      </div>
    </div>
  );
};

export default LayoutByrr;


import React from 'react';
import './UniversityPageForl.css';
import CardGridForl from '../CardGridForl/CardGridForl';
import CardForl from '../CardForl/CardForl';

function UniversityPageForl() {
  const cardDataForl = [
    {
      title: "Undergraduate Admissions",
      description: "The college application process is a meaningful journey that encourages you to reflect on yourself, your community, and your interests. Your voice matters, and we can't wait to hear your story.",
      image: "/images/admissions.jpg",
      isUnderlined: false
    },
    {
      title: "Undergraduate Aid Program",
      description: "Penn is the largest university with a program that enables eligible undergraduates to receive grant-based financial aid packages for eight semesters. The program applies to traditional, dependent students in the four undergraduate schools, who are pursuing their first baccalaureate degree.",
      image: "/images/aid.jpg",
      isUnderlined: true
    },
    {
      title: "President's Innovation Prize",
      description: "President's Innovation Prize awards a graduating Penn senior, or a team of graduating seniors, to envision and implement an innovative, commercial venture that makes a positive difference in the world.",
      image: "/images/innovation.jpg",
      isUnderlined: false
    },
    {
      title: "President's Engagement Prize",
      description: "Competitively awarded on an annual basis, the President's Engagement Prizes empower Penn seniors to design and undertake local, national, or global engagement projects during the first year after they graduate.",
      image: "/images/engagement.jpg",
      isUnderlined: true
    }
  ];

  return (
    <div className="university-container-forl">
      <CardGridForl>
        {cardDataForl.map((card, index) => (
          <CardForl
            key={index}
            title={card.title}
            description={card.description}
            image={card.image}
            isUnderlined={card.isUnderlined}
          />
        ))}
      </CardGridForl>
    </div>
  );
}

export default UniversityPageForl;


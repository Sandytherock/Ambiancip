import React from 'react';
import Title from './Title';
import ContentText from './ContentText';
import Link from './Link';
import Tag from './Tag';
import ContactPanel from './ContactPanel';
import './MainContent.css';

export function MainContent () {
  return <div className="container">
    <main className="main-content">
      <Title>Office of the Vice Provost for Research</Title>
      <ContentText>
        The <Link href="#">Vice Provost for Research</Link> is an adviser to the Provost and has oversight of the 
        University's vast research enterprise, encompassing a broad spectrum of research 
        support services, <Tag>regulatory</Tag> bodies, multi-disciplinary campus-wide Centers and 
        Institutes, and partnerships to further develop investigator inventions. OVPR 
        collaborates with Penn constituents and external partners to promote meaningful 
        scholarship, uphold research integrity, and foster new discoveries.
      </ContentText>
      
      <Title className="institutes-title">Centers & Institutes</Title>
      <ContentText>
        The investigative collaborations that take place at Penn represent some of today's most cutting-edge 
        interdisciplinary research. Explore the centers and institutes that are generating new knowledge all over 
        campus, and learn about the powerful impact this Penn-generated knowledge is making in all corners of 
        the world.
      </ContentText>
      <Title className="institutes-title">Compliance & Training</Title>
      <ContentText>
      OVPR is charged with oversight responsibility for multiple regulatory compliance areas at Penn. Given the breadth of regulations and guidelines, research compliance is a shared responsibility between numerous University offices.
      </ContentText>
      <Title className="institutes-title">Funding</Title>
      <ContentText>
      OVPR manages a number of internal funding opportunities on behalf of the University as well as access to external funding opportunities.
      </ContentText>
      <Title className="institutes-title">Research Excellence Initiative</Title>
      <ContentText>
      The Penn Research Excellence Initiative, spearheaded by OVPR, is a program that supports research credibility and integrity on Penn’s campus and across the Philadelphia region.
      </ContentText>
      <Title className="institutes-title">Services For Researchers (Research Portal)</Title>
      <ContentText>
      Penn's Research Portal is a centralized compendium of University-wide research-related links.
      </ContentText>
    </main>
    <ContactPanel />
  </div>
};


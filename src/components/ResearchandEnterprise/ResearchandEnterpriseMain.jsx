import React from 'react'
import styles from './ResearchandEnterprise.module.css'
import Breadcrumb from '../ResearchandInnovation/breadcrum/breadcrum'
import HeroSection from '../ResearchandInnovation/hero-section/hero-section'
import ImageSection from '../ResearchandInnovation/image-section/image-section'
import { StatsSidebar } from './StatsSidebar/StatsSidebar'
import { Header } from './EnterpriseHeader/Header'
import { LinkSection } from './LinkSection/LinkSection'
import FacilityCard from './FacilityCard/FacilityCard'
import MainContent from './CollapseMainContext/MainContext'
import Contact from './CollapseContact/Contact'

function ResearchandEnterpriseMain() {
  const breadcrumbItems = [
    { label: 'HOME', href: '/' },
    { label: 'RESEARCH & INNOVATION', href: '/research-and-innovation' },
    { label: "PENN'S RESEARCH ENTERPRISE", href: '/research-and-innovation/research-enterprise' },
  ]
  
  const RESEARCH_DESCRIPTION = "With an innovative and interdisciplinary mindset, Penn places a strong emphasis on encouraging and enabling any student to carry out research. It’s an ecosystem strategically created to help foster ideas, provide the resources to help build them up, and then take them from labs to commercialization."

  const sections = [
    {
      title: "President's Engagement Prizes",
      description: "Competitively awarded on an annual basis, the President's Engagement Prizes empower Penn seniors to design and undertake local, national, or global engagement projects during the first year after they graduate.",
      link: "#"
    },
    {
      title: "President's Innovation Prize",
      description: "President's Innovation Prize awards a graduating Penn senior, or a team of graduating seniors, to envision and implement an innovative, commercial venture that makes a positive difference in the world.",
      link: "#"
    },
    {
      title: "Center for Undergraduate Research & Fellowships",
      description: "Penn CURF helps Penn students deepen their academic experience through participating in research, applying for nationally competitive fellowships, or engaging intellectually within a cohort of scholars.",
      link: "#"
    },
    {
      title: "Venture Lab - Innovation Fund",
      description: "",
      link: "#"
    }
  ];


  return (
    <div>
    <div className={styles.container}>
    <Breadcrumb items={breadcrumbItems} />
    <div className={styles.content}>
      <div className={styles.textContent}>
        <HeroSection 
          title="Penn’s Research Enterprise
          "
          description={RESEARCH_DESCRIPTION}
        />
      </div>
      
      <div className={styles.imageContent}>
        <ImageSection
          src={''}
          alt="Researcher working in a laboratory with purple lighting"
        />
      </div>
      </div>

      <div className="app">
      <div className="content">
        <main className="main">
          <Header />
          {sections.map((section, index) => (
            <LinkSection
              key={index}
              title={section.title}
              description={section.description}
              link={section.link}
            />
          ))}
        </main>
        <aside className="sidebar">
          <StatsSidebar />
        </aside>
      </div>
    </div>
    <Header />
      <main className={styles.facilityMain}> 
        <FacilityCard
          title="Pennovation Center"
          description="The 58,000-square-foot anchor to the Pennovation Works campus, the Pennovation Center is a business incubator and laboratory that aligns and integrates researchers, innovators, and entrepreneurs for the commercialization of research discoveries."
          imageUrl="/pennovation-center.jpg"
          imageAlt="Pennovation Center building exterior"
        />
         <FacilityCard
          title="Pennovation Center"
          description="The 58,000-square-foot anchor to the Pennovation Works campus, the Pennovation Center is a business incubator and laboratory that aligns and integrates researchers, innovators, and entrepreneurs for the commercialization of research discoveries."
          imageUrl="/pennovation-center.jpg"
          imageAlt="Pennovation Center building exterior"
        />
         <FacilityCard
          title="Pennovation Center"
          description="The 58,000-square-foot anchor to the Pennovation Works campus, the Pennovation Center is a business incubator and laboratory that aligns and integrates researchers, innovators, and entrepreneurs for the commercialization of research discoveries."
          imageUrl="/pennovation-center.jpg"
          imageAlt="Pennovation Center building exterior"
        />
         <FacilityCard
          title="Pennovation Center"
          description="The 58,000-square-foot anchor to the Pennovation Works campus, the Pennovation Center is a business incubator and laboratory that aligns and integrates researchers, innovators, and entrepreneurs for the commercialization of research discoveries."
          imageUrl="/pennovation-center.jpg"
          imageAlt="Pennovation Center building exterior"
        />
         <FacilityCard
          title="Pennovation Center"
          description="The 58,000-square-foot anchor to the Pennovation Works campus, the Pennovation Center is a business incubator and laboratory that aligns and integrates researchers, innovators, and entrepreneurs for the commercialization of research discoveries."
          imageUrl="/pennovation-center.jpg"
          imageAlt="Pennovation Center building exterior"
        />
       
      </main>
      <Header />
      <div className="content-wrapper">
        <MainContent />
        <Contact />
      </div>
  </div>
  </div>
  )
}

export default ResearchandEnterpriseMain
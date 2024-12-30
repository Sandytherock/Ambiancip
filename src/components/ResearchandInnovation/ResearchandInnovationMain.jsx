import Breadcrumb from "./breadcrum/breadcrum";
import HeroSection from "./hero-section/hero-section";
import ImageSection from "./image-section/image-section";
import styles from './ResearchandInnovationMain.module.css';
import Research from "../../assets/Research_image.png"
import ResearchFacts from "./facts/research-facts";
import { MainContent } from './Contact/MainContent';
import ReportingDivisions from "./Gridstuff/ReportingDevision/ReportingDevision";
import ResearchCenters from "./ImageandInfo/ResearchCentre/ResearchCentre";
import AnnualResearch from "./AnnualResearch/AnnualResearch";
import AnnualHeader from "./AnnualResearch/AnnualHeader";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";




const RESEARCH_DESCRIPTION = `With more than $1.37 billion in annual R&D expenditures, Penn is one of the nation's top 
research universities, not only generating important new knowledge in the fields of medicine, 
technology, business, science, and beyond, but applying this knowledge to improve the lives of 
individuals and communities at home and around the world. Innovative research that yields 
actionable knowledge is one of the cornerstones of Penn's vision for the future of the University.`

function ResearchandInnovationMain() {
  const breadcrumbItems = [
    { label: 'HOME', href: '/' },
    { label: 'RESEARCH & INNOVATION', href: '/research-and-innovation' },
  ]

  return (
    <>
      <Header />
      <div className={styles.container}>
        <Breadcrumb items={breadcrumbItems} />

        <div className={styles.content}>
          <div className={styles.textContent}>
            <HeroSection
              title="Research & Innovation"
              description={RESEARCH_DESCRIPTION}
            />
          </div>
          <div className={styles.imageContent}>
            <ImageSection
              src={Research}
              alt="Researcher working in a laboratory with purple lighting"
            />
          </div>
        </div>
        <ResearchFacts />
        <MainContent />
        <ReportingDivisions />
        <ResearchCenters />
        <AnnualHeader />
        <AnnualResearch />
      </div>
      <Footer />
    </>

  );

}
export default ResearchandInnovationMain;


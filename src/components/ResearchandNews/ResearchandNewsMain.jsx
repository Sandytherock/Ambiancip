import React from 'react'
import Breadcrumb from '../ResearchandInnovation/breadcrum/breadcrum'
import styles from './ResearchandNewsMain.module.css'
import HeroSection from '../ResearchandInnovation/hero-section/hero-section'
import ImageSection from '../ResearchandInnovation/image-section/image-section'
import Pennai from './Penn-ai/Pennai'
import { Heading } from './Focus/Heading/Heading'
import { ArticleLayout } from './Focus/ArticleLayout/ArticleLayout'
import { ArticleCard } from './Focus/ArticleCard'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'



function ResearchandNewsMain() {
  const breadcrumbItems = [
    { label: 'HOME', href: '/' },
    { label: 'RESEARCH & INNOVATION', href: '/research-and-innovation' },
    { label: 'RESEARCH & NEWS', href: '/research-and-innovation/research-news' },
  ]


  return (
    <div>
      <Header/>
      <div className={styles.containernews}>
        <Breadcrumb items={breadcrumbItems} />
        <div className={styles.content}>
          <div className={styles.textContent}>
            <HeroSection
              title="Research News"

            />
          </div>
          <div className={`${styles.imageContent}`}>
            <ImageSection
              src={'/src/assets/Research_image.png'}
              alt="Researcher working in a laboratory with purple lighting"
            />
          </div>
        </div>
        <Pennai />
        <Heading />
        <ArticleLayout>
          <div className="feature-column">
            <ArticleCard
              image="/chemotherapy-image.jpg"
              category="HEALTH SCIENCES"
              title="Generic platinum chemotherapy shortages did not increase deaths"
              isFeature={true}
            />
          </div>
          <div className="stack-column">
            <ArticleCard
              image="/brain-tumor-image.jpg"
              category="HEALTH SCIENCES"
              title="Brain tumor organoids accurately model patient response to CAR T cell therapy"
            />
            <ArticleCard
              image="/keto-diet-image.jpg"
              category="HEALTH SCIENCES"
              title="Keto diet metabolite may power up CAR T cells to kill cancer"
            />
            <ArticleCard
              image="/radiation-therapy-image.jpg"
              category="HEALTH SCIENCES"
              title="Easing patient fears of radiation treatment, via virtual reality"
            />
            <ArticleCard
              image="/neuro-oncologist-image.jpg"
              category="HEALTH SCIENCES"
              title="White House names Abramson Cancer Center neuro-oncologist a Cancer Moonshot Scholar"
            />
          </div>
        </ArticleLayout>

      </div>
      <Footer/>
    </div>
  )
}

export default ResearchandNewsMain
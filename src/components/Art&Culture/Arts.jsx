import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import './Arts.css'
import Breadcrumb from '../ResearchandInnovation/breadcrum/breadcrum'
import HeroSection from '../ResearchandInnovation/hero-section/hero-section'
import ImageSection from '../ResearchandInnovation/image-section/image-section'
import Artsimg from '../../assets/artsimg.jpeg'
import styles from '../ResearchandInnovation/ResearchandInnovationMain.module.css'


const RESEARCH_DESCRIPTION = `From the one of a kind museums on campus to accomplished student performances in music, dance, and theater, culture and the arts play a leading role in life at Penn.`

function Arts() {

    const breadcrumbItems = [
        { label: 'Home', href: '/' },
        { label: 'Life at Penn', href: '/life' },
        { label: 'Arts & Culture', href: '/arts' }
    ]
    return (
        <>
            <Header />
            <div className="arts-container">
                <Breadcrumb items={breadcrumbItems} />

                <div className={styles.content}>
                    <div className={styles.textContent}>
                        <HeroSection
                            title="Arts  &  Culture"
                            description={RESEARCH_DESCRIPTION}
                        />
                    </div>
                    <div className={styles.imageContent}>
                        <ImageSection
                            src={Artsimg}
                            alt="Researcher working in a laboratory with purple lighting"
                        />
                    </div>
                </div>

                <div className="arts-headdisc">
                    <h2>Performing and Visual Arts Venues</h2>
                    <p>Creative expression of all kinds flourishes at Penn. On campus, garner access <br/> to world-class arts and culture through a variety of programs and highly <br/> regarded centers of art and cultural excellence.</p>
                </div>

            </div>
            <Footer />
        </>
    )
}

export default Arts
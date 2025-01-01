import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import './Arts.css'
import Breadcrumb from '../ResearchandInnovation/breadcrum/breadcrum'
import HeroSection from '../ResearchandInnovation/hero-section/hero-section'
import ImageSection from '../ResearchandInnovation/image-section/image-section'
import Artsimg from '../../assets/artsimg.jpeg'
import styles from '../ResearchandInnovation/ResearchandInnovationMain.module.css'
import ArtsCardImg from './ArtsCardImg'
import ImageSlider from './ImageSlider';
import PennMuseum from '../../assets/penn-museum.png'
import PennMuseum2 from '../../assets/penn-museum2.jpg'
import PennMuseum3 from '../../assets/penn-museum3.jpg'
import PennMuseum4 from '../../assets/penn-museum4.jpg'

const RESEARCH_DESCRIPTION = `From the one of a kind museums on campus to accomplished student performances in music, dance, and theater, culture and the arts play a leading role in life at Penn.`

function Arts() {

    const breadcrumbItems = [
        { label: 'Home', href: '/' },
        { label: 'Life at Penn', href: '/life' },
        { label: 'Arts & Culture', href: '/arts' }
    ]

    const images = [PennMuseum, PennMuseum2, PennMuseum3, PennMuseum4];

    return (
        <>
            <Header />
            <div className="arts-container">
                <Breadcrumb items={breadcrumbItems} />

                <div className={styles.content}>
                    <div className={styles.textContent}>
                        <HeroSection
                            title="Arts - Culture"
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
                    <p>Creative expression of all kinds flourishes at Penn. On campus, garner access <br /> to world-class arts and culture through a variety of programs and highly <br /> regarded centers of art and cultural excellence.</p>
                </div>
                <div className="artsimgcontainer">
                    <ArtsCardImg src={PennMuseum} title="Penn Museum" description="The Penn Museum advances understanding of the world’s cultural heritage through its extensive research, collections, exhibitions, and educational programming." />
                    <ArtsCardImg src={PennMuseum2} title="Arthur Ross Gallery" description="Serving as a rich cultural resource for students, scholars, and the community, the Arthur Ross Gallery presents global art and artifacts through gallery exhibitions, scholarship, and educational outreach." />
                    <ArtsCardImg src={PennMuseum3} title="Institute of Contemporary Art" description="The Institute of Contemporary Art believes in the power of art and artists to inform and inspire. The ICA is free for all to engage and connect with the art of our time." />
                    <ArtsCardImg src={PennMuseum4} title="Penn Live Arts" description="Penn Live Arts is a major cultural destination and crossroads in the performing arts, connecting regional audiences and the University through exposure to innovative human expression in theater, music, and dance." />
                </div>
                <div className='imageslide-container'>
                    <h1 style={{ textAlign: 'center' }}>Penn Museum Gallery</h1>
                    <ImageSlider images={images} />
                </div>
                
            </div>
            <Footer />
        </>
    )
}

export default Arts
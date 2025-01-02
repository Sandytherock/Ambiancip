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
import ArtNewsImgCard from './ArtNewsImgCard'

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
                <section className='wholesec'>
                    <div className='imageslide-container'>
                        <h1 style={{ textAlign: 'center' }}>Penn Museum Gallery</h1>
                        <ImageSlider images={images} />
                    </div>
                    <div className="imageslider-content">
                        <h2>Platt Performing Arts House</h2>
                        <p><a href='#'>Platt Student Performing Arts House</a> offers a supportive programmatic home for creative exploration and expression, advising and training students pursuing their extra-curricular passions for the performing arts and those preparing for a career in the arts.</p>
                        <h4>Explore</h4>
                        <h3 className="event-item"><a href="#">Events Calendar</a></h3>
                        <h3 className="event-item"><a href="#">Performing Arts Groups</a></h3>
                        <h3 className="event-item"><a href="#">Performing Arts Council</a></h3>
                    </div>
                </section>

                <section className='program-container'>
                    <div className="acadmic-program">
                        <h2>Academic Programs</h2>
                        <h3 className="event-item"><a href="#">Anthropology</a></h3>
                        <h3 className="event-item"><a href="#">Architecture</a></h3>
                        <h3 className="event-item"><a href="#">Cinema Studies</a></h3>
                        <h3 className="event-item"><a href="#">Comparative Literature</a></h3>
                        <h3 className="event-item"><a href="#">Computer Graphics and Game Technology</a></h3>
                        <h3 className="event-item"><a href="#">Creative Writing</a></h3>
                        <h3 className="event-item"><a href="#">Digital Media Design</a></h3>
                        <h3 className="event-item"><a href="#">Fine Arts</a></h3>
                        <h3 className="event-item"><a href="#">Historic Preservation</a></h3>
                        <h3 className="event-item"><a href="#">History of Art</a></h3>
                        <h3 className="event-item"><a href="#">Landscape Architecture</a></h3>
                        <h3 className="event-item"><a href="#">Music</a></h3>
                        <h3 className="event-item"><a href="#">Theatre Arts</a></h3>
                        <h3 className="event-item"><a href="#">Visual Studies</a></h3>
                    </div>

                    <div className="cultural-institutions">
                        <h2>Cultural Institutions</h2>
                        <h3 className="event-item"><a href="#">Annenberg Center for the Performing Arts</a></h3>
                        <h3 className="event-item"><a href="#">Arthur Ross Gallery</a></h3>
                        <h3 className="event-item"><a href="#">Institute of Contemporary Art</a></h3>
                        <h3 className="event-item"><a href="#">Kelly Writers House</a></h3>
                        <h3 className="event-item"><a href="#">Morris Arboretum</a></h3>
                        <h3 className="event-item"><a href="#">Penn Libraries</a></h3>
                        <h3 className="event-item"><a href="#">Penn Museum of Archaeology and Anthropology</a></h3>
                        <h3 className="event-item"><a href="#">The University of Pennsylvania Press</a></h3>
                        <h3 className="event-item"><a href="#">Platt Student Performing Arts House</a></h3>
                        <h3 className="event-item"><a href="#">Sachs Program for Arts Innovation</a></h3>
                        <h3 className="event-item"><a href="#">Wolf Humanities Center</a></h3>
                        <h3 className="event-item"><a href="#">WXPN 88.5 FM Radio</a></h3>
                    </div>

                </section>

                <section className='newscontainer'>
                    <div className="part">
                        <h1>Arts & Culture News</h1>
                        <ArtNewsImgCard src={PennMuseum} title="A look back at 2024 through Penn Today stories" description="Revisit some of the stories that highlighted the events, breakthroughs, people, and research across the University this year." />
                        <ArtNewsImgCard src={PennMuseum2} title="Caretaker of 9,000 works of art" description="As the director of the Penn Art Collection, Lynn Smith Dolby manages the conservation, registration, and display of all University-owned art, indoors and outdoors across campus." />
                        <ArtNewsImgCard src={PennMuseum3} title="Equity in Action Visiting Scholars focus on criminal justice and art" description="Legal advocate Kemba Smith, artist Makoto Fujimura, and lawyer Haejin Fujimura will launch the first event, hosted by the Office of Social Equity and Community." />
                        <ArtNewsImgCard src={PennMuseum4} title="Art Matters: ‘Two Lines’ by George Rickey" description="A kinetic sculpture positioned on a hillside at Morris Arboretum & Gardens is designed to move with the wind. " />
                    </div>
                    <div className="big-boxsecondthird">
                        <img src="https://www.upenn.edu/sites/default/files/styles/card_3x2/public/2024-05/penn-relays-baton-086x.jpg?h=75ed424a&itok=eP1cKZBu" alt="" />
                        <p className="Q">Quakers make history at 128th running of Penn Relays</p>
                        <p className="P">Penn athletes had several noteworthy performances on the track and in the field at the Relays at Franklin Field.</p>
                        <button className="Admissionssecondthird">VISIT PENN TODAY</button>
                    </div>
                </section>

                <div className='ico'>
                    <div class="explore-sectiongroup">
                        <h1>Explore Life at Penn</h1>
                        <div class="grid-containergroup">
                            <div class="grid-itemgroup">Arts & Culture</div>
                            <div class="grid-itemgroup">Community Involvement</div>
                            <div class="grid-itemgroup">Diversity</div>
                            <div class="grid-itemgroup">Groups & Organizations</div>
                            <div class="grid-itemgroup">Health & Wellness</div>
                            <div class="grid-itemgroup">Housing & Dining</div>
                            <div class="grid-itemgroup">Penn & Philadelphia</div>
                            <div class="grid-itemgroup">Safety & Security</div>
                            <div class="grid-itemgroup">Spirituality & Religion</div>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </>
    )
}

export default Arts
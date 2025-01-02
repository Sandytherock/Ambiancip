import React from 'react'
import './GroupsOrganizations.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Breadcrumb from "../ResearchandInnovation/breadcrum/breadcrum";
function GroupsOrganizations() {

    const breadcrumbItems = [
        { label: 'HOME', href: '/' },
        { label: 'LIFE AT PENN', href: '/life-at-penn' },
        { label: 'GROUPS & ORGANIZATIONS', href: '/groups-and-organizations' },
      ]

    return (

        <>
        <Header/>
            <div className='org'>
            <Breadcrumb items={breadcrumbItems} />

                <div className='contain-group'>
                    <h1><span>Groups & Organizations</span></h1>
                </div>
                <p className='pfgroup'>Participate in social, political, artistic, and multicultural activities that put learning into practice.</p>
                <img src="https://www.upenn.edu/sites/default/files/styles/default/public/2020-11/dance_group_011x_crop_0.jpg?itok=k0mg51Re" alt="" />


                <div className='universitygroup'>
                    <h2 >Student Clubs and Organizations</h2>
                </div>
                <div>
                    <h3 className='principlegroup'>Overview</h3>
                    <p className='pringroup'>Information about Penn’s many registered student organizations.</p>
                    <h3 className='principlegroup'>Penn Clubs</h3>
                    <p className='pringroup'>Search student groups, register an organization, and view upcoming campus events.</p>
                    <h3 className='principlegroup'>Fraternities and Sororities</h3>
                    <p className='pringroup'>Learn about Greek life at Penn and resources available through the Office of Student Affairs/Fraternity Sorority Life. Find information tailored to the needs of students, parents, and alumni.</p>
                    <h3 className='principlegroup'>Student Government</h3>
                    <p className='pringroup'>Deliberative and representative bodies for undergraduate, graduate, and professional students.</p>
                </div>


                <div class="about-sectiononegroup">
                    <div class="sustainabilitygroup">
                        <img src="https://www.upenn.edu/sites/default/files/styles/card_3x2/public/2024-05/yagerman-amanda.jpeg?h=75ed424a&itok=bO7iy4w_" alt="" />
                        <h2>Portraits of a graduating class</h2>
                        <p>A roundup of 12 undergraduate and graduate student profiles who made the most of their years at Penn and made a mark on the community.</p>
                        <div className='.center-containergroup'>
                            <button class="buttongroup">LEARN MORE</button>
                        </div>
                    </div>

                    <div class="historygroup">
                        <img src="https://www.upenn.edu/sites/default/files/styles/card_3x2/public/2022-03/penn-electric-racing.jpg?h=75ed424a&itok=ePA6wmhA" alt="" />
                        <h2>Penn Electric Racing</h2>
                        <p>Penn Electric Racing is the University of Pennsylvania’s Formula SAE Electric Team. Each year, they build award winning, fully electric racecars that aim to push the envelope, bringing together Penn’s brightest engineers in the process.</p>
                        <div className='.center-containergroup'>
                            <button class="buttongroup">LEARN MORE</button>
                        </div>
                    </div>
                </div>



                <div className='universitygroupgroup'>
                    <h2 >Faculty and Staff Organizations</h2>
                </div>
                <div>
                    <h3 className='principlegroupgroup'>Weekly-paid Professional Staff Assembly</h3>
                    <p className='pringroupgroup'>The WPPSA represents weekly-paid professional employees on the University Council and gives voice to the interests of its membership throughout the Penn community.</p>
                    <h3 className='principlegroupgroup'>Penn Association of Senior and Emeritus Faculty</h3>
                    <p className='pringroupgroup'>PASEF initiates and coordinates activities that encourage retired faculty members to maintain connections among themselves and with the intellectual and social life of the University.</p>
                    <h3 className='principlegroupgroup'>Faculty Senate</h3>
                    <p className='pringroupgroup'>Elected members of the Faculty Senate’s executive and standing committees engage in investigation and consideration of matters of import with the University administration.</p>
                    <h3 className='principlegroupgroup'>Penn Professional Staff Assembly</h3>
                    <p className='pringroupgroup'>The PPSA provides a forum through which monthly paid staff can engage in dialogue about issues facing the University and higher education.</p>
                </div>


                <div class="about-sectiononegroupone">
                    <img src="https://www.upenn.edu/sites/default/files/styles/image_slider_card_3x2/public/2020-11/13699414135_25a87f1cf0_k.jpg?h=6eb7b2f4&itok=2HLcaWNN" alt="" />
                </div>

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
            <Footer/>
        </>
    )
}

export default GroupsOrganizations

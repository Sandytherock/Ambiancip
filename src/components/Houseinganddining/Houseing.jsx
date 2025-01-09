import React from 'react'
import './Houseing.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Breadcrumb from '../ResearchandInnovation/breadcrum/breadcrum'
function Houseing() {

    const breadcrumbItems = [
        { label: 'Home', href: '/' },
        { label: 'Life at Penn', href: '/life' },
        { label: 'HOUSING & DINING', href: '/housing-and-dining' }
    ]
    return (
        <>
        <Header/>
            <div className='orghouse'>
            <Breadcrumb items={breadcrumbItems} />

                <div className='contain-grouphouse'>
                    <h1><span>Housing & Dining</span></h1>
                </div>
                <p className='pfgrouphouse'>With a multitude of housing and dining options both on and off campus, all members of the University community can find the accommodations that make Penn feel like home.</p>
                <img src="https://www.upenn.edu/sites/default/files/styles/default/public/2020-11/p-100297-master-v1-075a-1600x800.jpg?itok=apAkEATX" alt="" style={{paddingInline:'50px'}}/>


                <div className='universitygrouphouse'>
                    <h2 >Housing</h2>
                </div>
                <div>
                    <h3 className='principlegrouphouse'>Student Housing and Related Services</h3>
                    <p className='pringrouphouse'>Penn’s College Houses provide supportive residential communities that enable undergraduate students to experience the University’s intellectual variety and strengths outside the classroom.</p>
                    <h3 className='principlegrouphouse'>Housing Options</h3>
                    <p className='pringrouphouse'>Penn’s residential system is comprised of 12 undergraduate College Houses and Sansom Place. Approximately 5,500 undergraduates live on campus. The College Houses offer distinct room types, amenities, and communities—making it easy to find what’s right for you.</p>
                    <h3 className='principlegrouphouse'>Temporary Housing</h3>
                    <p className='pringrouphouse'>Although reasonably priced short-term housing near campus is in very short supply, Off-Campus Services can provide listings of hostels, student residences, bed and breakfasts, and hotels in the area.</p>
                    <h3 className='principlegrouphouse'>Penn Home Ownership Services</h3>
                    <p className='pringrouphouse'>PHOS offers extensive resources and services to eligible employees interested in moving to the greater West Philadelphia neighborhood.</p>
                    <h3 className='principlegrouphouse'>Off-Campus Services</h3>
                    <p className='pringrouphouse'>Assistance and resources for Penn students, faculty, and staff who seek or currently occupy off-campus housing.</p>
                    <h3 className='principlegrouphouse'>Accommodations for Visitors</h3>
                    <p className='pringrouphouse'>A number of campus, Center City, and airport hotels offer special rates for individuals or groups visiting Penn. The Inn at Penn, the Sheraton Philadelphia University City Hotel, and Penn residence hall guest accommodations offer the most convenience for campus visitors.</p>
                </div>


                <div className='housinghouse'>
                    <div className='universitygroupgrouphouse'>
                        <h2 >Dining</h2>
                    </div>
                    <div className='universitygroupgrouphouseprin'>
                        <h3 className='principlegroupgrouphouse'>Penn Dining</h3>
                        <p className='pringroupgrouphouse'>Penn Dining ensures the delivery of high-quality food at a variety of venues, each of which helps create a sense of community and comfort among faculty, staff, and students.</p>
                        <h3 className='principlegroupgrouphouse'>Retail Dining on Campus</h3>
                        <p className='pringroupgrouphouse'>In partnership with Bon Appétit, Penn Dining oversees several retail establishments across campus, which include an array of cafés, markets, and grocers.</p>
                        <h3 className='principlegroupgrouphouse'>University Club</h3>
                        <p className='pringroupgrouphouse'>Membership to the University Club, located in the Inn at Penn, is open to Penn faculty, staff, alumni, graduate students, emeritus faculty, and retired staff. Membership privileges include complimentary morning refreshments, access to a reasonably priced lunch buffet, and preferred discounts.</p>
                        <h3 className='principlegroupgrouphouse'>SHOP PENN</h3>
                        <p className='pringroupgrouphouse'>Covering 10 city blocks across Penn’s campus are hundreds of retail shops, restaurants, and distinctly West Philly attractions for students and tourists alike. From quick grab-and-go meals to fine dining experiences, retail splurges, or just the essentials, SHOP PENN is a great day trip or resource for the Penn community.</p>
                    </div>
                </div>


                <div class="about-sectiononegrouponehouse">
                    <img src="https://www.upenn.edu/sites/default/files/styles/image_slider_card_3x2/public/2020-11/Hill-College-House-AW-26a.jpg?h=7e837e11&itok=Cp_OOcY4" alt="" />
                </div>

                <div className='icohouse'>
                    <div class="explore-sectiongrouphouse">
                        <h1>Explore Life at Penn</h1>
                        <div class="grid-containergrouphouse">
                            <div class="grid-itemgrouphouse">Arts & Culture</div>
                            <div class="grid-itemgrouphouse">Community Involvement</div>
                            <div class="grid-itemgrouphouse">Diversity</div>
                            <div class="grid-itemgrouphouse">Groups & Organizations</div>
                            <div class="grid-itemgrouphouse">Health & Wellness</div>
                            <div class="grid-itemgrouphouse">Housing & Dining</div>
                            <div class="grid-itemgrouphouse">Penn & Philadelphia</div>
                            <div class="grid-itemgrouphouse">Safety & Security</div>
                            <div class="grid-itemgrouphouse">Spirituality & Religion</div>
                        </div>
                    </div>

                </div>


            </div>
            <Footer/>
        </>
    )
}

export default Houseing

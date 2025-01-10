import React from 'react'
import './HealthWellness.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Breadcrumb from '../ResearchandInnovation/breadcrum/breadcrum';

function HealthandWellness() {
    const breadcrumbItems = [
        { label: 'HOME', href: '/' },
        { label: 'LIFE AT PENN', href: '/life' },
        { label: 'HEALTH AND WELLNESS', href: '//health-wellness' },
    ]
    return (
        <>
            <Header />
            <div className='orghousehelth'>
                <Breadcrumb items={breadcrumbItems} />

                <div className='contain-grouphousehelth'>
                    <h1><span>Health & Wellness</span></h1>
                </div>
                <p className='pfgrouphousehelth'>Home to a world-class medical, dental, nursing, and veterinary school, Penn is deeply dedicated to high quality patient care, research, and the advancement of interdisciplinary science. The University is also committed to providing the support, resources, and practical tools to ensure the wellness of its community.</p>
                <img src="https://www.upenn.edu/sites/default/files/styles/default/public/2020-11/p-100369-master-v1-009-1600x800.jpg?itok=qfIRLUUj" alt="" />


                <div className='universitygrouphousehelth'>
                    <h2 >Medical Service Providers</h2>
                </div>
                <div>
                    <h3 className='principlegrouphousehelth'>University of Pennsylvania Health System</h3>
                    <p className='pringrouphousehelth'>Penn Medicine’s central source for information, including physician directories, directions to facilities, online appointment scheduling, and health advice from one of the best hospital systems in the U.S.</p>
                    <h3 className='principlegrouphousehelth'>Penn Dental Medicine</h3>
                    <p className='pringrouphousehelth'>Penn Dental provides compassionate, comprehensive dental care with dentists in every specialty. Read more about making an appointment, fees and insurance, how clinics work, and much more.</p>
                    <h3 className='principlegrouphousehelth'>Penn Nursing</h3>
                    <p className='pringrouphousehelth'>Ranked as the best nursing school in the world, Penn Nursing advances the entire nursing profession, from research and practice to policy, and delivers high quality health services through community engagement throughout the region.</p>
                    <h3 className='principlegrouphousehelth'>OncoLink®</h3>
                    <p className='pringrouphousehelth'>The award-winning comprehensive online cancer resource from the Abramson Cancer Center at Penn.</p>

                </div>
                <div className='universitygrouphousehelth'>
                    <h2 >Veterinary Care Facilities</h2>
                </div>
                <div>
                    <h3 className='principlegrouphousehelth'>Matthew J. Ryan Veterinary Hospital</h3>
                    <p className='pringrouphousehelth'>Penn Vet’s Ryan Hospital provides clinical services and around-the-clock emergency care for dogs, cats, and other domestic/companion animals.</p>
                    <h3 className='principlegrouphousehelth'>New Bolton Center</h3>
                    <p className='pringrouphousehelth'>Penn Vet’s large animal facility features one of the world’s biggest equine surgical facilities, a critical care center, a dairy, a laboratory for aquatic animal research, and one of Pennsylvania’s three animal diagnostic laboratories.</p>

                </div>

                <div className='virtual-tour-sectionsecondhelth'>
                    <div className="text-containersecondhelth">
                        <h2 className='undersecondhelth'>Wellness at Penn</h2>
                        <p>Wellness at Penn is dedicated to caring for students during their academic journey while creating a campus-wide community of care. Our team is committed to offering a wide range of opportunities to access support, clinical resources, and practical tools to meaningfully engage with one's health and wellbeing.   </p>
                        <p>Our vision is simple: we want to create a campus experience that integrates the science, theory, and practice of wellness. We will accomplish this by infusing wellness across its eight domains throughout the Penn experience through inclusive, innovative, and impactful initiatives. The eight domains of Wellness include: physical, emotional, social, intellectual, environmental, financial, occupational, and spiritual wellness. All of our initiatives are grounded in collaboration and fueled by CARE: compassion, accessibility, respect, and empowerment.</p>
                        <p>Our organization is built upon two pillars that operate collaboratively to create a campus community centered on wellness:</p>
                        <p className='helthpp'>Student Health and Counseling: Caring for Students During Their Academic Journey </p>
                        <p className='heppp'>Student Health and Counseling (formerly SHS and CAPS) is the primary care and psychological care division of Wellness at Penn. Our state-of-the-art medical and counseling centers are designed to provide high-quality, compassionate care for undergraduate, graduate, and professional students during their academic journey. Student Health and Counseling is committed to providing safe, accessible, cost-effective, culturally-sensitive, and student-focused care. Our team provides care for acute and chronic health problems, preventative health services, as well as mental health and counseling, crisis management, and consultations.  </p>
                        <p className='helthpp'>Public Health and Wellbeing: Creating a Community of Care</p>
                        <p className='heppp'>Wellness at Penn’s Public Health and Wellbeing (formerly Campus Health) division seeks to create a community of care through advocacy, education, and action. Our dedicated staff focuses on a wide variety of healthy living topics, including sleep hygiene, stress reduction, nutrition, exercise, and sexual health. Public Health and Wellbeing also consists of Immunization and Insurance Compliance.</p>

                    </div>
                    <div className='big-boxsecondhelth'>
                        <img src="https://www.upenn.edu/themes/custom/penn_global/assets/img/svg/icon-contact-building--gray.svg" alt="" />
                        <p className='hehelth'>Contact Us</p>
                        <p className='hwhelth'>Wellness at Penn</p>
                        <p className='hwhelth'>3535 Market Street</p>
                        <p className='hwhelth'>Philadelphia PA 19104</p>
                        <p className='hwhelthpo'>(215) 746-9355</p>

                    </div>
                </div>



                <div className='studentshelth'>
                    <h2>Wellness News</h2>
                </div>
                <div class="about-sectionhelth">
                    <div class="sustainabilityhelth">
                        <img src="https://penntoday.upenn.edu/sites/default/files/styles/teaser/public/2024-12/well-being-coach-teaser.jpg?h=56d0ca2e&itok=Dx2D-Uxy" alt="" />
                        <p>How a well-being coach is helping health care workers battle burnout</p>
                        <p className='dece'>December 17, 2024</p>
                    </div>

                    <div class="historyhelth">
                        <img src="https://penntoday.upenn.edu/sites/default/files/styles/teaser/public/2024-12/WWW-David-Clark-peer-wellness-coaching-main.jpg?h=56d0ca2e&itok=KVXPAkAS" alt="" />
                        <p>Who, What, Why: David Clark and the Peer Wellness Coaching program</p>
                        <p className='dece'>December 4, 2024</p>
                    </div>

                    <div class="visithelth">
                        <img src="https://penntoday.upenn.edu/sites/default/files/styles/teaser/public/2024-11/COVER_WEB10.jpg?h=cd3edbc0&itok=qh4b8X0R" alt="" />
                        <p>‘Deeply Rooted’ community partnerships</p>
                        <p className='dece'>November 25, 2024</p>
                    </div>
                    <div class="visithelth">
                        <img src="https://penntoday.upenn.edu/sites/default/files/styles/teaser/public/2024-10/P-101335-Master-V1-028X%20%281%29.jpg?h=56d0ca2e&itok=5fxZ-jMu" alt="" />
                        <p>A series on wellness and well-being</p>
                        <p className='dece'>November 4, 2024</p>
                    </div>

                </div>






                <div className='icohousehelth'>
                    <div class="explore-sectiongrouphousehelth">
                        <h1>Explore Life at Penn</h1>
                        <div class="grid-containergrouphousehelth">
                            <div class="grid-itemgrouphousehelth">Arts & Culture</div>
                            <div class="grid-itemgrouphousehelth">Community Involvement</div>
                            <div class="grid-itemgrouphousehelth">Diversity</div>
                            <div class="grid-itemgrouphousehelth">Groups & Organizations</div>
                            <div class="grid-itemgrouphousehelth">Health & Wellness</div>
                            <div class="grid-itemgrouphousehelth">Housing & Dining</div>
                            <div class="grid-itemgrouphousehelth">Penn & Philadelphia</div>
                            <div class="grid-itemgrouphousehelth">Safety & Security</div>
                            <div class="grid-itemgrouphousehelth">Spirituality & Religion</div>
                        </div>
                    </div>

                </div>


            </div>
            <Footer />
        </>
    )
}

export default HealthandWellness

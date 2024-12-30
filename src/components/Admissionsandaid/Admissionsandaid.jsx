import React from 'react'
import './Admissionsandaid.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
function Admissionsandaid() {
    return (
        <>
        <Header/>
            <div className='ab'>
                <div className='breadcrumbn'>
                    <div className='breadcrumb-itemn'>HOME</div>
                    <div className='breadcrumb-itemn'>/</div>
                    <div className='breadcrumb-itemn'>ADMISSIONS & AID</div>
                </div>
                <h1 className='line-about' style={{padding:'30px'}}>Admission & Aid</h1>

                <div className="about-contenth">
                    <div className="about-items-columnh">
                        {/* The three smaller images in a column */}
                        <p>Penn (also known as UPenn) is committed to making its inclusive, innovative, and impactful Ivy League education available to the best and brightest students, regardless of their economic circumstances. A generous financial aid budget and inclusive aid policies make matriculating at Penn an attainable goal for students from the widest possible range of backgrounds. Every day, Penn embodies this truth: Our unique perspectives and backgrounds brought together make us strong, resilient, and singularly prepared to define the future.</p>

                    </div>


                    {/* The large image on the side */}
                    <div className="large-image-itemh">
                        <img src="https://www.upenn.edu/sites/default/files/styles/page_hero_1x1/public/2020-11/college%20hall.jpg?h=5c266fb4&itok=TN9WGZrA" alt="Large Image" className="large-imageh" />
                    </div>
                </div>

                <div className='virtual-tour-sectiononetwo'>
                    <div className="text-containeronetwo">
                        <h2>Grant-based Financial Aid</h2>
                        <p>The cornerstone of Penn’s initiative to increase access for students from all socioeconomic backgrounds is its grant-based financial aid program. Since 2004, the University has awarded $3.1 billion in undergraduate aid to more than 25,000 students. Forty-five percent of traditional undergraduate students received grant-based financial aid in 2022-23. Ongoing gifts from generous alumni and supporters are expanding Penn’s robust undergraduate grant-based financial aid program and growing graduate and professional student aid to minimize the burden of debt.</p>
                        <a href="#" className='buttonvirtualonetwo'>Penn's All-Grant Policy</a>
                    </div>
                    <img src="https://www.upenn.edu/sites/default/files/styles/card_3x2/public/2021-01/ben-franklin-college-hall.jpg?h=75ed424a&itok=Gd0XOD-T" />
                </div>

                <div className='virtual-tour-sectionulwan'>
                    <div className='big-boxulwan'>
                        <h1 className='numulwan'>Graduate Admissions Offices</h1>
                        <ul>
                            <li>School of Arts & Sciences</li>
                            <li>Stuart Weitzman School of Design</li>
                            <li>Perelman School of Medicine</li>
                            <li>The Wharton School</li>
                            <li>Graduate School of Education</li>
                            <li>School of Nursing</li>
                            <li>Annenberg School for Communiciation</li>
                            <li>School of Engineering and Applied Science</li>
                            <li>School of Social Policy & Practice</li>
                            <li>School of Dental Medicine</li>
                            <li>Penn Carey Law</li>
                            <li>School of Veterinary Medicine</li>
                        </ul>
                    </div>
                </div>

                <div className='virtual-tour-sectiononetwoana'>
                    <div className="text-containeronetwoana">
                        <h2>Talking admissions with Whitney Soule</h2>
                        <p>As vice provost and dean of admissions, Soule is challenged daily with thinking strategically about undergraduate enrollment at Penn—from recruitment to application processes and all that goes into admitting a class, to how financial aid and retention fits into the mix.</p>
                        <a href="#" className='buttonvirtualonetwoana'>READ MORE</a>
                    </div>
                    <img src="https://www.upenn.edu/sites/default/files/styles/card_3x2/public/2022-08/soule-whitney-main_0.jpg?itok=INdD5L1w" />
                </div>

                <div className='virtual-tour-sectiononetwoanatwo'>
                    <div className="text-containeronetwoanatwo">
                        <h2>Penn Virtual Tour</h2>
                        <p>From West Philadelphia to the comfort of your own home, we invite you to explore Penn through a virtual tour of our historic campus. Get a glimpse inside our state-of-the-art classrooms, hear from current students and faculty, and catch live performances by members of our community as you stroll down Locust Walk.</p>
                        <a href="#" className='buttonvirtualonetwoanatwo'>Penn Virtual Tour</a>
                    </div>
                    <img src="https://www.upenn.edu/sites/default/files/styles/card_3x2/public/2020-10/virtual-tour.jpeg?h=e54f6ff6&itok=gc_ZOWDI" />
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Admissionsandaid

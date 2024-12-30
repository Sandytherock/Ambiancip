import React from 'react';
import './About.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function About() {
  return (
    <>
      <Header />
      <div className="about-container">
        <div className='breadcrumb'>
          <div className='breadcrumb-item'>HOME</div>
          <div className='breadcrumb-item'>/</div>
          <div className='breadcrumb-item'>ABOUT</div>
        </div>
        <h1 className="line-about">About</h1>

        <div className="about-content">
          <div className="about-items-column">
            {/* The three smaller images in a column */}
            <div className="about-item">
              <img src="https://www.upenn.edu/sites/default/files/styles/subpage_listing_card/public/2020-10/about-communications-college-hall.jpg?h=84e49f87&itok=x03_hVQU" alt="Office of the President" />
              <div>
                <h2>Office of the President</h2>
                <p>Explore the President's involvement in selected <br />campus and world events, and read about their <br />background and the functions of the office.</p>
              </div>
            </div>
            <div className="about-item">
              <img src="https://www.upenn.edu/sites/default/files/styles/subpage_listing_card/public/2020-12/college-hall.jpg?itok=pRicN94c" alt="Trustees & Administration" />
              <div>
                <h2>Trustees & Administration</h2>
                <p>Learn about the people who look after the University’s well-being and oversee its academic and business  operations.</p>
              </div>
            </div>
            <div className="about-item">
              <img src="https://www.upenn.edu/sites/default/files/styles/subpage_listing_card/public/2024-02/locust_sunset.jpeg?itok=5_ALFZZE" alt="In Principle and Practice" />
              <div>
                <h2>In Principle and Practice</h2>
                <p>A new strategic framework captures what the world <br />needs most and how it will cultivate a <br /> community that rises to the challenge.</p>
              </div>
            </div>

          </div>
          {/* The large image on the side */}
          <div className="large-image-item">
            <img src="https://www.upenn.edu/sites/default/files/styles/page_hero_1x1/public/2020-12/quadrangle.jpg?h=63886eb8&itok=T7wbMsjc" alt="Large Image" className="large-image" />
          </div>
        </div>
        <div className='section-2'>
          <p>Penn’s academics are boosted by its inherent culture and ecosystem of innovation. You name it, if it’s cutting-edge, the University’s faculty—and students—have their hands in it. Grounded in the liberal arts and sciences and enriched by the integrated resources of four undergraduate and 12 graduate schools, Penn offers students an unparalleled education informed by inclusivity, intellectual rigor, research, and the impetus to create new knowledge to the benefit of individuals and communities around the world.</p>
        </div>
        <div className='penn'>
          <h1>Penn Facts</h1>
        </div>


        <div class="container-about">
          <div class="card">
            <div class="number">1740</div>
            <div class="label">Year Founded</div>
          </div>

          <div class="card">
            <div class="number">5,093</div>
            <div class="label">Total Faculty Members</div>
          </div>

          <div class="card">
            <div class="number">6:1</div>
            <div class="label">Student-Faculty Ratio</div>
          </div>
        </div>
        <div className='center-container'>
          <button class="button">ALL PENN FACTS</button>
        </div>

        <div class="about-sectionone">
          <div class="sustainability">
            <img src="https://www.upenn.edu/sites/default/files/styles/card_3x2/public/2020-08/about-card-1.jpg?h=4a416027&itok=fBu4Lzqb" alt="" />
            <h2>Sustainability</h2>
            <p>Penn is dedicated to promoting a sustainable culture and implementing environmentally conscious policies.</p>
          </div>

          <div class="history">
            <img src="https://www.upenn.edu/sites/default/files/styles/card_3x2/public/2020-08/about-card-2.jpg?h=4a416027&itok=_R4aBYPO" alt="" />
            <h2>A Rich History</h2>
            <p>As America's first university, Penn has a history that dates back to 1740 and shares many ties with the colonial city of Philadelphia and the birth of the nation.</p>
          </div>

          <div class="visit">
            <img src="https://www.upenn.edu/sites/default/files/styles/card_3x2/public/2021-01/campus-fall-covenant-masks.jpg?h=c1dbac53&itok=w3U0PCam" alt="" />
            <h2>Visit Penn</h2>
            <p>We invite you to spend time on campus and see the many ways our diverse community brings excitement and discovery to Penn's grand buildings and state-of-the-art facilities.</p>
          </div>
        </div>


        <div className='about-penn-section'>
          <div className='image-container-about'>
            <img src="https://www.upenn.edu/sites/default/files/styles/gallery_card/public/2020-11/13896300289_2cf8c52701_k.jpg?h=242e7d68&itok=NOxqX8eh" alt="Member of the junior class celebrating Hey Day" />
            <p>Members of the junior class celebrating Hey Day, the day they become seniors, on College Green.</p>
          </div>
          <div>
            <h2>More About Penn</h2>
            <h3>EXPLORE</h3>
            <ul>
              <li><a href="#">Facts</a></li>
              <li><a href="#">Policies</a></li>
              <li><a href="#">News, Media, & Communications Services</a></li>
            </ul>
          </div>
        </div>


        <div className='virtual-tour-sectionone'>
          <div className="text-containerone">
            <h2>Penn Virtual Tour</h2>
            <p>From West Philadelphia to the comfort of your own home, we invite you to explore Penn through a virtual tour of our historic campus. Get a glimpse inside our state-of-the-art classrooms, hear from current students and faculty, and catch live performances by members of our community as you stroll down Locust Walk.</p>
            <a href="#" className='buttonvirtualone'>PENN VIRTUAL TOUR</a>
          </div>
          <img src="https://www.upenn.edu/sites/default/files/styles/card_3x2/public/2020-10/virtual-tour.jpeg?h=e54f6ff6&itok=gc_ZOWDI" alt="Penn Virtual Tour" />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;

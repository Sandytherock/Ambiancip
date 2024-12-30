import React from 'react';
import Header from '../Header/Header';
import Slider from "react-slick";
import './MainPage.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import background from '../../assets/background.jpg';
import background2 from '../../assets/background2.jpg';
import news1 from '../../assets/news1.jpg';
import news2 from '../../assets/news2.jpg';
import news3 from '../../assets/news3.jpg';
import news4 from '../../assets/news4.jpg';
import news5 from '../../assets/news5.jpg';
import upcomingevent1 from '../../assets/upcomingevent1.jpg';
import priority1 from '../../assets/priority1.jpeg';
import priority2 from '../../assets/priority2.jpg';
import priority3 from '../../assets/priority3.jpg';
import connectimg1 from '../../assets/connectimg1.png'
import connectimg2 from '../../assets/connectimg2.png'
import ConnectionImgCard from '../ConnectionImgCard';
import SocialMedia from '../SocialMedia';
import iconInstagram from '../../assets/icon-instagram.svg';
import iconFacebook from '../../assets/icon-facebook.svg';
import iconLinkedin from '../../assets/icon-linkedin.svg';
import iconTwitter from '../../assets/icon-twitter.svg';
import iconYoutube from '../../assets/icon-youtube.svg';
import Footer from '../Footer/Footer';

function MainPage() {

  // Settings for the React Slick slider
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Show 3 slides
    slidesToScroll: 1,
    centerMode: true, // Enable center mode
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768, // For mobile screens
        settings: {
          slidesToShow: 1,
          centerMode: false, // Disable center mode for smaller screens
        },
      },
    ],
  };

  return (
    <>
      <Header />
      <div className="main-page">
        <div className="container-main">
          <h4>CAMPUS & COMMUNITY</h4>
          <h2>Penn staff make the Philadelphia area a<br />better place through side gigs</h2>
          <p>
            The 12th piece in Penn Today’s Side Gigs for Good series highlights staff who mentor and<br />
            empower Latino professionals, lead Girl Scout troops, donate hand-knitted items to people<br />
            in need, and connect Philadelphia children with music opportunities.
          </p>
        </div>
      </div>

      <div className="newsSection">
        <div>
          <h2>News</h2>
        </div>
        <div className="newsContainer">
          <div className="newsCard large">
            <img src={news1} alt="News 1" width={600} height={410} />
            <div className="newsContent">
              <span className="category">ARTS, HUMANITIES, & SOCIAL SCIENCE</span>
              <h3>Journey to Joy</h3>
            </div>
          </div>
          <div className="smallCards">
            <div className="newsCard small">
              <img src={news2} alt="News 2" />
              <div className="newsContent">
                <span className="category">CAMPUS & COMMUNITY</span>
                <h3>Introducing the Office of Religious and Ethnic Inclusion (Title VI)</h3>
              </div>
            </div>
            <div className="newsCard small">
              <img src={news3} alt="News 3" />
              <div className="newsContent">
                <span className="category">Category 3</span>
                <h3>Title of the News 3</h3>
              </div>
            </div>
            <div className="newsCard small">
              <img src={news4} alt="News 4" />
              <div className="newsContent">
                <span className="category">Category 4</span>
                <h3>Title of the News 4</h3>
              </div>
            </div>
            <div className="newsCard small">
              <img src={news5} alt="News 5" />
              <div className="newsContent">
                <span className="category">Category 5</span>
                <h3>Title of the News 5</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="campus_and_community">
        <div className="content-card">
          <h2>Campus & Community</h2>
          <h3>Penn lays out ambitious new roadmap<br />for climate and sustainability action</h3>
          <p>
            Penn’s Climate and Sustainability Action Plan 4.0 outlines<br />
            sustainability goals for fiscal year 2025-29 and lays out<br />
            Penn’s path toward carbon neutrality by 2042.
          </p>
          <button className="learn-more-btn">Learn More</button>
        </div>
      </div>

      <div className="upComingEvents">
        <h2>Upcoming Events</h2>
        <div className="upComingEventsContainer">
          <div className="eventCard left">
            <img src={upcomingevent1} alt="Event Image" />
            <div className="dateCard"><span>JAN</span><p>10</p></div>
            <div className="eventContent">
              <span className="category">Special Events</span>
              <h3>Kwanzaa Celebration</h3>
              <p>Penn Museum hosts the Afro Culture Preservation <br /> Council's 41st Kwanzaa Celebration. <br />Festivities include a drum procession, ballet dancing, cultural storytelling, and hands-on children's activities.</p>
            </div>
          </div>

          <div className="eventCard right">
            <img src={upcomingevent1} alt="Event Image" />
            <div className="dateCard"><span>FEB</span> <p>12</p></div>
            <div className="eventContent">
              <span className="category">Talks</span>
              <h3>Role of Industry Standards in AI</h3>
              <p>Legal scholars join together to examine the role of industry standards that contribute to the design of artificial intelligence and how to ensure benefits of AI are maximized. Alumna Shira Perlmutter will deliver a keynote about AI and copyright.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="cardsInspiringSection">
        <div className="cardsInspiringContainer">
          <div className="cardsInspiring white">
            <h2>Supporting Our Community</h2>
            <p>
              Your support ignites change locally and globally, transforming Penn into a powerful engine that advances knowledge for society's greatest good.
            </p>
            <button className="blue-btn">Support PENN</button>
          </div>
          <div className="cardsInspiring">
            <h2>Empowering the Future</h2>
            <p>
              Discover how Penn’s initiatives are shaping the future by fostering innovation, collaboration, and meaningful impact across various fields.
            </p>
            <button className="learn-more-btn">Learn More</button>
          </div>
        </div>
      </div>
      <div className="Priorities">
        <h1>Penn Priorities</h1>
        <p>A look at a few of our big picture priorities that improve Penn as we create <br />knowledge to benefit the world.</p>


        <div className="priorities-carousel">
          <Slider {...sliderSettings}>
            <div className='carousel-item'>
              <img src={priority1} alt="Priority 1" className="priority-image" />
              <h3>Priority Title 1</h3>
            </div>
            <div className='carousel-item'>
              <img src={priority2} alt="Priority 2" className="priority-image" />
              <h3>Priority Title 2</h3>
            </div>
            <div className='carousel-item'>
              <img src={priority3} alt="Priority 3" className="priority-image" />
              <h3>Priority Title 3</h3>
            </div>
          </Slider>
        </div>
      </div>

      <div className="stayConnected">
        <h3>Stay Connected</h3>
        <div className="cardcontainer">
          <ConnectionImgCard src={connectimg1} text="Revisit a collection of Penn Today stories that highlight the events, breakthroughs, profiles, and research across the University this year." />
          <ConnectionImgCard className="active" src={connectimg1} text="Revisit a collection of Penn Today stories that highlight the events, breakthroughs, profiles, and research across the University this year." />
          <ConnectionImgCard className="blue" src={connectimg2} text="Revisit a collection of Penn Today stories that highlight the events, breakthroughs, profiles, and research across the University this year." />
        </div>
      </div>
      <div className="socialcard-container">
        <SocialMedia src={iconInstagram} />
        <SocialMedia src={iconFacebook} />
        <SocialMedia src={iconTwitter} />
        <SocialMedia src={iconLinkedin} />
        <SocialMedia src={iconYoutube} />
      </div>
      <Footer />
    </>
  );
}

export default MainPage;

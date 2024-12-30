import React from 'react';
import './Header.css';
import Logo from '../../assets/Ambaincip_red.svg';

const Header = () => {
  return (
    <header className="header">
      <div className="navbar">
        <div className="logo">
          <img src={Logo} alt="Logo" className="logo-img" />
        </div>
        <div className='nav-links'>
          <span className='line'></span>
          <nav>
            <div className="dropdown">
              <a href="#academics" className="dropdown-link">
                Academics &nbsp;<i className="fas fa-chevron-down"></i> &nbsp;/
              </a>
              <div className="dropdown-menu">
                <a href="#undergraduate">Undergraduate</a>
                <a href="#graduate">Graduate</a>
                <a href="#schools">Schools</a>
                <a href="#global-initiatives">Global Initiatives</a>
                <a href="#interdisciplinary">Interdisciplinary</a>
                <a href="#online-learning">Online Learning</a>
                <a href="#off-campus-learning">Off-campus Learning</a>
                <a href="#libraries">Libraries</a>
              </div>
            </div>
            <a href="#admissions">Admissions & Aid &nbsp;/</a>
            <a href="/athletics-and-recreation">Athletics &nbsp;/</a>
            <div className="dropdown">
              <a href="/research-and-innovation" className="dropdown-link">
                Research & Innovation &nbsp;<i className="fas fa-chevron-down"></i> &nbsp;/
              </a>
              <div className="dropdown-menu">
                <a href="/research-and-innovation/research-enterprise">Research Enterprise</a>
                <a href="/research-and-innovation/research-news">Research News</a>
              </div>
            </div>
            <div className="dropdown">
              <a href="#life" className="dropdown-link">
                Life at Penn &nbsp;<i className="fas fa-chevron-down"></i> &nbsp;/
              </a>
              <div className="dropdown-menu">
                <a href="#arts-culture">Arts & Culture</a>
                <a href="#community-involvement">Community Involvement</a>
                <a href="#diversity">Diversity</a>
                <a href="#groups">Groups & Organizations</a>
                <a href="#housing-dining">Housing & Dining</a>
                <a href="#health-wellness">Health & Wellness</a>
                <a href="#safety-security">Safety & Security</a>
              </div>
            </div>
            <div className="dropdown">
              <a href="#about" className="dropdown-link">
                About &nbsp;<i className="fas fa-chevron-down"></i>
              </a>
              <div className="dropdown-menu">
                <a href="#faq">FAQ</a>
                <a href="#policies">Policies</a>
                <a href="#facts">Facts</a>
                <a href="#university-values">University Values</a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

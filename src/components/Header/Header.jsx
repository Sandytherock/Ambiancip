import React from 'react';
import './Header.css';
import Logo from '../../assets/Ambaincip_red.svg';
import { NavLink } from 'react-router-dom';

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
              <NavLink to="/academics" className="dropdown-link">
                Academics &nbsp;<i className="fas fa-chevron-down"></i> &nbsp;/
              </NavLink>
              <div className="dropdown-menu">
                <NavLink to="/undergraduate">Undergraduate</NavLink>
                <NavLink to="/graduate">Graduate</NavLink>
                <NavLink to="/schools">Schools</NavLink>
                <NavLink to="/global-initiatives">Global Initiatives</NavLink>
                <NavLink to="/interdisciplinary">Interdisciplinary</NavLink>
                <NavLink to="/online-learning">Online Learning</NavLink>
                <NavLink to="/off-campus-learning">Off-campus Learning</NavLink>
                <NavLink to="/libraries">Libraries</NavLink>
              </div>
            </div>
            <NavLink to="/admissions">Admissions & Aid &nbsp;/</NavLink>
            <NavLink to="/athletics">Athletics &nbsp;/</NavLink>
            <div className="dropdown">
              <NavLink to="/research-and-innovation" className="dropdown-link">
                Research & Innovation &nbsp;<i className="fas fa-chevron-down"></i> &nbsp;/
              </NavLink>
              <div className="dropdown-menu">
                <NavLink to="/research-enterprise">Research Enterprise</NavLink>
                <NavLink to="/research-news">Research News</NavLink>
              </div>
            </div>
            <div className="dropdown">
              <NavLink to="/life" className="dropdown-link">
                Life at Penn &nbsp;<i className="fas fa-chevron-down"></i> &nbsp;/
              </NavLink>
              <div className="dropdown-menu">
                <NavLink to="/arts">Arts & Culture</NavLink>
                <NavLink to="/diversity">Diversity</NavLink>
                <NavLink to="/groups-and-organizations">Groups & Organizations</NavLink>
                <NavLink to="/housing-and-dining">Housing & Dining</NavLink>
                <NavLink to="/health-wellness">Health & Wellness</NavLink>
              </div>
            </div>
            <div className="dropdown">
              <NavLink to="/about" className="dropdown-link">
                About &nbsp;<i className="fas fa-chevron-down"></i>
              </NavLink>
              <div className="dropdown-menu">
                <NavLink to="/faq">FAQ</NavLink>
                <NavLink to="/policies">Policies</NavLink>
                <NavLink to="/facts">Facts</NavLink>
                <NavLink to="/university-values">University Values</NavLink>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

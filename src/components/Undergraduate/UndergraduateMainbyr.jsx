import React from 'react'
import Footer from '../Footer/Footer'
import LayoutByr from './LayoutByr/LayoutByr'
import LayoutByrr from './LayoutByrr/LayoutByrr'
import './UndergraduateFactsByrrr.css';
import StatGridByrrr from '../Undergraduate/StateGridByrrr/StateGridByrrr.jsx';
import ApplyByr from './../Undergraduate/ApplyByr/ApplyByr.jsx';
import UniversityPageForl from './UnversityPageForl/UniversityPageForl.jsx';
import Header from '../Header/Header.jsx';


function UndergraduateMainbyr() {
 
    return (
    
      <div>   
      <Header/>  
      <LayoutByr />
      <LayoutByrr />
      <div className="undergraduate-facts-byrrr">
        <StatGridByrrr />
      </div>
      <ApplyByr/>
      <UniversityPageForl/>
      <Footer/>
    </div>
  )
}

export default UndergraduateMainbyr
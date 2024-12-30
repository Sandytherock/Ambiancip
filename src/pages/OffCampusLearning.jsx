import React from 'react'
import Description from '../components/OffCampusLearning/Description'
import OffCampus_Divisions from '../components/OffCampusLearning/OffCampus_Divisions'
import OffCampus_FeaturedStory from '../components/OffCampusLearning/OffCampus_FeaturedStory'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

const OffCampusLearning = () => {
  return (
    <>
    <Header/>
    <Description /> 
    <OffCampus_Divisions />
    <OffCampus_FeaturedStory />
    <Footer/>
    </>
    )
}

export default OffCampusLearning
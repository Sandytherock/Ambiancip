import React from 'react'
import Description from '../components/GlobalInitiatives/Description'
import GI_Divisions from '../components/GlobalInitiatives/GI_Divisions'
import Admissions from '../components/GlobalInitiatives/Admissions'
import Statistics from '../components/GlobalInitiatives/Statistics'
import GI_FeaturedStory from '../components/GlobalInitiatives/GI_FeaturedStory'
import GlobalNews from '../components/GlobalInitiatives/GlobalNews'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
const GlobalInitiatives = () => {
  return (
    <>
    <Header/>
    <Description />
    <GI_Divisions />
    <Admissions />
    <Statistics />
    <GI_FeaturedStory />
    <GlobalNews />
    <Footer/>
    </>
  )
}

export default GlobalInitiatives
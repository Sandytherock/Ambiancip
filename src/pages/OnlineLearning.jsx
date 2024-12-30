import React from 'react'
import Online_Description from '../components/OnlineLearning/Online_Description'
import CoursesPrograms from '../components/OnlineLearning/CoursesPrograms'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
const OnlineLearning = () => {
  return (
    <>
      <Header/>
      <Online_Description />
      <CoursesPrograms />
      <Footer/>
    </>
  )
}

export default OnlineLearning
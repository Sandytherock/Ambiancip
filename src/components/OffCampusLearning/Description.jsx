import React from 'react'
// import "bootstrap/dist/css/bootstrap.min.css";
import '../GlobalInitiatives/Description.css'
import Breadcrumb from '../ResearchandInnovation/breadcrum/breadcrum';

const Description = () => {

  const breadcrumbItems = [
    { label: 'HOME', href: '/' },
    { label: 'ACADEMICS', href: '/academics' },
    { label: 'OFF-CAMPUS LEARNING', href: '/off-campus-learning' },
  ]

  return (
    <div className='description'>
      <div className='descContent'>
        <Breadcrumb items={breadcrumbItems} />
        <h1 className='descHeading'>Off-campus Learning</h1>
        <p className='descContentText'>
          Students know their Penn education can only be boosted by getting involved off campus. They immerse themselves in experiences near and far. Below are just a handful of highlighted opportunities.
        </p>
      </div>

      <div className='descImage'>
        <img src="/assets/images/OffCampus_description.jpeg" alt="Off-campus Learning image" />
      </div>
    </div>
  )
}

export default Description
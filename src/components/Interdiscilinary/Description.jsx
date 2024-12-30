import React from 'react'
// import "bootstrap/dist/css/bootstrap.min.css";
import '../GlobalInitiatives/Description.css';
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
        <h1 className='descHeading'>Interdisciplinary</h1>
        <p className='descContentText'>
          Interdisciplinary opportunities at Penn allow students to express their academic creativity and discover new ways of synthesizing information.
        </p>
      </div>

      <div className='descImage'>
        <img src="/assets/images/Interdisciplinary_description.jpg" alt="Interdisciplinary image" />
      </div>
    </div>
  )
}

export default Description
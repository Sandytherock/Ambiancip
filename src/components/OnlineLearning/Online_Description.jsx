import React from 'react'
// import "bootstrap/dist/css/bootstrap.min.css";
import './Online_Description.css';
import Breadcrumb from '../ResearchandInnovation/breadcrum/breadcrum';

const Online_Description = () => {

  const breadcrumbItems = [
    { label: 'HOME', href: '/' },
    { label: 'ACADEMICS', href: '/academics' },
    { label: 'ONLINE LEARNING', href: '//online-learning' },
  ]


  return (
    <div className='Online_description'>
      <div className='Online_descContent'>
        <Breadcrumb items={breadcrumbItems} />
        <h1 className='Online_descHeading'>Online Learning</h1>
        <p className='Online_descContentText'>
          A leader in online learning, Penn provides people around the nation and world with opportunities to build professional skills, acquire college credit, and immerse themselves in the life of the mind.
        </p>
      </div>
    </div>
  )
}

export default Online_Description
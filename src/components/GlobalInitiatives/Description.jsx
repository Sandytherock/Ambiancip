import React from 'react'
import './Description.css';
import Breadcrumb from '../ResearchandInnovation/breadcrum/breadcrum';

const Description = () => {

  const breadcrumbItems = [
    { label: 'HOME', href: '/' },
    { label: 'ACADEMICS', href: '/academics' },
    { label: 'GLOBAL INITIATIVES', href: '/global-initiatives' },
  ]

  return (
    <div className='description'>
    <div className='descContent'>
        {/* <ol className='breadcrumb'>
            <li className='breadcrumb-item'><a href="#">HOME</a></li>
            <li className='breadcrumb-item'><a href="#">ACADEMICS</a></li>
            <li className='breadcrumb-item'><a href="#">GLOBAL INITIATIVES</a></li>
        </ol> */}
        <Breadcrumb items={breadcrumbItems}/>
        <h1 className='descHeading'>Global Initiatives</h1>
        <p className='descContentText'>
        Welcoming diversity of thought, background, and experience has always guided Penn’s teaching and research, and that mission is more relevant than ever in today’s global society. Penn serves as a welcoming home to thousands of international students, while also supporting students’ academic, research, and professional pursuits abroad, and is always working to build strong connections within the global community.
        </p>
    </div>

    <div className='descImage'>
        <img src="/assets/images/SI_description.jpg" alt="Global Initiatives image" />
    </div>
</div>
  )
}

export default Description
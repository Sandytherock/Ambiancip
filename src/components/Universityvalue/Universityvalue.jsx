import React from 'react'
import './Universityvalue.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Universityvalue() {
    return (
        <>
        <Header/>
        <div className='first'>
            <div className='university'>
                <h1>University Values</h1>
            </div>
            <p className='p'>The University of Pennsylvania is a scholarly community that advances discovery and opportunity toward a better future for all. We embrace excellence, freedom of inquiry and expression, and respect. Penn’s culture is inspired by its founder, Benjamin Franklin—open-minded and curious, inventive and practical, exhibiting brilliance across fields, imperfect but self-improving, and relentlessly focused on enhancing social good. These values are enduring and inspire us to be a positive force for the world, while remaining anchored and committed to our Philadelphia home.</p>
            <p className='dp'>The University announced this position in an email message to the Penn community on Tuesday, September 10, 2024. To read a copy of this message, please visit <span className='ht'> https://penntoday.upenn.edu/announcements/words-guide-us</span>.</p>
            <img src="https://www.upenn.edu/sites/default/files/2024-08/task-force-autumn-fisher.jpg" alt="" />
        </div>
        <Footer/>
        </>
    )
}

export default Universityvalue

import React from 'react'
import './Footer.css'
import Logo from '../../assets/Ambaincip.svg'
function Footer() {
    return (
        <>
            <div className="footerContainer">
                <div className="left-container">
                    <img src={Logo} alt="Logo" />
                    <div className="addressnumber">
                        <p>Philadelphia, PA 19104</p>
                        <p>Telephone: (215) 898-5000</p>
                    </div>
                    <div className="contactlinks">
                        <a href="#" >
                            CONTACT US
                        </a>
                        <a href="#" >
                            MAPS
                        </a>
                        <a href="#" >
                            PARKING
                        </a>
                    </div>
                </div>
                <div className="mid-container">
                    <h3>Navigate</h3>
                    <a href="#">
                        ALUMNI
                    </a>
                    <a href="#">
                        ATHLETICS
                    </a>
                    <a href="#">
                        DIVERSITY
                    </a>
                    <a href="#">
                        HEALTH CARE
                    </a>
                    <a href="#">
                        LIBRARIES
                    </a>
                    <a href="#">
                        ONLINE LEARNING
                    </a>
                    <a href="#">
                        PENN GLOBAL
                    </a>

                </div>
                <div className="right-container">
                    <h3>Penn's Heritage</h3>
                    <p><i>As America’s first university, Penn has a history<br /> that dates back to 1740 and shares many ties <br />with the colonial city of Philadelphia and the<br /> birth of our nation.</i>

                    </p>
                    <button className='btn'>Our History</button>
                </div>
            </div>
        </>
    )
}

export default Footer
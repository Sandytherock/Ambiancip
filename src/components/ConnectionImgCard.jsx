import React from 'react'
import './ConnectionImgCard.css';

function ConnectionImgCard(props) {
    return (
        <div className="imagecard">
            <img src={props.src} alt="" />
            <p className={props.className}>{props.text}</p>
        </div>
    )
}

export default ConnectionImgCard
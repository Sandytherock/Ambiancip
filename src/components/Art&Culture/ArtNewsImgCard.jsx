import React from 'react'
import './ArtNewsImgCard.css'
function ArtNewsImgCard(props) {
    return (
        <>
            <div className="newImgCard">
                <div className="artsimgcard">
                    <img src={props.src} alt='' />
                </div>
                <div className="imgcontent">
                    <h4 style={{ fontFamily: '"EB Garamond", serif', fontSize: '1.4rem', paddingTop: '10px', paddingBottom: '10px' }}>{props.title}</h4>
                    <p>{props.description}</p>
                </div>
            </div>
        </>
    )
}

export default ArtNewsImgCard
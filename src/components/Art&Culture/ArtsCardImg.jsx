import React from 'react'
import './ArtsCardImg.css'

function ArtsCardImg(props) {
  return (
    <>
    <div className="artsimgcard">
        <img src={props.src} alt=''/>
        <h4 style={{ fontFamily: '"EB Garamond", serif', fontSize: '1.4rem', paddingTop: '10px', paddingBottom: '10px' }}>{props.title}</h4>
        <p>{props.description}</p>
    </div>
    </>
  )
}

export default ArtsCardImg
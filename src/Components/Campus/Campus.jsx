import React from 'react'
import campusImg1 from '../../assets/gallery-1.png'
import campusImg2 from '../../assets/gallery-2.png'
import campusImg3 from '../../assets/gallery-3.png'
import campusImg4 from '../../assets/gallery-4.png'
import whiteArrow from '../../assets/white-arrow.png'

import './Campus.css'


function Campus() {
  return (
    <div className='campus container' id='Campus'>
        <div className="gallery">
            <img src={campusImg1} alt='campusImg1' />
            <img src={campusImg2} alt='campusImg2' />
            <img src={campusImg3} alt='campusImg3' />
            <img src={campusImg4} alt='campusImg4' />
        </div>
        <button className='btn dark-btn'>See More <img src={whiteArrow} alt='white arrow' /></button>
        
    </div>
  )
}

export default Campus
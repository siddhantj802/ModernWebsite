import React from 'react'
import './Hero.css'
import darkArrow from '../../assets/dark-arrow.png'

function Hero() {
  return (
    <div className='hero container' id='Hero' >
      <div className="hero-text">
          <h1>Lorem ipsum dolor sit amet. </h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo excepturi delectus officia maiores architecto, dignissimos voluptas? 
              Facilis eos, dolores praesentium id.
          </p>
          <button className="btn">Explore More <img src={darkArrow} alt='darkArrow' /></button>
      </div>
       
    </div>
  )
}

export default Hero
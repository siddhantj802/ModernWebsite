import React from 'react'
import './About.css'
import aboutImg from '../../assets/about.png';
import playIcon from '../../assets/play-icon.png'

function About({playVideo , setPlayVideo}) {
  return (
    <div className='about container' id='About'>
        <div className="about-left">
            <img src={aboutImg} alt='Not found' className='aboutImg' />
            <img src={playIcon} alt='Not found' className='playIcon' onClick = {() => setPlayVideo(!playVideo)} />
        </div>
        <div className="about-right">
            <h2>Lorem Dummy Text</h2>
            <h3> Dummy Text Again</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente consectetur laborum quis cum.</p>
            <p>quaerat magni sint iste amet explicabo, alias dignissimos perspiciatis neque voluptas quae nostrum magnam, nesciunt veritatis repellat</p> 
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis tenetur, non ipsum culpa, laborum voluptates exercitationem molestias eligendi 
                voluptas voluptatibus porro itaque pariatur nihil sapiente excepturi facere libero possimus rerum!
            </p>
        </div>
    </div>
  )
}

export default About
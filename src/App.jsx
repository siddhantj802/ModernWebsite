import React, { useState } from 'react'
import NavBar from './Components/NavBar/NavBar'
import './index.css'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Video from './Components/Video/Video'



function App() {
  const [playVideo, setPlayVideo] = useState()
  return (
    <div>
        <NavBar/>
        <Hero />
        <Title classname='container' subTitle='Some Text' title='Some More Text'/>
        <Programs/>
        
        <About setPlayVideo={setPlayVideo}/>
        <Title classname='container' subTitle='Gallery' title='Campus Photos' />
        <Campus/>
       < Title classname= 'container' subTitle='Testimonials' title='what everybody saying' />
       <Testimonials />
       < Title classname= 'container' subTitle='Connect with Us' title='Contact Info' />
      <Contact />
      <Video playVideo={playVideo} setPlayVideo={setPlayVideo}/>
      <Footer/>
      
        
    </div>
  )
}

export default App

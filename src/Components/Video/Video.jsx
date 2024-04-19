import React, { useRef } from 'react'
import video from '../../assets/video.mp4'
import './Video.css'

function Video({playVideo , setPlayVideo}) {
    const vid = useRef()
    const exitPlayer = (e) => {
        if(e.target == vid.current){
            setPlayVideo(false)
        }
    }
  return (
    <div className= {`videoPlayer ${playVideo ? '' : 'hide'}`} ref = {vid} onClick={exitPlayer}>
        <video src={video} muted autoPlay controls className='vid'/>
    </div>
  )
}

export default Video
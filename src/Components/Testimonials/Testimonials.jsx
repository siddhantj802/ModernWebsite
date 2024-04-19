import React,{useRef} from 'react'
import './Testimonials.css'
import frontArrow from '../../assets/next-icon.png'
import backArrow from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

function Testimonials() {

    const sliderRef = useRef()
    let tx = 0

    const moveBackward = () =>{
      if(tx < 0){
        tx += 25
      }
      sliderRef.current.style.transform = `translateX(${tx}%)`
    }
    const moveForward = () => {
        if (tx > -50){
            tx -= 25
        }
            sliderRef.current.style.transform = `translateX(${tx}%)`;
    
    }
  return (
    <div className='testimonials container' id='Testimonials'>
        <img src={backArrow} alt='backArrow' className='back-btn' onClick = {moveBackward}/>
        <img src={frontArrow} alt='frontArrow' className='next-btn' onClick = {moveForward}/>
        
        <div className="slider">
            <ul ref={sliderRef}>
                <li>
                    <div className="slide">
                        <div className="userInfo">
                            <img src={user_1} alt='user_1'/>
                            <div>
                                <h3>Serena Williams</h3>
                                <span>
                                    NewYork, USA
                                </span>
                            </div>
                           
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, laborum beatae consequatur a dolorem expedita 
                                    totam aliquam doloremque, 
                                    tempora ex perspiciatis, commodi molestiae nam cum sapiente corporis fugiat animi mollitia?
                            </p>
                        </div>
                </li>

                <li>
                    <div className="slide">
                        <div className="userInfo">
                            <img src={user_2} alt='user_1'/>
                            <div>
                                <h3>William D. Foe</h3>
                                <span>
                                    NewYork, USA
                                </span>
                            </div>
                           
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, laborum beatae consequatur a dolorem expedita 
                                    totam aliquam doloremque, 
                                    tempora ex perspiciatis, commodi molestiae nam cum sapiente corporis fugiat animi mollitia?
                            </p>
                        </div>
                </li>

                <li>
                    <div className="slide">
                        <div className="userInfo">
                            <img src={user_3} alt='user_1'/>
                            <div>
                                <h3>Nico Robbins</h3>
                                <span>
                                    NewYork, USA
                                </span>
                            </div>
                           
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, laborum beatae consequatur a dolorem expedita 
                                    totam aliquam doloremque, 
                                    tempora ex perspiciatis, commodi molestiae nam cum sapiente corporis fugiat animi mollitia?
                            </p>
                        </div>
                </li>

                <li>
                    <div className="slide">
                        <div className="userInfo">
                            <img src={user_4} alt='user_1'/>
                            <div>
                                <h3>Ace D King</h3>
                                <span>
                                    NewYork, USA
                                </span>
                            </div>
                           
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, laborum beatae consequatur a dolorem expedita 
                                    totam aliquam doloremque, 
                                    tempora ex perspiciatis, commodi molestiae nam cum sapiente corporis fugiat animi mollitia?
                            </p>
                        </div>
                </li>
            </ul>
        </div>

    </div>
  )
}

export default Testimonials
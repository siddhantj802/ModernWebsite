import React from 'react'
import './Programs.css'
import program1 from '../../assets/program-1.png'
import program2 from '../../assets/program-2.png'
import program3 from '../../assets/program-3.png'
import programIcon1 from '../../assets/program-icon-1.png'
import programIcon2 from '../../assets/program-icon-2.png'
import programIcon3 from '../../assets/program-icon-3.png'

function Programs() {
  return (
    <div className='programs container' id='Programs'>
        <div className="program">
            <img src={program1} alt="pg-1" />
            <div className="caption">
                <img src={programIcon1} alt='Icon1' />
                <p>Some Text</p>
            </div>
        </div>
        <div className="program">
            <img src={program2} alt="pg-2" />
            <div className="caption">
                <img src={programIcon2} alt='Icon2' />
                <p>Some Text</p>
            </div>
        </div>
        <div className="program">
            <img src={program3} alt="pg-3" />
            <div className="caption">
                <img src={programIcon3} alt='Icon3' />
                <p>Some Text</p>
            </div>
        </div>

    </div>
  )
}

export default Programs
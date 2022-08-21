import React from 'react'
import WorkCarousel from './WorkCarousel'

const Works = () => {
  return (
    <div className='works' id="works">
      <h2 className='works-header text-center'>HERE ARE SOME OF OUR PREVIOUS WORKS</h2>
      <div className="work-container">
       <WorkCarousel/>
      </div>

    </div>
  )
}

export default Works
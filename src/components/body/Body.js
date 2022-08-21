import React from 'react'
import About from './About'
import Contact from './Contact'
import Services from './Services'
import Works from './Works'

const Body = () => {
  return (
    <div className='page-container'>
        <About/>
        <Services/>
        <Works/>
        <Contact/>
    </div>
  )
}

export default Body
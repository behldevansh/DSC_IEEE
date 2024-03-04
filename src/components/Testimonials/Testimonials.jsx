import React from 'react'
import './Testimonials.css'
import SlickSlider from './SlickSlider'

const Testimonials = () => {
  return (
    <div className='t-wrapper'>
       <div className='container'>
           <div className='t-container'>
              <div className='t-head'>
                 <span className='tag'>Insights from Our Experts</span>
                 <span className='title'>Testimonials</span>
                 <span className='des'>Hear From Those Who've Experienced Excellence.</span>
              </div>

           </div>
           {/* slider */}
           <SlickSlider/>

       </div>
      
    </div>
  )
}

export default Testimonials

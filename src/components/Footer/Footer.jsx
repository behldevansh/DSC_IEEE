import React from 'react'
import './Footer.css'
import { transform } from 'framer-motion'
import {motion,useMotionValueEvent,useScroll} from 'framer-motion'
import {Link} from 'react-scroll'

const Footer = () => {
  return (
    <div className='f-wrapper'>
       <div className='container'>
          <div className='f-container'>
               <span className='title'>IEEE NSUT WELCOMES YOU !!</span>

               <hr/>
               <div className='f-menu'>
               <Link to="h-container" spy={true} smooth={true}><span>Home</span></Link>
                  {/* <span>What we do</span>
                  <span>How it works</span>
                  <span>some info</span>
                  <span>Testimonials</span> */}
                  <Link to="wwd-wrapper" spy={true} smooth={true}><span>what is DSC?</span></Link>
            <Link to="hiw-wrapper" spy smooth offset={100} ><span>How DSC works?</span></Link>
            <Link to= "wwi-wrapper" spy smooth><span>About</span></Link>
            <Link to="t-wrapper" spy smooth offset={100}> <span>Testimonials</span></Link>
               </div>
               <hr/>
          </div>


       </div>
      
    </div>
  )
}

export default Footer

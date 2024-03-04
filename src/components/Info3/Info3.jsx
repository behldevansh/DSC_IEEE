import React from 'react'
import './Info3.css'
import { hitFeatures } from '@/src/utils/data'
import Image from 'next/image'
import { tagVariants, titleVariants } from '@/src/utils/animation'
import { motion } from 'framer-motion'
// import { featureVariants } from '@/src/utils/animation'

const Info3 = () => {

  const featureVariants = {
    offscreen: {
      scale: 0.5
    },
    onscreen: {
      scale: 1,
      transition: {
        duration: 1.5,
        type: "spring",
      },
    },
  }

  return (
    <div className='hiw-wrapper'>
       <div className='container'>
          <div className='hiw-container'>
          {/* heading */}
          <div className='hiw-head'>
              <motion.span 
              variants={tagVariants}
              // initial="offscreen"
              // WhileInView={"onscreen"}
              className='tag'>"Enhancement workshops: Elevate skills, inspire growth.</motion.span>

              <motion.span
              variants={titleVariants}
              // initial="offscreen"
              // WhileInView={"onscreen"}
               className='title'>Enhancement Workshops</motion.span>

          </div>


          <div className='hiw-features'>
          {
            hitFeatures.map((feature,i)=>(
                <motion.div 
                variants={featureVariants}
                initial="offscreen"
                whileInView={"onscreen"}

                className='hiw-feature' key={i}>
                    {/* left side */}
                    <motion.div
                    initial={{opacity: 0, x: -100}}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                      transition: {
                        type: "easeIn",
                        duration: 1,
                        delay:0.7
                      },
                    }}


                     className='detail'>
                    <span className='des'> 0{i+1}</span>
                    <span className='sec-title'>{feature.title}</span>
                    <span className='text'>{feature.des}</span>


                    </motion.div>

                    {/* right side */}
                    <div className='icon'>
                    <Image src={feature.icon} width={128} height={128} alt='feature' style={{translate: "50% 0rem"}}/>

                    </div>

                </motion.div>

            ))
          }

          </div>





          </div>
       </div>
      
    </div>
  )
}

export default Info3

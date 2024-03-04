"use client"

import React from 'react'
import './Info.css'
import {features} from "@/src/utils/data";
import Image from 'next/image'
import { motion } from "framer-motion";
import { desVariants, tagVariants, titleVariants } from '@/src/utils/animation';

const Info = () => {
  return (
    <div className='wwd-wrapper'>
       <div className='container'>
          <div className='wwd-container'>
          {/* head section */}
             <div className='wwd-head'>
             <motion.span initial="offscreen" whileInView={"onscreen"} variants={tagVariants} className='tag'>Event-1</motion.span>

                <motion.span initial="offscreen" whileInView={"onscreen"} variants={titleVariants} className='title'>{""} SPEAKER SESSIONS</motion.span>
                
                <motion.span initial="offscreen" whileInView={"onscreen"} variants={desVariants} className='des'>*********</motion.span>

             </div>

             {/* blocks */}
             <div className='wwd-blocks'>
                {/* first block */}
                <div className='wwd-block'>
                  <motion.span variants={titleVariants} initial="offscreen" whileInView={"onscreen"} className='sec-title'>Speaker sessions featured diverse topics ranging from young professional experiences to international seminars at the DSSYWC 2022.</motion.span>
                  <motion.span variants={desVariants} initial="offscreen" whileInView={"onscreen"} className='text'>********* </motion.span>
                

                <div className='block-features'>
                   {features.slice(0,3).map((feature,i)=>(
                    <div className='block-feature' key={i}>
                       <Image
                        src={feature.icon}
                        alt="feauture"
                        width={60}
                        height={60}
                       />
                       <span>{feature.title}</span>

                    </div>
                   ))}
                   </div>

                </div>

             </div>

             {/* info block */}
             <div className='wwd-support'>

             {/* left side */}
             <div >
                <span className='sec-title'> ABOUT IEEE NSUT  </span>
             </div>

             {/* right side */}
             <div >
                <span className='text'> IEEE NSUT, the largest student branch in Region 10 Asia Pacific and ranked fifth globally, exemplifies a steadfast dedication to technological progress through organizing diverse national-level events and conferences. Honored with the "IEEE Regional Exemplary Student Branch Award 2022" for outstanding performance, IEEE NSUT aims to make cutting-edge technologies accessible, inspiring the community and shaping the future of engineering.</span>
             </div>
            
                
             </div>


          </div>

       </div>
      
    </div>
  )
}

export default Info

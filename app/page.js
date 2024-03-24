"use client"
import Navbar from '@/src/components/Navbar/Navbar';
import './page.css'
import Hero from '@/src/components/Hero/Hero';
import BrandingVideo from '@/src/components/BrandingVideo/BrandingVideo';
import Info from '@/src/components/Info/Info';
import Info2 from '@/src/components/Info2/Info2';
import { motion,useAnimation } from "framer-motion";
import Info3 from '@/src/components/Info3/Info3';
import Teacher from '@/src/components/Teacher/Teacher';
import Testimonials from '@/src/components/Testimonials/Testimonials';
import Footer from '@/src/components/Footer/Footer';
import GithubCorner from '@/src/components/GithubCorner';


export default function Home() {
  const controls = useAnimation();

  return (
    <>
    <GithubCorner url='https://github.com/behldevansh/DSC_IEEE'/>

    <motion.div className="app" animate={controls}>
    <Navbar/>
    <Hero/>
    <BrandingVideo/>
    <Info/>
    
    <motion.div
    onViewportEnter={()=> controls.start({
      backgroundColor:"var(--secondary-color)",
    })}
    onViewportLeave={()=> controls.start({
      backgroundColor:"white",
    })}
    viewport={{amount: 0.4}}
    >
         <Info2/>
    </motion.div>

    <Info3/>
    


    <motion.div
    onViewportEnter={()=> controls.start({
      backgroundColor:"var(--primary-color)",
    })}
    onViewportLeave={()=> controls.start({
      backgroundColor:"white",
    })}
    viewport={{amount: 0.4}}
    >
         <Teacher/>
    </motion.div>

    <Testimonials/>
    <Footer/>
    </motion.div>
  </>
  );
}

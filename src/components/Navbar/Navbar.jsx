"use client";

import React, { useState } from "react";
import "./Navbar.css";
import { BiMenuAltRight } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import { transform } from "framer-motion";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Link } from "react-scroll";
import {
  containerVariants,
  tagVariants,
  titleVariants,
} from "@/src/utils/animation";

const Navbar = () => {
  const [mobileMenuOpened, setMobileMenuOpened] = useState(false);
  const [navStyle, setNavStyle] = useState("");
  const { scrollYProgress } = useScroll();
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > 0.2) {
      setNavStyle("sticky");
    } else {
      setNavStyle("");
    }
  });
  return (
    <div className={`n-wrapper ${navStyle}`}>
      {/* desktop version */}
      <div className="container">
        <div className="n-container">
          {/* left side */}
          <div className="n-logo">
            <motion.img
              variants={containerVariants(0.5)}
              initial="offscreen"
              whileInView={"onscreen"}
              src="logo1.png"
              alt="logo"
            />
          </div>

          {/* right side */}
          <div className="n-right">
            <div className="n-menu">
              <Link to="wwd-wrapper" spy={true} smooth={true}>
                <span>what is DSC?</span>
              </Link>
              <Link to="hiw-wrapper" spy smooth offset={100}>
                <span>How DSC works?</span>
              </Link>
              <Link to="wwi-wrapper" spy smooth>
                <span>About</span>
              </Link>
              <Link to="t-wrapper" spy smooth offset={100}>
                {" "}
                <span>Testimonials</span>
              </Link>
            </div>
            <div className="fund-button">button</div>
          </div>
        </div>
      </div>

      {/* mobile version */}
      <div className="nm-container">
        {/* logo */}
        <motion.img
              variants={containerVariants(0.5)}
              initial="offscreen"
              whileInView={"onscreen"}
              src="logo1.png"
              alt="logo"
            />

        {/* menu icon */}
        {!mobileMenuOpened ? (
          <BiMenuAltRight size={30} onClick={() => setMobileMenuOpened(true)} />
        ) : (
          <RxCross2 size={30} onClick={() => setMobileMenuOpened(false)} />
        )}

        {/* mobile menu */}
        <div
          className="nm-menu"
          style={{ transform: mobileMenuOpened && "translateX(0%)" }}
        >
          <Link
            onClick={() => setMobileMenuOpened(false)}
            to="wwd-wrapper"
            spy={true}
            smooth={true}
          >
            <span>what is DSC?</span>
          </Link>
          <Link
            onClick={() => setMobileMenuOpened(false)}
            to="hiw-wrapper"
            spy
            smooth
            offset={100}
          >
            <span>How DSC works?</span>
          </Link>
          <Link
            onClick={() => setMobileMenuOpened(false)}
            to="wwi-wrapper"
            spy
            smooth
          >
            <span>ABOUT</span>
          </Link>
          <Link
            onClick={() => setMobileMenuOpened(false)}
            to="t-wrapper"
            spy
            smooth
            offset={100}
          >
            {" "}
            <span>Testimonials</span>
          </Link>
          <div className="m-funded-button">button</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import "./NavBar.css"
import part1 from "../../Images/Logo/part1.png"
import part2 from "../../Images/Logo/part2.png"
import part3 from "../../Images/Logo/part3.png"
import part4 from "../../Images/Logo/part4.png"
import part5 from "../../Images/Logo/part5.png"
const NavBar = () => {
  const [list, setList] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const listState = list ? 'fa-icon-open':'fa-icon-close'
  const circleState = list ? 'circle-open' : 'circle-close'
  const fa1State = list ? 'fa1-open' : 'fa1-close'
  const fa2State = list ? 'fa2-open' : 'fa2-close'
  const fa3State = list ? 'fa3-open' : 'fa3-close'

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const scrollState = scrolled ? 'nav-scroll-down' : 'nav-scroll-up'


  return (
    <div className={scrollState}>
    <div className={listState} onClick={() => setList(!list)}>
      <span className={fa1State}></span>
      <span className={fa2State}></span>
      <span className={fa3State}></span>
    </div>
    <div className='Nav-Logo'>
        <img src={part1} alt='' className='nav-logo-parts nav-logo-part1'/>
        <img src={part2} alt='' className='nav-logo-parts nav-logo-part2'/>
        <img src={part3} alt='' className='nav-logo-parts nav-logo-part3'/>
        <img src={part4} alt='' className='nav-logo-parts nav-logo-part4'/>
        <div className='part5-parent'><img src={part5} alt='' className='nav-logo-parts nav-logo-part5'/></div>
    </div>
      <div className={circleState}></div>
    </div>
  )
}

export default NavBar
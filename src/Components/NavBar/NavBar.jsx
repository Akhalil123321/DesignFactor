import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { MdLanguage } from "react-icons/md";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { FaCouch } from "react-icons/fa";
import "./NavBar.css"
import part1 from "../../Images/Logo/part1.png";
import part2 from "../../Images/Logo/part6.png";
import part3 from "../../Images/Logo/part5.png";
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
  const logoState1 = scrolled ? 'nav-logo-parts nav-logo-part1-close' : 'nav-logo-parts nav-logo-part1'
  const logoState2 = scrolled ? 'nav-logo-part2-close' : 'nav-logo-part2'
  const logoState3 = scrolled ? 'nav-logo-parts nav-logo-part3-close' : 'nav-logo-parts nav-logo-part3'
  /*const contactScroll = scrolled ? 'right-container-ch1-down' : 'right-container-ch1'*/
  /*const contactIcon = scrolled ? 'contact-icon-down' : 'contact-icon'*/
  /* const projectsScroll = scrolled ? 'right-container-ch2-down' : 'right-container-ch2'*/
  /* const projectsIcon = scrolled ? 'projects-icon-down' : 'projects-icon'*/


  return (
    <div className={scrollState}>
    <div className='fa-container'>
      <div className={listState} onClick={() => setList(!list)}>
        <span className={fa1State}></span>
        <span className={fa2State}></span>
        <span className={fa3State}></span>
      </div>
      {/*<div className={projectsScroll}>
        <span className='right-container-ch2-title'>Projects</span>
          <div className='right-container-ch21'></div>
          <div className='right-container-ch22'></div>
        </div>*/}
        <FaCouch className= 'projects-icon-down'/>
    </div>
    <div className='Nav-Logo'>
        <img src={part1} alt='' className={logoState1}/>
        <div className='part2-parent'><img src={part2} alt='' className={logoState2}/></div>
        <div className='part3-parent'><img src={part3} alt='' className={logoState3}/></div>
    </div>
      <div className={circleState}></div>
      <div className='right-container'>
        <BiMessageRoundedDetail className= 'contact-icon-down'/>
        {/*<div className={contactScroll}>
          <span className='right-container-ch1-title'>Contact </span>
          <div className='right-container-ch11'></div>
          <div className='right-container-ch12'></div>
        </div>*/}
        <MdLanguage className='languages-icon'/>
      </div>
    </div>
  )
}

export default NavBar

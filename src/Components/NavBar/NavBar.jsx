import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import "./NavBar.css"
import part1 from "../../Images/Logo/part1.png"
import part2 from "../../Images/Logo/part6.png"
import part3 from "../../Images/Logo/part5.png"
// import chatIcon from "../../Images/chat.svg"
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


  return (
    <div className={scrollState}>
    <div className={listState} onClick={() => setList(!list)}>
      <span className={fa1State}></span>
      <span className={fa2State}></span>
      <span className={fa3State}></span>
    </div>
    <div className='Nav-Logo'>
        <img src={part1} alt='' className={logoState1}/>
        <div className='part2-parent'><img src={part2} alt='' className={logoState2}/></div>
        <div className='part3-parent'><img src={part3} alt='' className={logoState3}/></div>
    </div>
      <div className={circleState}></div>
        {/* <img src={chatIcon} alt='' className='chat-icon'/> */}
        <svg xmlns="http://www.w3.org/2000/svg" width="128" height="40" viewBox="0 0 128 40" >
          <path d="M16.216,0h94.8a16.216,16.216,0,1,1,0,32.432v7.7l-13.646-7.7H16.216A16.216,16.216,0,0,1,16.216,0Z" ></path>
        </svg>
      {/* <div className='Contact-us'>Contact Us</div> */}
    </div>
  )
}

export default NavBar
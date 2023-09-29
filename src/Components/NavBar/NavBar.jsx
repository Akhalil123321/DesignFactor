import React from 'react'
import { useState, useEffect } from 'react'
import { MdLanguage } from "react-icons/md";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { FaCouch } from "react-icons/fa";
import { FaBorderAll } from "react-icons/fa6";
import { RiFridgeFill } from "react-icons/ri";
import { GiElectricalSocket } from "react-icons/gi";
import { CgGym } from "react-icons/cg";
import { BsDoorOpenFill } from "react-icons/bs";
import { FaToilet } from "react-icons/fa";
import { GiTheaterCurtains } from "react-icons/gi";
import { GiMarbles } from "react-icons/gi";
import { BsBuildings } from "react-icons/bs";
import "./NavBar.css"
import part1 from "../../Images/Logo/part1.png";
import part2 from "../../Images/Logo/part6.png";
import part3 from "../../Images/Logo/part5.png";

const NavBar = () => {
  const [list, setList] = useState(false);
  const [categories, setCategories] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const listState = list ? 'fa-icon-open':'fa-icon-close'
  const circleState = list ? 'circle-open' : 'circle-close'
  const fa1State = list ? 'fa1-open' : 'fa1-close'
  const fa2State = list ? 'fa2-open' : 'fa2-close'
  const fa3State = list ? 'fa3-open' : 'fa3-close'
  const categoriesClose1 = categories ? 'categories-close-icon-x-1-o' : 'categories-close-icon-x-1'
  const categoriesClose2 = categories ? 'categories-close-icon-x-2-o' : 'categories-close-icon-x-2'
  const categoriesText = categories? 'categories-icon-text-o' : 'categories-icon-text'
  const categoriesClose = categories? 'categories-icon-close-o' : 'categories-icon-close'
  const categoriesCircle = categories? 'categories-icon-circle-o' : 'categories-icon-circle'
  const categoriesAll = categories? 'categories-all-o' : 'categories-all'
  const catCircleAll = categories? 'cat-circle-all-o' : 'cat-circle-all'
  const blurFilter = categories? 'blur-filter' : 'blur-filter-o'

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
    <div className='fa-container'>
      <div className={listState} onClick={() => {setList(!list); setCategories(false)}}>
        <span className={fa1State}></span>
        <span className={fa2State}></span>
        <span className={fa3State}></span>
      </div>
        <div className='categories-icon-cont'>
        <div className={blurFilter} onClick={() =>setCategories(false)}></div>
        <div className={categoriesCircle}>
          <div className={`furniture-box ${catCircleAll}`} onClick={() => setCategories(false)}><FaCouch className='cat-icon'/><span className='cat-text'>Furniture</span></div>
          <div className={`Appliances-box ${catCircleAll}`} onClick={() => setCategories(false)}><RiFridgeFill className='cat-icon'/><span className='cat-text'>Appliances</span></div>
          <div className={`Ceramics-box ${catCircleAll}`} onClick={() => setCategories(false)}><FaBorderAll className='cat-icon'/><span className='cat-text'>Ceramics</span></div>
          <div className={`Sanitary-box ${catCircleAll}`} onClick={() => setCategories(false)}><FaToilet className='cat-icon'/><span className='cat-text'>Sanitary</span></div>
          <div className={`Sockets-box ${catCircleAll}`} onClick={() => setCategories(false)}><GiElectricalSocket className='cat-icon'/><span className='cat-text'>Sockets</span></div>
          <div className={`GYM-box ${catCircleAll}`} onClick={() => setCategories(false)}><CgGym className='cat-icon'/><span className='cat-text'>GYM</span></div>
          <div className={`Doors-box ${catCircleAll}`} onClick={() => setCategories(false)}><BsDoorOpenFill className='cat-icon'/><span className='cat-text'>Doors</span></div>
          <div className={`Fit-out-box ${catCircleAll}`} onClick={() => setCategories(false)}><BsBuildings className='cat-icon'/><span className='cat-text'>Fit-out</span></div>
          <div className={`Marble-box ${catCircleAll}`} onClick={() => setCategories(false)}><GiMarbles className='cat-icon'/><span className='cat-text'>Marble</span></div>
          <div className={`Curtains-box ${catCircleAll}`} onClick={() => setCategories(false)}><GiTheaterCurtains className='cat-icon'/><span className='cat-text'>Curtains</span></div>
        </div>
          <div className= 'categories-icon' onClick={() => setCategories(!categories)}>
            <div className={categoriesClose1}></div>
            <div className={categoriesClose2}></div>
            <div alt='Furniture' className={`categories-icon-1 ${categoriesAll}`}></div>
            <div alt='Appliances' className={`categories-icon-2 ${categoriesAll}`}></div>
            <div alt='Ceramics' className={`categories-icon-3 ${categoriesAll}`}></div>
            <div alt='Sanitary' className={`categories-icon-4 ${categoriesAll}`}></div>
        </div>
          <span className={categoriesText}>Categories</span>
          <span className={categoriesClose}>Close</span>
        </div>
    </div>
    <div className='Nav-Logo'>
        <img src={part1} alt='' className={logoState1}/>
        <div className='part2-parent'><img src={part2} alt='' className={logoState2}/></div>
        <div className='part3-parent'><img src={part3} alt='' className={logoState3}/></div>
    </div>
      <div className={circleState}></div>
      <div className='right-container'>
        <div className= 'contact-icon-cont' onClick={() =>setCategories(false)}>
          <BiMessageRoundedDetail className= 'contact-icon'/>
          <span className='contact-icon-text'> Contact us</span>
        </div>
        <MdLanguage className='languages-icon' onClick={() =>setCategories(false)}/>
      </div>
    </div>
  )
}

export default NavBar
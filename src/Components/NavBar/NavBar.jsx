/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useLocation } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa6";
import enLanguage from '../../Images/ENLanguage.png'
import arLanguage from '../../Images/ARLanguage.png'
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
import { BiSolidHome } from "react-icons/bi";
import "./NavBar.css"
import part1 from "../../Images/Logo/part1.png";
import part2 from "../../Images/Logo/part6.png";
import part3 from "../../Images/Logo/part5.png";

const NavBar = () => {
  const [list, setList] = useState(false);
  const [categories, setCategories] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [Language, setLanguage] = useState(false);
  const [LanguageClicked, setLanguageClicked] = useState(false);
  const [homeState, setHomeState] = useState(false);
  const [englishActive, setEnglishActive] = useState(true);
  const [arabicActive, setArabicActive] = useState(false);
  const [order, setOrder] = useState(true);

  const [furnitureState, setFurnitureState] = useState(false);
  const [appliancesState, setAppliancesState] = useState(false);
  const [ceramicsState, setCeramicsState] = useState(false);
  const [sanitaryState, setSanitaryState] = useState(false);
  const [socketState, setSocketState] = useState(false);
  const [gymState, setGymState] = useState(false);
  const [doorState, setDoorState] = useState(false);
  const [fitoutState, setFitoutState] = useState(false);
  const [marbleState, setMarbleState] = useState(false);
  const [curtinState, setCurtinState] = useState(false);

  const furnitureStateIcon = furnitureState ? 'Icon-State-Active':''
  const appliancesStateIcon = appliancesState ? 'Icon-State-Active':''
  const ceramicsStateIcon = ceramicsState ? 'Icon-State-Active':''
  const sanitaryStateIcon = sanitaryState ? 'Icon-State-Active':''
  const socketStateIcon = socketState ? 'Icon-State-Active':''
  const gymStateIcon = gymState ? 'Icon-State-Active':''
  const doorStateIcon = doorState ? 'Icon-State-Active':''
  const fitoutStateIcon = fitoutState ? 'Icon-State-Active':''
  const marbleStateIcon = marbleState ? 'Icon-State-Active':''
  const curtinStateIcon = curtinState ? 'Icon-State-Active':''
  const englishIsActive = englishActive ? '':'english-language-close'
  const arabicIsActive = arabicActive ? '':'arabic-language-close'
  const orderActive = order ? 'english-order-active':'arabic-order-active'


  const listState = list ? 'fa-icon-open':'fa-icon-close'
  const circleState = list ? 'circle-open' : 'circle-close'
  const fa1State = list ? 'fa1-open' : 'fa1-close'
  const fa2State = list ? 'fa2-open' : 'fa2-close'
  const fa3State = list ? 'fa3-open' : 'fa3-close'
  const categoriesText = categories? 'categories-icon-text-o' : 'categories-icon-text'
  const categoriesClose = categories? 'categories-icon-close-o' : 'categories-icon-close'
  const categoriesCircle = categories? 'categories-icon-circle-o' : 'categories-icon-circle'
  const catCircleAll = categories? 'cat-circle-all-o' : 'cat-circle-all'
  const homeButtonState = homeState? 'appear-home-button' : 'disable-home-button'

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
  const languageHandleClick = () => {
    setLanguageClicked(true);
    setTimeout(() => {
      setLanguageClicked(false);
    }, 1000);
  }
  const scrollState = scrolled ? 'nav-scroll-down' : 'nav-scroll-up'
  const logoState1 = scrolled ? 'nav-logo-parts nav-logo-part1-close' : 'nav-logo-parts nav-logo-part1'
  const logoState2 = scrolled ? 'nav-logo-part2-close' : 'nav-logo-part2'
  const logoState3 = scrolled ? 'nav-logo-parts nav-logo-part3-close' : 'nav-logo-parts nav-logo-part3'
  const catListScroll = scrolled ? 'categories-icon-circle-o-down' : ''

  const location = useLocation();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (location.pathname === '/Main') {
      setHomeState(false);
    } else if (location.pathname === '/') {
      setHomeState(false);
    } else {
      setHomeState(true);
    }
    if (location.pathname === '/Furniture') {
      setFurnitureState(true);
    } else {
      setFurnitureState(false);
    }
    if (location.pathname === '/Appliances') {
      setAppliancesState(true);
    } else {
      setAppliancesState(false);
    }
    if (location.pathname === '/ceramics') {
      setCeramicsState(true);
    } else {
      setCeramicsState(false);
    }
    if (location.pathname === '/Sanitary') {
      setSanitaryState(true);
    } else {
      setSanitaryState(false);
    }
    if (location.pathname === '/Sockets') {
      setSocketState(true);
    } else {
      setSocketState(false);
    }
    if (location.pathname === '/Gym') {
      setGymState(true);
    } else {
      setGymState(false);
    }
    if (location.pathname === '/Doors') {
      setDoorState(true);
    } else {
      setDoorState(false);
    }
    if (location.pathname === '/Fitout') {
      setFitoutState(true);
    } else {
      setFitoutState(false);
    }
    if (location.pathname === '/Marble') {
      setMarbleState(true);
    } else {
      setMarbleState(false);
    }
    if (location.pathname === '/Curtains') {
      setCurtinState(true);
    } else {
      setCurtinState(false);
    }
    },);
  return (
    <div className={scrollState}>
    <div className='fa-container'>
      <div className={listState} onClick={() => {setList(!list); setCategories(false)}}>
        <span className={fa2State}></span>
        <span className={fa1State}></span>
        <span className={fa3State}></span>
      </div>
      <div className={circleState}></div>
    </div>
        <div className='list-all-cont-box'>
          <div className='categories-icon-cont' onClick={() => setCategories(!categories)}>
            <span className={categoriesText}>
              Categories
            </span>
            <span className={categoriesClose}>
              Close
            </span>
          </div>
        </div>
        <div className='list-all-cont-box'>
          <div className='nav-careers-cont'>
            <span>Careers</span>
          </div>
        </div>
          <div className='space-width'></div>
        <div className={`${categoriesCircle} ${catListScroll}`}>
          <Link to="/Furniture"><div className={`furniture-box ${catCircleAll} ${furnitureStateIcon}`} ><FaCouch className='cat-icon'/><span className='cat-text'>Furniture</span></div></Link>
          <Link to="/Appliances"><div className={`Appliances-box ${catCircleAll} ${appliancesStateIcon}`} ><RiFridgeFill className='cat-icon'/><span className='cat-text'>Appliances</span></div></Link>
          <Link to="/ceramics"><div className={`Ceramics-box ${catCircleAll} ${ceramicsStateIcon}`} ><FaBorderAll className='cat-icon'/><span className='cat-text'>Ceramics</span></div></Link>
          <Link to="/Sanitary"><div className={`Sanitary-box ${catCircleAll} ${sanitaryStateIcon}`} ><FaToilet className='cat-icon'/><span className='cat-text'>Sanitary</span></div></Link>
          <Link to="/Sockets"><div className={`Sockets-box ${catCircleAll} ${socketStateIcon}`} ><GiElectricalSocket className='cat-icon'/><span className='cat-text'>Sockets</span></div></Link>
          <Link to="/Main" onClick={() => setCategories(false)} className={homeButtonState}><div className={`Home-box ${catCircleAll}`} ><BiSolidHome className='cat-icon-home'/><span className='cat-text-home'>Home</span></div></Link>
          <Link to="/Gym"><div className={`GYM-box ${catCircleAll} ${gymStateIcon}`} ><CgGym className='cat-icon'/><span className='cat-text'>GYM</span></div></Link>
          <Link to="/Doors"><div className={`Doors-box ${catCircleAll} ${doorStateIcon}`} ><BsDoorOpenFill className='cat-icon'/><span className='cat-text'>Doors</span></div></Link>
          <Link to="/Fitout"><div className={`Fit-out-box ${catCircleAll} ${fitoutStateIcon}`} ><BsBuildings className='cat-icon'/><span className='cat-text'>Fit-out</span></div></Link>
          <Link to="/Marble"><div className={`Marble-box ${catCircleAll} ${marbleStateIcon}`} ><GiMarbles className='cat-icon'/><span className='cat-text'>Marble</span></div></Link>
          <Link to="/Curtains"><div className={`Curtains-box ${catCircleAll} ${curtinStateIcon}`} ><GiTheaterCurtains className='cat-icon'/><span className='cat-text'>Curtains</span></div></Link>
        </div>
          <Link to="/Main" className='nav-logo-cont' onClick={() => setCategories(false)}>
          <span class="go-main-text">Home Page</span>
            <div className='Nav-Logo' >
                <img src={part1} alt='' className={logoState1}/>
                <div className='part2-parent'><img src={part2} alt='' className={logoState2}/></div>
                <div className='part3-parent'><img src={part3} alt='' className={logoState3}/></div>
            </div>
          </Link>
          <div className='space-width'></div>
    <div className='list-all-cont-box'>
      <div className='nav-contact-cont'>
        <a href="tel:009710508069215">050 806 9215</a>
      </div>
    </div>
    <div className='list-all-cont-box'>
      <div className='nav-email-cont'>
        <a href="https://api.whatsapp.com/send?phone=971508069215" target="_blank">Chat With Us</a>
      </div>
    </div>
        <div className='Language-bar-cont-par'>
          <div className={`Language-bar-cont ${orderActive}`}>
            <div className={`language-butt-cont ${englishIsActive}`} onClick={() => {setArabicActive(false); setOrder(true)}}>
              <span className='language-butt-text'>EN</span>
              <img src={enLanguage} alt='' className='language-butt-flag'/>
            </div>
            <div className={`language-butt-cont ${arabicIsActive}`}  onClick={() => {setEnglishActive(false); setOrder(false)}}>
              <span className='language-butt-text'>AR</span>
              <img src={arLanguage} alt='' className='language-butt-flag'/>
            </div>
          </div>
          <FaAngleDown className='language-arrow'  onClick={() => {setArabicActive(true); setEnglishActive(true)}}/>
        </div>
      </div>
  )
}
export default NavBar
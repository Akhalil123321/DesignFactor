/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import { useState, useEffect } from 'react'
import { useFiles } from '../../Context/FilesContext';
import { Link, useLocation } from "react-router-dom";
import enLanguage from '../../Images/ENLanguage.png'
import arLanguage from '../../Images/ARLanguage.png'
import { FaCouch } from "react-icons/fa";
import { FaUsersCog } from "react-icons/fa";
import { FaBorderAll } from "react-icons/fa6";
import { FaScrewdriverWrench } from "react-icons/fa6";
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
import part2 from "../../Images/Logo/part2.png";
import part3 from "../../Images/Logo/part3.png";

const NavBar = () => {
  const { toggleInquiry } = useFiles();

  const handleToggle = () => {
    toggleInquiry(true);
  };

  const [list, setList] = useState(false);
  const [scrollEnabled, setScrollEnabled] = useState(true);
  const [categories, setCategories] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [Language, setLanguage] = useState(false);
  const [LanguageClicked, setLanguageClicked] = useState(false);
  const [homeState, setHomeState] = useState(false);
  const [englishActive, setEnglishActive] = useState(false);
  const [circleListHead, setCircleListHead] = useState(false);
  const [arabicActive, setArabicActive] = useState(true);
  const [furnitureState, setFurnitureState] = useState(false);
  const [appliancesState, setAppliancesState] = useState(false);
  const [ceramicsState, setCeramicsState] = useState(false);
  const [sanitaryState, setSanitaryState] = useState(false);
  const [lighting, setLighting] = useState(false);
  const [gymState, setGymState] = useState(false);
  const [doorState, setDoorState] = useState(false);
  const [fitoutState, setFitoutState] = useState(false);
  const [marbleState, setMarbleState] = useState(false);
  const [curtinState, setCurtinState] = useState(false);
  const [maintenanceState, setMaintenanceState] = useState(false);
  const [accessoriesState, setAccessoriesStateIcon] = useState(false);

  const furnitureStateIcon = furnitureState ? 'Icon-State-Active':''
  const appliancesStateIcon = appliancesState ? 'Icon-State-Active':''
  const ceramicsStateIcon = ceramicsState ? 'Icon-State-Active':''
  const sanitaryStateIcon = sanitaryState ? 'Icon-State-Active':''
  const LightingIcon = lighting ? 'Icon-State-Active':''
  const gymStateIcon = gymState ? 'Icon-State-Active':''
  const doorStateIcon = doorState ? 'Icon-State-Active':''
  const fitoutStateIcon = fitoutState ? 'Icon-State-Active':''
  const marbleStateIcon = marbleState ? 'Icon-State-Active':''
  const curtinStateIcon = curtinState ? 'Icon-State-Active':''
  const maintenanceStateIcon = maintenanceState ? 'Icon-State-Active':''
  const accessoriesStateIcon = accessoriesState ? 'Icon-State-Active':''
  const englishIsClose = englishActive ? '':'english-language-close'
  const arabicIsClose = arabicActive ? '':'arabic-language-close'
  const listState = list ? 'fa-icon-open':'fa-icon-close'
  const circleState = list ? 'circle-open' : 'circle-close'
  const liState = list ? 'circle-list-list' : 'circle-list-list-close'
  const fa1State = list ? 'fa1-open' : 'fa1-close'
  const fa2State = list ? 'fa2-open' : 'fa2-close'
  const fa3State = list ? 'fa3-open' : 'fa3-close'
  const categoriesText = categories? 'categories-icon-text-o' : 'categories-icon-text'
  const categoriesClose = categories? 'categories-icon-close-o' : 'categories-icon-close'
  const categoriesCircle = categories? 'categories-icon-circle-o' : 'categories-icon-circle'
  const catCircleAll = categories? 'cat-circle-all-o' : 'cat-circle-all'
  const homeButtonState = homeState? 'appear-home-button' : 'disable-home-button'
  const circleListState = circleListHead? 'circle-list-ul-one-open' : 'circle-list-ul-one-close'

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
        setCategories(false)
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    document.querySelector('html').style.overflow = scrollEnabled ? 'auto' : 'hidden';
    return () => {
      document.querySelector('html').style.overflow = 'auto';
    };
  }, [scrollEnabled]);
  // const languageHandleClick = () => {
  //   setLanguageClicked(true);
  //   setTimeout(() => {
  //     setLanguageClicked(false);
  //   }, 1000);
  // }
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
    if (location.pathname === '/Lighting') {
      setLighting(true);
    } else {
      setLighting(false);
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
    if (location.pathname === '/Maintenance') {
      setMaintenanceState(true);
    } else {
      setMaintenanceState(false);
    }
    if (location.pathname === '/Accessories') {
      setAccessoriesStateIcon(true);
    } else {
      setAccessoriesStateIcon(false);
    }
    },);
  return (
    <div className={scrollState}>
    <div className='fa-container'>
      <div className={circleState}></div>
        <div className={liState}>
        <ul className='circle-list-ul circle-list-ul-all'>
				<li theLittleDetails="Buy at Tom's shop" onClick={ () => setCircleListHead(!circleListHead)}>CATEGORIES</li>
				<ul className={`circle-list-ul-ul circle-list-ul-all ${circleListState}`}>
					<li theLittleDetails="The big kind">
            <Link className='menu-list-link' to="/Furniture" onClick={() => setCategories(false)}>
              FURNITURES
            </Link>
          </li>
					<li theLittleDetails="Make sure they're ripe">
            <Link className='menu-list-link' to="/Appliances" onClick={() => {setCategories(false); setList(false)}}>
              APPLIANCES
            </Link>
          </li>
					<li theLittleDetails="White onions, not purple">
            <Link className='menu-list-link' to="/Doors" onClick={() => {setCategories(false); setList(false)}}>
              DOORS
            </Link>
          </li>
					<li theLittleDetails="Without the green stuff on it">
            <Link className='menu-list-link' to="/Lighting" onClick={() => {setCategories(false); setList(false)}}>
              LIGHTING
            </Link>
          </li>
					<li theLittleDetails="Not trail mix">
            <Link className='menu-list-link' to="/Marble" onClick={() => {setCategories(false); setList(false)}}>
              MARBLE
            </Link>
          </li>
					<li theLittleDetails="Not trail mix">
            <Link className='menu-list-link' to="/Gym" onClick={() => {setCategories(false); setList(false)}}>
              GYM
            </Link>
          </li>
					<li theLittleDetails="Not trail mix">
            <Link className='menu-list-link' to="/Sanitary" onClick={() => {setCategories(false); setList(false)}}>
              SANITARY
            </Link>
          </li>
					<li theLittleDetails="Not trail mix">
            <Link className='menu-list-link' to="/Fitout" onClick={() => {setCategories(false); setList(false)}}>
              FIT-OUT
            </Link>
          </li>
					<li theLittleDetails="Not trail mix">
            <Link className='menu-list-link' to="/ceramics" onClick={() => {setCategories(false); setList(false)}}>
              CERAMICS
            </Link>
          </li>
					<li theLittleDetails="Not trail mix">
            <Link className='menu-list-link' to="/Curtains" onClick={() => {setCategories(false); setList(false)}}>
              CURTAINS
            </Link>
          </li>
					<li theLittleDetails="Not trail mix">
            <Link className='menu-list-link' to="/Maintenance" onClick={() => {setCategories(false); setList(false)}}>
              MAINTENANCE
            </Link>
          </li>
					<li theLittleDetails="Not trail mix">
            <Link className='menu-list-link' to="/Accessories" onClick={() => {setCategories(false); setList(false)}}>
              ACCESSORIES
            </Link>
          </li>
				</ul>
				<li theLittleDetails="Seeking inquiry through a request." onClick={handleToggle}>Send Inquiry</li>
				<li theLittleDetails="Join To Us">Careers</li>
				<li theLittleDetails="Talk to Us">
          <a className='menu-list-link' href="https://api.whatsapp.com/send?phone=971501272852" target="_blank">
            Contact Us
          </a>
        </li>
			</ul>
        </div>
      <div className={listState} onClick={() => {setList(!list); setCategories(false); setScrollEnabled(!scrollEnabled);setCircleListHead(false)}}>
        <span className={fa2State}></span>
        <span className={fa1State}></span>
        <span className={fa3State}></span>
      </div>
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
          <div className='nav-careers-cont' onClick={handleToggle}>
            <span>Send Inquiry</span>
          </div>
        </div>
          <div className='space-width'></div>
        <div className={`${categoriesCircle} ${catListScroll}`}>
          <Link to="/Maintenance" onClick={() => setCategories(false)}><div className={`Maintenance-box ${catCircleAll} ${maintenanceStateIcon}`} ><FaScrewdriverWrench className='cat-icon'/><span className='cat-text Maintenance-box'>Maintenance</span></div></Link>
          <Link to="/Furniture" onClick={() => setCategories(false)}><div className={`furniture-box ${catCircleAll} ${furnitureStateIcon}`} ><FaCouch className='cat-icon'/><span className='cat-text'>Furniture</span></div></Link>
          <Link to="/Appliances" onClick={() => setCategories(false)}><div className={`Appliances-box ${catCircleAll} ${appliancesStateIcon}`} ><RiFridgeFill className='cat-icon'/><span className='cat-text'>Appliances</span></div></Link>
          <Link to="/ceramics" onClick={() => setCategories(false)}><div className={`Ceramics-box ${catCircleAll} ${ceramicsStateIcon}`} ><FaBorderAll className='cat-icon'/><span className='cat-text'>Ceramics</span></div></Link>
          <Link to="/Sanitary" onClick={() => setCategories(false)}><div className={`Sanitary-box ${catCircleAll} ${sanitaryStateIcon}`} ><FaToilet className='cat-icon'/><span className='cat-text'>Sanitary</span></div></Link>
          <Link to="/Lighting" onClick={() => setCategories(false)}><div className={`Lighting-box ${catCircleAll} ${LightingIcon}`} ><GiElectricalSocket className='cat-icon'/><span className='cat-text'>Lighting</span></div></Link>
          <Link to="/Main" onClick={() => setCategories(false)} className={homeButtonState}><div className={`Home-box ${catCircleAll}`} ><BiSolidHome className='cat-icon-home'/><span className='cat-text-home'>Home</span></div></Link>
          <Link to="/Gym" onClick={() => setCategories(false)}><div className={`GYM-box ${catCircleAll} ${gymStateIcon}`} ><CgGym className='cat-icon'/><span className='cat-text'>GYM</span></div></Link>
          <Link to="/Doors" onClick={() => setCategories(false)}><div className={`Doors-box ${catCircleAll} ${doorStateIcon}`} ><BsDoorOpenFill className='cat-icon'/><span className='cat-text'>Doors</span></div></Link>
          <Link to="/Fitout" onClick={() => setCategories(false)}><div className={`Fit-out-box ${catCircleAll} ${fitoutStateIcon}`} ><BsBuildings className='cat-icon'/><span className='cat-text'>Fit-out</span></div></Link>
          <Link to="/Marble" onClick={() => setCategories(false)}><div className={`Marble-box ${catCircleAll} ${marbleStateIcon}`} ><GiMarbles className='cat-icon'/><span className='cat-text'>Marble</span></div></Link>
          <Link to="/Curtains" onClick={() => setCategories(false)}><div className={`Curtains-box ${catCircleAll} ${curtinStateIcon}`} ><GiTheaterCurtains className='cat-icon'/><span className='cat-text'>Curtains</span></div></Link>
          <Link to="/Accessories" onClick={() => setCategories(false)}><div className={`Accessories-box ${catCircleAll} ${accessoriesStateIcon}`} ><FaUsersCog className='cat-icon'/><span className='cat-text Accessories-box'>Accessories</span></div></Link>
        </div>
          <Link to="/Main" className='nav-logo-cont' onClick={() => setCategories(false)}>
          {/* <span class="go-main-text">Home Page</span> */}
              <div className='Nav-Logo-parts-cont' >
                  <img src={part1} alt='' className={`Image-logo-part-1 ${logoState1}`}/>
                  <img src={part2} alt='' className={`Image-logo-part-2 ${logoState2}`}/>
                  <img src={part3} alt='' className={`Image-logo-part-3 ${logoState3}`}/>
            </div>
          </Link>
          <div className='space-width'></div>
    <div className='list-all-cont-box'>
      <div className='nav-contact-cont'>
        <a href="tel:009710501272852">050 127 2852</a>
      </div>
    </div>
    <div className='list-all-cont-box'>
      <div className='nav-email-cont'>
        <a href="https://api.whatsapp.com/send?phone=971501272852" target="_blank">Chat With Us</a>
      </div>
    </div>
        <div className='Language-bar-cont-par'>
          <div className={`Language-bar-cont`}>
            <div className={`language-butt-cont ${arabicIsClose}`} onClick={() => {setArabicActive(false);setEnglishActive(true)}}>
              <span className='language-butt-text'>EN</span>
              <img src={enLanguage} alt='' className='language-butt-flag'/>
            </div>
            <div className={`language-butt-cont ${englishIsClose}`}  onClick={() => {setArabicActive(true);setEnglishActive(false)}}>
              <span className='language-butt-text'>AR</span>
              <img src={arLanguage} alt='' className='language-butt-flag'/>
            </div>
          </div>
        </div>
      </div>
  )
}
export default NavBar
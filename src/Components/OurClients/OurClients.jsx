import React from 'react'
import point from "../../Images/Logo/part5.png"
import AMLogo from "../../Images/Logo/AMLogo.png"
import ReporajLogo from "../../Images/Logo/ReportajLogo.png"
import TIJLogo from '../../Images/Logo/TIJLogo.png'
import ModeonLogo from '../../Images/Logo/ModeonLogo.png'
import EmiratesLogo from '../../Images/Logo/EmiratesLikLogo.png'
import FattanLogo from '../../Images/Logo/FattanLogo.png'
import SSPDLogo from '../../Images/Logo/SSPDLogo.png'
import RotanaLogo from '../../Images/Logo/RotanaLogo.png'
import TahnonLogo from '../../Images/Logo/TahnonLogo.png'
import './OurClients.css'

const OurClients = () => {
  return (
    <div className='our-clients-cont'>
			<div className='main-title-cont main-title small'>
					<img src={point} alt='' className='point'/> 
					<span>DISCOVER US</span>
			</div>
			<div className='main-title large'>OUR CLIENTS</div>
			<div className='clients-container'>
				<div className="clients-card-cont">
					<div className='clients-card-ch'>
						<img className='clients-card-img' src={ReporajLogo} alt="NFT" />
					</div>
				</div>
				<div className="clients-card-cont">
					<div className='clients-card-ch'>
						<img className='clients-card-img' src={AMLogo} alt="NFT" />
						{/* <h2>A&M INTERNATIONAL</h2> */}
					</div>
				</div>
				<div className="clients-card-cont">
					<div className='clients-card-ch'>
						<img className='clients-card-img' src={TIJLogo} alt="NFT" />
					</div>
				</div>
				<div className="clients-card-cont">
					<div className='clients-card-ch'>
						<img className='clients-card-img' src={ModeonLogo} alt="NFT" />
					</div>
				</div>
				<div className="clients-card-cont">
					<div className='clients-card-ch'>
						<img className='clients-card-img' src={EmiratesLogo} alt="NFT" />
					</div>
				</div>
				<div className="clients-card-cont">
					<div className='clients-card-ch'>
						<img className='clients-card-img' src={FattanLogo} alt="NFT" />
					</div>
				</div>
				<div className="clients-card-cont">
					<div className='clients-card-ch'>
						<img className='clients-card-img' src={SSPDLogo} alt="NFT" />
					</div>
				</div>
				<div className="clients-card-cont">
					<div className='clients-card-ch'>
						<img className='clients-card-img' src={RotanaLogo} alt="NFT" />
					</div>
				</div>
				{/* <div className="clients-card-cont">
					<div className='clients-card-ch'>
						<img className='clients-card-img' src={TahnonLogo} alt="NFT" />
					</div>
				</div> */}
			</div>
    </div>
  )
}

export default OurClients